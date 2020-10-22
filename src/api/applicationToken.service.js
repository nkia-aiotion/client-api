import { client } from '../http'
import { APPLICATION_TOKEN_URL } from '../constants/url.constants'

const url = APPLICATION_TOKEN_URL.APP_TOKENS_URL

const getApplicationTokens = () => client.get(url)
const getApplicationToken = (tokenId) => client.get(`${url}/${tokenId}`)
const createApplicationToken = (request) => client.post(url, request)
const revokeApplicationToken = (tokenId) => client.delete(`${url}/${tokenId}`)

export { getApplicationTokens, getApplicationToken, createApplicationToken, revokeApplicationToken }
