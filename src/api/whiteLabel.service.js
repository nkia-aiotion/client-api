import { client } from '../http'
import { urlConstants } from '../constants'

const { WHITELABEL_URL } = urlConstants

const getWhiteLabel = () => client.get(WHITELABEL_URL.API_NOAUTH_WHITE_LABEL, null, null, null, true)

export { getWhiteLabel }
