import { client } from '../http'
import { CUSTOM_PROPERTY_URL } from '../constants/url.constants'

const saveCustomPropertyDefinition = (customPropertyDefinition) =>
    client.post(CUSTOM_PROPERTY_URL.API_CUSTOM_PROPERTY_DEFINITIONS, customPropertyDefinition)

const updateCustomPropertyDefinition = (customPropertyDefinitions) =>
    client.put(CUSTOM_PROPERTY_URL.API_CUSTOM_PROPERTY_DEFINITIONS, customPropertyDefinitions)

const deleteCustomPropertyDefinition = (id) =>
    client.delete(`${CUSTOM_PROPERTY_URL.API_CUSTOM_PROPERTY_DEFINITIONS}/${id}`)

const deleteCustomPropertyDefinitionByResourceType = (resourceType) =>
    client.delete(CUSTOM_PROPERTY_URL.API_CUSTOM_PROPERTY_DEFINITIONS, { resourceType })

const getCustomPropertyDefinitions = (resourceType) =>
    client.get(`${CUSTOM_PROPERTY_URL.API_CUSTOM_PROPERTY_DEFINITIONS}`, { resourceType })

const saveOrUpdateCustomProperties = (payload = { resourceId: null, properties: null }) =>
    client.post(`${CUSTOM_PROPERTY_URL.API_CUSTOM_PROPERTY}/${payload.resourceId}`, payload.properties)

const getCustomProperties = (resourceId) => client.get(`${CUSTOM_PROPERTY_URL.API_CUSTOM_PROPERTY}/${resourceId}`)

export {
    saveCustomPropertyDefinition,
    updateCustomPropertyDefinition,
    deleteCustomPropertyDefinition,
    deleteCustomPropertyDefinitionByResourceType,
    getCustomPropertyDefinitions,
    saveOrUpdateCustomProperties,
    getCustomProperties,
}
