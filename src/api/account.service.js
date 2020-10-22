import { client } from '../http'
import { urlConstants } from '../constants'

const ACCOUNT_URL = urlConstants.ACCOUNT_URL

const getCurrentUserInfo = () => client.get(ACCOUNT_URL.API_CURRENT_USER_INFO_URL)
const updateCurrentUserInfo = (user) => client.put(ACCOUNT_URL.API_CURRENT_USER_INFO_URL, user)
const changePassword = (request) => client.put(ACCOUNT_URL.API_CHANGE_PASSWORD_URL, request)

export { getCurrentUserInfo, updateCurrentUserInfo, changePassword }
