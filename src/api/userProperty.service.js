import { client } from '../http'
import { urlConstants } from '../constants'

const USER_PROPERTY_URL = urlConstants.USER_PROPERTY_URL

const getCurrentUserProperty = ({ type }) => client.get(`${USER_PROPERTY_URL.API_CURRENT_USER_PROPERTY_URL}/${type}`)
const saveCurrentUserProperty = ({ type, contents }) =>
    client.put(`${USER_PROPERTY_URL.API_CURRENT_USER_PROPERTY_URL}/${type}`, contents)
const deleteCurrentUserProperty = ({ type }) =>
    client.delete(`${USER_PROPERTY_URL.API_CURRENT_USER_PROPERTY_URL}/${type}`)

const getUserProperty = ({ id, type }) => client.get(`${USER_PROPERTY_URL.API_USER_PROPERTY_URL}/${id}/${type}`)
const saveUserProperty = ({ id, type, contents }) =>
    client.put(`${USER_PROPERTY_URL.API_USER_PROPERTY_URL}/${id}/${type}`, contents)
const deleteUserProperty = ({ id, type }) => client.delete(`${USER_PROPERTY_URL.API_USER_PROPERTY_URL}/${id}/${type}`)

const getCurrentUserBeepProperty = () => client.get(`${USER_PROPERTY_URL.API_CURRENT_USER_PROPERTY_URL}/BEEP_ENABLED`)

export {
    getCurrentUserProperty,
    saveCurrentUserProperty,
    deleteCurrentUserProperty,
    getUserProperty,
    saveUserProperty,
    deleteUserProperty,
    getCurrentUserBeepProperty,
}
