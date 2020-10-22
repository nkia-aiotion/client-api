import { client } from '../http'
import { urlConstants } from '../constants'

const { RESOURCE_URL } = urlConstants

const getRootResource = () => client.get(RESOURCE_URL.API_ROOT_RESOURCE_URL)
const getResource = (id) => client.get(`${RESOURCE_URL.API_RESOURCE_URL}/${id}`)
const getChildResource = ({ id, resourceType, name, resourceKey, identifier }) =>
    client.get(`${RESOURCE_URL.API_RESOURCE_URL}/${id}/children`, { resourceType, name, resourceKey, identifier })
const getResources = (params) => client.get(`${RESOURCE_URL.API_RESOURCE_URL}`, params)
const isResourceDeletable = (id) => client.get(`${RESOURCE_URL.API_RESOURCE_URL}/${id}/deletable`)
const deleteResource = (id) => client.delete(`${RESOURCE_URL.API_RESOURCE_URL}/${id}`)
const deleteResources = (resourceIds) => client.get(`${RESOURCE_URL.API_RESOURCES_URL}`, { resourceIds })
const getDiscoveryTypes = (id) => client.get(`${RESOURCE_URL.API_RESOURCE_URL}/${id}/discovery-types`)
const createConnectionConfig = (resourceType) =>
    client.post(`${RESOURCE_URL.API_CONNECTION_CONFIG_URL}/${resourceType}`)
const discoverResourceInfo = (param) =>
    client.post(`${RESOURCE_URL.API_DISCOVERY_URL}/${param.id}/${param.resourceType}`, param.connectionConfiguration)
const addResource = (resourceInfo) => client.post(`${RESOURCE_URL.API_RESOURCE_URL}`, resourceInfo)
const updateBasicInfo = (param) => client.put(`${RESOURCE_URL.API_RESOURCE_URL}/${param.id}/basic-info`, param.resource)
const updateParent = (param) => client.put(`${RESOURCE_URL.API_RESOURCE_URL}/${param.id}/parent`, param.resource)
const updatePollingPolicy = (param) =>
    client.put(`${RESOURCE_URL.API_RESOURCE_URL}/${param.id}/polling-policy`, param.resource)
const getConnectionConfig = (id) => client.get(`${RESOURCE_URL.API_RESOURCE_URL}/${id}/connection-config`)
const updateConnectionConfig = (param) =>
    client.put(`${RESOURCE_URL.API_RESOURCE_URL}/${param.id}/connection-config`, param.connectionConfig)
const updateManagementStatus = (param) =>
    client.put(`${RESOURCE_URL.API_RESOURCE_URL}/${param.id}/management-status`, param.resource)
const getAcl = (id) => client.get(`${RESOURCE_URL.API_RESOURCE_URL}/${id}/acl`)
const updateAcl = (param) => client.put(`${RESOURCE_URL.API_RESOURCE_URL}/${param.id}/acl`, param.acl)
const getMeasurementDefinitionsByResource = (id) =>
    client.get(`${RESOURCE_URL.API_RESOURCE_URL}/${id}/measurement-definitions`)
const getDefaultResourceSummary = (id) => client.get(`${RESOURCE_URL.API_RESOURCE_URL}/${id}/summary`)
const getOperationConfig = (resourceId, operationName) =>
    client.get(`${RESOURCE_URL.API_RESOURCE_URL}/${resourceId}/operation-config`, {
        operationName,
    })

const executeOperation = (resourceIds, operationName, parameterConfig) =>
    client.post(
        `${RESOURCE_URL.API_EXECUTE_OPERATION}?resourceIds=${resourceIds}&operationName=${operationName}`,
        parameterConfig
            ? {
                  ...parameterConfig,
              }
            : null,
    )

const getLastMeasurementJobFireTime = (id) => client.get(`${RESOURCE_URL.API_RESOURCE_URL}/${id}/last-fire-time`)
const getLastMeasurementTime = (id) => client.get(`${RESOURCE_URL.API_RESOURCE_URL}/${id}/last-measurement-time`)

const getResourceTypeNamesByIdAncestry = (idAncestry) =>
    client.get(RESOURCE_URL.API_RESOURCES_RESOURCE_TYPE_NAMES_URL, { idAncestry })
const getPagedResources = (params) => client.get(RESOURCE_URL.API_RESOURCES_PAGED_URL, params)

const getResourceDashboard = (id) => client.get(`${RESOURCE_URL.API_RESOURCE_DASHBOARD_URL}/${id}`)
const saveResourceDashboard = (resourceDashboard) =>
    client.post(RESOURCE_URL.API_RESOURCE_DASHBOARD_URL, resourceDashboard)
const updateResourceDashboard = (resourceDashboard) =>
    client.put(RESOURCE_URL.API_RESOURCE_DASHBOARD_URL, resourceDashboard)
const deleteResourceDashboard = (id) => client.get(`${RESOURCE_URL.API_RESOURCE_DASHBOARD_URL}/${id}`)
const updateTargetValue = (param) =>
    client.put(`${RESOURCE_URL.API_RESOURCE_URL}/${param.id}/target-value`, param.resource)
const updateResetValue = (param) =>
    client.put(`${RESOURCE_URL.API_RESOURCE_URL}/${param.id}/reset-value`, param.resource)

export {
    getRootResource,
    getResource,
    getChildResource,
    getResources,
    isResourceDeletable,
    deleteResource,
    deleteResources,
    getDiscoveryTypes,
    createConnectionConfig,
    discoverResourceInfo,
    addResource,
    updateBasicInfo,
    updateParent,
    updatePollingPolicy,
    getConnectionConfig,
    updateConnectionConfig,
    updateManagementStatus,
    getAcl,
    updateAcl,
    getMeasurementDefinitionsByResource,
    getDefaultResourceSummary,
    getOperationConfig,
    executeOperation,
    getLastMeasurementJobFireTime,
    getLastMeasurementTime,
    getResourceTypeNamesByIdAncestry,
    getPagedResources,
    getResourceDashboard,
    saveResourceDashboard,
    updateResourceDashboard,
    deleteResourceDashboard,
    updateTargetValue,
    updateResetValue,
}
