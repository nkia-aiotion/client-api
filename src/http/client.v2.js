import storage from 'store/storages/localStorage'
import axios from 'axios'
import axiosRetry from 'axios-retry'
import qs from 'qs'
import { createBrowserHistory } from 'history'

import { isTokenValidate, setJwtToken, clearAuthentication } from '../actions/authentication/authentication'
import { urlConstants } from '../constants'
import config from '../configs'
import { getAccessToken, isPublicAccess } from '../utils/authUtil'

/*
 * TODO...
 * current url: http://example.
 * if(window.location.href.substr(0,5) !== 'https'){
  window.location.href = window.location.href.replace('http', 'https');
} // new url: https://example.
 */

storage.write('config', JSON.stringify({ thingstar: config }))

const history = createBrowserHistory()

const { CancelToken } = axios

let source = CancelToken.source()

const initInstanceOption = {
    baseURL: JSON.parse(storage.read('config')).thingstar.baseUrl,
    timeout: 30000,
    withCredentials: true,
}

const client = (reqConfig) => {
    const instance = axios.create(initInstanceOption)

    // retries 횟수는 타임아웃 범위 안에서만 유효하다. timeout에 걸리면 retry 진행을 멈춤
    axiosRetry(instance, {
        ...reqConfig,
        retries: reqConfig && typeof reqConfig.retries === 'number' ? reqConfig.retries : 3,
    })

    const reqInterceptor = (method, url, data, headers, responseType) => {
        let defaultHeaders = {}
        const token = getAccessToken()
        if (token) {
            defaultHeaders = {
                Authorization: `Bearer ${token}`,
            }
        }
        const options = {
            method,
            url,
            // options are 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
            responseType: responseType || 'json',
            headers: defaultHeaders,
            paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat', skipNulls: true }),
            cancelToken: source.token,
            timeout:
                reqConfig && typeof reqConfig.timeout === 'number' ? reqConfig.timeout : initInstanceOption.timeout,
        }
        if (data && (method === 'GET' || method === 'DELETE')) {
            options.params = data
        } else if (data) {
            options.data = data
            options.headers = Object.assign(options.headers, {
                'Content-Type': 'application/json',
            })
        }
        if (headers) {
            options.headers = Object.assign(options.headers, headers)
        }
        return new Promise((resolve, reject) => {
            instance
                .request(options)
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    if (error.response) {
                        // eslint-disable-next-line no-param-reassign
                        error.message = error.response.data
                            ? error.response.data.message
                            : `${error.response.status} ${error.response.statusText}`
                    } else {
                        // eslint-disable-next-line no-param-reassign
                        error.message = error.message || `${error.status} ${error.statusText}`
                    }
                    reject(error)
                })
        })
    }

    const validReq = (method, url, data, headers, responseType) => {
        if (!isTokenValidate('access_token')) {
            if (url !== urlConstants.AUTHENTICATION_URL.API_LOGIN_URL) {
                let refreshToken = storage.read('refresh_token')
                if (url === urlConstants.AUTHENTICATION_URL.API_REFRESH_TOKEN_URL) {
                    return reqInterceptor(method, url, data, headers, responseType)
                }
                if (!isTokenValidate('refresh_token')) {
                    refreshToken = null
                }
                return reqInterceptor('POST', urlConstants.AUTHENTICATION_URL.API_REFRESH_TOKEN_URL, null, {
                    Authorization: `Bearer ${refreshToken}`,
                })
                    .then((response) => {
                        setJwtToken(response.data.access_token, 'access_token')
                        return reqInterceptor(method, url, data, headers, responseType)
                    })
                    .catch((error) => {
                        console.error('[ERROR] Invalid token', error)
                        clearAuthentication()
                        // eslint-disable-next-line no-restricted-globals
                        location.pathname = '/login'
                        history.push('/login')
                    })
            }
        }
        return reqInterceptor(method, url, data, headers, responseType)
    }

    return {
        get(url, data, headers, responseType, noauth = isPublicAccess()) {
            if (noauth) {
                return reqInterceptor('GET', url, data, headers, responseType)
            }
            return validReq('GET', url, data, headers, responseType)
        },
        post(url, data, headers, responseType, noauth) {
            if (noauth) {
                return reqInterceptor('POST', url, data, headers, responseType)
            }
            return validReq('POST', url, data, headers, responseType)
        },
        delete(url, data, headers, responseType, noauth) {
            if (noauth) {
                return reqInterceptor('DELETE', url, data, headers, responseType)
            }
            return validReq('DELETE', url, data, headers, responseType)
        },
        put(url, data, headers, responseType, noauth = isPublicAccess()) {
            if (noauth) {
                return reqInterceptor('PUT', url, data, headers, responseType)
            }
            return validReq('PUT', url, data, headers, responseType)
        },
        patch(url, data, headers, responseType) {
            return validReq('PATCH', url, data, headers, responseType)
        },
        all(requests) {
            return Promise.all(requests)
        },
    }
}

export const cancelRequest = (msg = 'Request Canceled') => {
    source.cancel(msg)
    source = CancelToken.source()
}

export default client
