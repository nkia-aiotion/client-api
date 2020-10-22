import { client } from '../http'
import { INTEGRATION_URL } from '../constants/url.constants'

const getIntegrations = (params = { name: null, type: null }) => client.get(INTEGRATION_URL.INTEGRATIONS_URL, params)

const getIntegration = (id) => client.get(`${INTEGRATION_URL.INTEGRATIONS_URL}/${id}`)

const saveIntegration = (integration) => client.post(INTEGRATION_URL.INTEGRATIONS_URL, integration)

const updateIntegration = (integration) => client.put(INTEGRATION_URL.INTEGRATIONS_URL, integration)

const deleteIntegration = (id) => client.delete(`${INTEGRATION_URL.INTEGRATIONS_URL}/${id}`)

export { getIntegrations, getIntegration, saveIntegration, updateIntegration, deleteIntegration }
