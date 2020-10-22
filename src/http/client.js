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

const instance = axios.create({
    baseURL: JSON.parse(storage.read('config')).thingstar.baseUrl,
    timeout: 30000,
    withCredentials: true,
})

axiosRetry(instance, {
    retries: 0,
})

const requestInterceptor = (method, url, data, headers, responseType) => {
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

const validateRequest = (method, url, data, headers, responseType) => {
    if (!isTokenValidate('access_token')) {
        if (url !== urlConstants.AUTHENTICATION_URL.API_LOGIN_URL) {
            let refreshToken = storage.read('refresh_token')
            if (url === urlConstants.AUTHENTICATION_URL.API_REFRESH_TOKEN_URL) {
                return requestInterceptor(method, url, data, headers, responseType)
            }
            if (!isTokenValidate('refresh_token')) {
                refreshToken = null
            }
            return requestInterceptor('POST', urlConstants.AUTHENTICATION_URL.API_REFRESH_TOKEN_URL, null, {
                Authorization: `Bearer ${refreshToken}`,
            })
                .then((response) => {
                    setJwtToken(response.data.access_token, 'access_token')
                    return requestInterceptor(method, url, data, headers, responseType)
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
    return requestInterceptor(method, url, data, headers, responseType)
}

const client = {
    get(url, data, headers, responseType, noauth = isPublicAccess()) {
        if (noauth) {
            return requestInterceptor('GET', url, data, headers, responseType)
        }
        return validateRequest('GET', url, data, headers, responseType)
    },
    post(url, data, headers, responseType, noauth) {
        if (noauth) {
            return requestInterceptor('POST', url, data, headers, responseType)
        }
        return validateRequest('POST', url, data, headers, responseType)
    },
    delete(url, data, headers, responseType, noauth) {
        if (noauth) {
            return requestInterceptor('DELETE', url, data, headers, responseType)
        }
        return validateRequest('DELETE', url, data, headers, responseType)
    },
    put(url, data, headers, responseType, noauth = isPublicAccess()) {
        if (noauth) {
            return requestInterceptor('PUT', url, data, headers, responseType)
        }
        return validateRequest('PUT', url, data, headers, responseType)
    },
    patch(url, data, headers, responseType) {
        return validateRequest('PATCH', url, data, headers, responseType)
    },
    all(requests) {
        return Promise.all(requests)
    },
}

export default client
