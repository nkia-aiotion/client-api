import { client } from '../http'
import { urlConstants } from '../constants'

const { USER_URL } = urlConstants

const getUsers = () => client.get(USER_URL.API_USERS_URL)
const getUser = (id) => client.get(`${USER_URL.API_USERS_URL}/${id}`)
const saveUser = (user) => client.post(USER_URL.API_USERS_URL, user)
const updateUser = (user) => client.put(USER_URL.API_USERS_URL, user)
const deleteUser = (id) => client.delete(`${USER_URL.API_USERS_URL}/${id}`)
const isExistUser = (id) => client.get(`${USER_URL.API_USERS_URL}/${id}/exist`)
const updateUserBatch = (users) => client.put(`${USER_URL.API_USERS_URL}/batch`, users)
const saveUserBatch = ({ users, duplication }) => client.put(`${USER_URL.API_USERS_URL}/csv/${duplication}`, users)

export { getUsers, getUser, saveUser, updateUser, deleteUser, isExistUser, updateUserBatch, saveUserBatch }
