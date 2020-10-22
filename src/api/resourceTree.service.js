import { client, client2 } from '../http'
import { urlConstants } from '../constants'

const { RESOURCE_URL } = urlConstants

const getRootResource = () => client.get(`${RESOURCE_URL.API_RESOURCE_TREE_URL}/root`)
const getResourceChildren = (parentResourceId) =>
    client2().get(`${RESOURCE_URL.API_RESOURCE_TREE_URL}/${parentResourceId}/children`)
const getResourceTreeByType = (resourceType, textSearch) =>
    client.get(`${RESOURCE_URL.API_RESOURCE_TREE_TYPE_URL}`, { resourceType, textSearch })

export { getRootResource, getResourceChildren, getResourceTreeByType }
