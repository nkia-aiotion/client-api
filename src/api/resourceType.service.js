import { client } from '../http'
import { urlConstants } from '../constants'

const { RESOURCE_TYPE_URL } = urlConstants

const getResourceType = (type) => client.get(`${RESOURCE_TYPE_URL.API_RESOURCE_TYPE_URL}/${type}`)
const getResourceTypes = () => client.get(RESOURCE_TYPE_URL.API_RESOURCE_TYPES_URL)
const findAllRegisteredResourceTypes = () => client.get(`${RESOURCE_TYPE_URL.API_RESOURCE_TYPE_URL}/registered`)
const getOperationParametersConfig = (param) =>
    client.get(
        `${RESOURCE_TYPE_URL.API_RESOURCE_TYPE_URL}/${param.resourceType}/operation-parameters-config`,
        param.request,
    )

export { getResourceType, getResourceTypes, findAllRegisteredResourceTypes, getOperationParametersConfig }
