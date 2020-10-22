import { client } from '../http'
import { urlConstants } from '../constants'

const { AUDIT_URL } = urlConstants
const getAuditLogs = (request) => client.get(`${AUDIT_URL.API_AUDIT_URL}`, request)

export { getAuditLogs }
