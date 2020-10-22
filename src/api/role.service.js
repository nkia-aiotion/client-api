import { client } from '../http'
import { urlConstants } from '../constants'

const ROLE_URL = urlConstants.ROLE_URL

const getRoles = () => client.get(ROLE_URL.API_ROLES_URL)
const getRole = (id) => client.get(`${ROLE_URL.API_ROLES_URL}/${id}`)
const saveRole = (role) => client.post(ROLE_URL.API_ROLES_URL, role)
const updateRole = (role) => client.put(ROLE_URL.API_ROLES_URL, role)
const deleteRole = (ids) => client.all(ids.map((id) => client.delete(`${ROLE_URL.API_ROLES_URL}/${id}`)))
const getPermissions = () => client.get(`${ROLE_URL.API_ROLES_URL}/permissions`)

export { getRoles, getRole, saveRole, updateRole, deleteRole, getPermissions }
