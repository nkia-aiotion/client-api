import { client } from '../http'
import { urlConstants } from '../constants'

const { API_ACCESS_KEY } = urlConstants.ACCESS_KEY_URL

export const createAccessKey = (accessKey) => client.post(API_ACCESS_KEY, accessKey)

export const deleteAccessKey = (key) => client.delete(`${API_ACCESS_KEY}/${key}`)

export const updateAccessKey = (key, accessKey) => client.patch(`${API_ACCESS_KEY}/${key}`, accessKey)

export const getAccessKeys = (searchString) => client.get(API_ACCESS_KEY, { searchString })

export const getAccessKey = (key) => client.get(`${API_ACCESS_KEY}/${key}`)
