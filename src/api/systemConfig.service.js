import { client } from '../http'
import { urlConstants } from '../constants'

const SYSTEM_CONFIG_URL = urlConstants.SYSTEM_CONFIG_URL

const getSystemConfigs = () => client.get(SYSTEM_CONFIG_URL.API_SYSTEM_CONFIG_URL)
const getSystemConfig = (id) => client.get(`${SYSTEM_CONFIG_URL.API_SYSTEM_CONFIG_URL}/${id}`)
const updateSystemConfig = (systemConfig) => client.put(SYSTEM_CONFIG_URL.API_SYSTEM_CONFIG_URL, systemConfig)
const getSystemProperty = (name) => client.get(`${SYSTEM_CONFIG_URL.API_SYSTEM_PROPERTY_URL}/${name}`)
const sendTestMail = (testMail) => client.post(SYSTEM_CONFIG_URL.API_SYSTEM_CONFIG_TEST_MAIL_URL, testMail)

export { getSystemConfigs, getSystemConfig, updateSystemConfig, getSystemProperty, sendTestMail }
