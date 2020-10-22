import { client } from '../http'
import { urlConstants } from '../constants'

const {
    STATISTICS_URL: { API_STAT_FILTERS, API_STAT_MARKERS },
} = urlConstants

const getStatFilter = (id) => client.get(`${API_STAT_FILTERS}/${id}`)

const getStatFilters = (userId) => client.get(API_STAT_FILTERS, { userId })

const saveStatFilter = (filter) => client.post(API_STAT_FILTERS, filter)

const updateStatFilter = (filter) => client.put(API_STAT_FILTERS, filter)

const deleteStatFilter = (id) => client.delete(API_STAT_FILTERS, { id })

const getStatMarker = (id) => client.get(`${API_STAT_MARKERS}/${id}`)

const getStatMarkers = ({ resourceId, key, startTime, endTime }) =>
    client.get(API_STAT_MARKERS, { resourceId, key, startTime, endTime })

const getMultipleStatMarkers = (resourceIds, keys, startTime, endTime) =>
    client.get(`${API_STAT_MARKERS}/multiple`, {
        resourceIds,
        keys,
        startTime,
        endTime,
    })

const saveStatMarker = (marker) => client.post(API_STAT_MARKERS, marker)

const updateStatMarker = (marker) => client.put(API_STAT_MARKERS, marker)

const deleteStatMarker = (id) => client.delete(API_STAT_MARKERS, { id })

export {
    getStatFilter,
    getStatFilters,
    saveStatFilter,
    updateStatFilter,
    deleteStatFilter,
    getStatMarker,
    getStatMarkers,
    saveStatMarker,
    updateStatMarker,
    deleteStatMarker,
    getMultipleStatMarkers,
}
