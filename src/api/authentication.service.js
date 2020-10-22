import { client } from '../http'
import { urlConstants } from '../constants'

const { AUTHENTICATION_URL } = urlConstants

const login = ({ userId, password }) => client.post(AUTHENTICATION_URL.API_LOGIN_URL, { userId, password })

const refreshToken = (token) =>
    client.post(AUTHENTICATION_URL.API_REFRESH_TOKEN_URL, null, { Authorization: `Bearer ${token}` })

const getAccountLockoutCount = () => client.get(AUTHENTICATION_URL.API_ACCOUNT_LOCKOUT, null, null, null, true)

export { login, refreshToken, getAccountLockoutCount }
