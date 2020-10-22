const { protocol, hostname } = location
let { port } = location
if (!port) {
    if (protocol === 'https:') {
        port = '443'
    } else {
        port = '80'
    }
}
let webscoketUrl
let locationUrl
if (protocol === 'https:') {
    webscoketUrl = 'wss:'
    locationUrl = 'https:'
} else {
    webscoketUrl = 'ws:'
    locationUrl = 'http:'
}
webscoketUrl += `//${hostname}:${port}`
locationUrl += `//${hostname}:${port}`

const config = {
    wsUrl: webscoketUrl,
    baseUrl: locationUrl,
}
if (parent.thingstar) {
    const { used, wsUrl, baseUrl } = parent.thingstar
    if (used) {
        config.wsUrl = wsUrl
        config.baseUrl = baseUrl
    }
}

export default config
