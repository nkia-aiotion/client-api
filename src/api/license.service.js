import { client } from '../http'
import { urlConstants } from '../constants'
import { systemConfigService } from '.'

export const getLicenseStatus = () => client.get(urlConstants.LICENSE_URL.API_LICENSE_STATUS)

export const getCurrentResourceCount = () => client.get(urlConstants.LICENSE_URL.API_LICENSE_RESOURCE_COUNT)

export const updateLicense = (license) => systemConfigService.updateSystemConfig(license)
