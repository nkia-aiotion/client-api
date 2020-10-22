import { createActionTypes } from '../actionHelper'

const API_POST_LOGIN = createActionTypes('API_POST_LOGIN')
const LOGOUT = createActionTypes('LOGOUT')
const API_POST_REFRESH_TOKEN = createActionTypes('API_POST_REFRESH_TOKEN')
const VALIDATE_REFRESH = createActionTypes('VALIDATE_REFRESH')

export { API_POST_LOGIN, LOGOUT, API_POST_REFRESH_TOKEN, VALIDATE_REFRESH }
