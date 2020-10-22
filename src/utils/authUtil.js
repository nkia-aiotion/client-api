import storage from 'store/storages/localStorage'
import sessionStorage from 'store/storages/sessionStorage'
import { strToBool } from './commons'

const isPublicAccess = () => strToBool(sessionStorage.read('public_access'))
const getAccessToken = () => (!isPublicAccess() ? storage.read('access_token') : storage.read('application_token'))

export { isPublicAccess, getAccessToken }
