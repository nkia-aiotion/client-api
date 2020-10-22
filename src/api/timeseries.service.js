import { client } from '../http'
import { TIMESERIES_URL } from '../constants/url.constants'

const getTimeseries = ({ resourceId, key, startTime, endTime, aggregation, interval, limit = 1000 }) =>
    client.get(`${TIMESERIES_URL.API_TIMESERIES}/${resourceId}/timeseries`, {
        key,
        startTime,
        endTime,
        aggregation,
        interval,
        limit,
    })

const getMultipleTimeseries = (params) =>
    client.get(`${TIMESERIES_URL.API_TIMESERIES}/timeseries`, {
        resourceIds: params.map((p) => p.resourceIds),
        keys: params.map((p) => p.keys),
        startTimes: params.map((p) => p.startTime),
        endTimes: params.map((p) => p.endTime),
        aggregations: params.map((p) => p.aggregation),
        intervals: params.map((p) => p.interval),
        limits: params.map((p) => p.limit),
    })

const getMultiTimeseries = (param) => {
    /*
        {
            resourceIds: id,
            startTimes: time,
            endTimes: time+1,
            keys: ['time_durr_a', 'time_durr_b', 'time_durr_c', 'revolve'],
            aggregations: 'NONE',
            intervals: 0,
            limits: 1000,
        }
     */
    const initState = Object.keys(param).reduce((acc, curr) => {
        acc[curr] = []
        return acc
    }, {})
    const newParam = Object.keys(param).reduce((acc, curr) => {
        if (curr === 'keys') {
            acc[curr] = param[curr]
        } else {
            param.keys.forEach((k, i) => {
                acc[curr].push(param[curr])
            })
        }
        return acc
    }, initState)
    return client.get(`${TIMESERIES_URL.API_TIMESERIES}/timeseries`, newParam)
}

const getMultiTimeseriesStr = (param) => {
    /*
        {
            resourceId: id,
            time,
            keys: ['currenta', 'currentb', 'currentc'],
            interval: 1,
            limit: 1000,
        }
     */
    const { resourceId } = param
    return client.get(`/api/ts/${resourceId}/multiTimeseries-str`, param)
}

const getTimeseriesStr = (param) => {
    const { resourceId } = param
    return client.get(`/api/ts/${resourceId}/timeseries-str`, param)
}

const getStatistics = ({ resourceId, keys, startTime, endTime }) =>
    client.get(`${TIMESERIES_URL.API_TIMESERIES}/${resourceId}/stat`, { keys, startTime, endTime })

const getLatest = ({ resourceId, keys }) =>
    client.get(`${TIMESERIES_URL.API_TIMESERIES}/${resourceId}/latest`, { keys })

const getLatestOrdered = ({ idAncestries, resourceType, key, limit, isAscending = false }) =>
    client.get(`${TIMESERIES_URL.API_TIMESERIES}/latest/ordered`, {
        idAncestries,
        resourceType,
        key,
        limit,
        isAscending,
    })
const getLatestsOrdered = ({ resourceIds, key, limit, isAscending = false }) =>
    client.get(`${TIMESERIES_URL.API_TIMESERIES}/latests/ordered`, {
        resourceIds,
        key,
        limit,
        isAscending,
    })
const getTsMetadatas = () => client.get(TIMESERIES_URL.API_TIMESERIES_MEATADATA)

const getTsMetadata = (key) => client.get(`${TIMESERIES_URL.API_TIMESERIES_MEATADATA}/${key}`)

const saveTsMetadata = (metadata) => client.post(TIMESERIES_URL.API_TIMESERIES_MEATADATA, metadata)

const updateTsMetadata = (metadata) => client.put(TIMESERIES_URL.API_TIMESERIES_MEATADATA, metadata)

const deleteTsMetadata = (key) => client.delete(`${TIMESERIES_URL.API_TIMESERIES_MEATADATA}/${key}`)

const getMultipleStats = ({ resourceIds, key, startTime, endTime }) =>
    client.get(TIMESERIES_URL.API_TIMESERIES_STAT_MULTI, { resourceIds, key, startTime, endTime })

const getMultipleLatests = ({ resourceIds, key }) =>
    client.get(TIMESERIES_URL.API_TIMESERIES_LATEST_MULTI, { resourceIds, key })

const getLatests = ({ resourceIds, keys }) => client.get(TIMESERIES_URL.API_TIMESERIES_LATESTS, { resourceIds, keys })

const deleteLatest = (resourceId, key) =>
    client.delete(`${TIMESERIES_URL.API_TIMESERIES}/${resourceId}/latest`, { key })

export {
    getTimeseries,
    getMultipleTimeseries,
    getMultiTimeseries,
    getMultiTimeseriesStr,
    getTimeseriesStr,
    getStatistics,
    getLatest,
    getLatestOrdered,
    getLatestsOrdered,
    getTsMetadatas,
    getTsMetadata,
    saveTsMetadata,
    updateTsMetadata,
    deleteTsMetadata,
    getMultipleStats,
    getMultipleLatests,
    getLatests,
    deleteLatest,
}
