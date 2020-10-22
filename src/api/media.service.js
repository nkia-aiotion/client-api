import { client } from '../http'
import { MEDIA_URL } from '../constants/url.constants'

const uploadMedia = (file) => client.post(MEDIA_URL.API_MEDIA, file, { 'Content-Type': 'multipart/form-data' })

const ackMedia = (id) => client.patch(`${MEDIA_URL}/${id}`)

const getMedia = (id) => client.get(`${MEDIA_URL.API_NOAUTH_MEDIA}/${id}`)

const downloadMedia = (id) => client.get(`${MEDIA_URL.API_NOAUTH_MEDIA}/${id}/download`)

const deleteMedia = (id) => client.delete(`${MEDIA_URL.API_MEDIA}/${id}`)

const deleteByIds = (ids) => client.delete(MEDIA_URL.API_MEDIA, { ids })

export { uploadMedia, ackMedia, getMedia, downloadMedia, deleteMedia, deleteByIds }
