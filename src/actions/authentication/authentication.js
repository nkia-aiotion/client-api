import storage from 'store/storages/localStorage'
import sessionStorage from 'store/storages/sessionStorage'
import jwtDecode from 'jwt-decode'

import * as AuthenticationTypes from './AuthenticationTypes'
import { authenticationService } from '../../api'
import { createActionHelper, createActionsHelper } from '../actionHelper'

const clearAuthentication = () => {
    storage.remove('user_id')
    storage.remove('access_token')
    storage.remove('access_token_expiration')
    storage.remove('refresh_token')
    storage.remove('refresh_token_expiration')
    storage.remove('application_token')
    sessionStorage.remove('resources.selected_id')
    sessionStorage.remove('resources.selected_tab')
    sessionStorage.remove('resources.tree_nodes')
    sessionStorage.remove('resources.tree_open_nodes')
    sessionStorage.remove('resources.tree_width')
    sessionStorage.remove('resources.active_setting_panels')
    sessionStorage.remove('public_access')
}

const setJwtExpiredTime = (token, prefix) => {
    const tokenData = jwtDecode(token)
    const expTime = tokenData.exp * 1000
    const issuedAt = tokenData.iat * 1000
    if (issuedAt && expTime) {
        const ttl = expTime - issuedAt
        if (ttl > 0) {
            const clientExpTime = new Date().valueOf() + ttl
            storage.write(`${prefix}_expiration`, clientExpTime)
        }
    }
}

const setJwtToken = (token, tokenName) => {
    storage.write(tokenName, token)
    setJwtExpiredTime(token, tokenName)
}

const isTokenValidate = (prefix) => {
    const token = storage.read(prefix)
    if (token) {
        const expiration = storage.read(`${prefix}_expiration`)
        return expiration && expiration > new Date().valueOf()
    }
    return false
}

const getRefreshTokenActions = createActionsHelper(AuthenticationTypes.API_POST_REFRESH_TOKEN)

const getRefreshTokenRequest = (refreshToken) => (dispatch) => {
    dispatch(getRefreshTokenActions.REQUEST())
    return authenticationService
        .refreshToken(refreshToken)
        .then((response) => {
            setJwtToken(response.data.access_token, 'access_token')
            dispatch(getRefreshTokenActions.SUCCESS())
        })
        .catch((error) => {
            clearAuthentication()
            dispatch(getRefreshTokenActions.FAILURE(error.message))
        })
}

const validateRefreshActions = createActionsHelper(AuthenticationTypes.VALIDATE_REFRESH)

const validateJwtToken = () => {
    const promise = (dispatch) =>
        new Promise((resolve, reject) => {
            if (isTokenValidate('access_token')) {
                resolve(true)
                dispatch(validateRefreshActions.SUCCESS())
            } else {
                if (isTokenValidate('refresh_token')) {
                    const refreshToken = storage.read('refresh_token')
                    dispatch(getRefreshTokenRequest(refreshToken))
                } else {
                    resolve(false)
                    clearAuthentication()
                    dispatch(validateRefreshActions.FAILURE())
                }
            }
        })
    return promise
}

const loginActions = createActionsHelper(AuthenticationTypes.API_POST_LOGIN)

const login = (userId, password) => (dispatch) => {
    dispatch(loginActions.REQUEST())
    return authenticationService
        .login({ userId, password })
        .then((response) => {
            setJwtToken(response.data.access_token, 'access_token')
            setJwtToken(response.data.refresh_token, 'refresh_token')
            storage.write('user_id', userId)
            dispatch(loginActions.SUCCESS())
        })
        .catch((error) => {
            dispatch(loginActions.FAILURE(error.message))
        })
}

const logoutAction = createActionHelper(AuthenticationTypes.LOGOUT.SUCCESS)

const logout = () => (dispatch) => {
    clearAuthentication()
    dispatch(logoutAction())
}

const loginWithToken = (token) => (dispatch) => {
    dispatch(loginActions.REQUEST())
    return new Promise((resolve) => {
        const tokenData = jwtDecode(token)
        const { sub } = tokenData
        setJwtToken(token, 'application_token')
        storage.write('user_id', sub)
        sessionStorage.write('public_access', true)
        dispatch(loginActions.SUCCESS())
        resolve(true)
    })
}

export { login, logout, validateJwtToken, isTokenValidate, setJwtToken, clearAuthentication, loginWithToken }
