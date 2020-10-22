import { client } from '../http'
import { urlConstants } from '../constants'

const { PAS_URL } = urlConstants

const getAnomaly = ({ resourceId, definitionIds, startTimeMs, endTimeMs, mode }) =>
    client.get(`${PAS_URL.API_ANOMALY_URL}/${resourceId}?definitionIds=${definitionIds}`, {
        startTimeMs,
        endTimeMs,
        mode,
    })

const getAnomalyScatter = ({
    resourceId,
    resourceTypes,
    resourceIds,
    measurementDefinitionIds,
    startTimeMs,
    endTimeMs,
    mode,
    isFiltered,
}) =>
    client.get(`${PAS_URL.API_ANOMALY_SCATTER_URL}/${resourceId}`, {
        resourceTypes,
        resourceIds,
        measurementDefinitionIds,
        startTimeMs,
        endTimeMs,
        mode,
        isFiltered,
    })

const getAnomalyInstant = ({ resourceIds, resourceTypes, startTimeMs, endTimeMs, mode, isFiltered }) =>
    client.get(`${PAS_URL.API_ANOMALY_INSTANT_URL}`, {
        resourceIds,
        resourceTypes,
        startTimeMs,
        endTimeMs,
        mode,
        isFiltered,
    })

const getAnomalyOnDemand = ({ resourceIds, mdIds, startTimeMs, endTimeMs, mode, isFiltered }) =>
    client.get(`${PAS_URL.API_ANOMALY_ON_DEMAND_URL}`, {
        resourceIds,
        mdIds,
        startTimeMs,
        endTimeMs,
        mode,
        isFiltered,
    })

const getAnomalyChangePoints = ({ resourceIds, mdIds, startTimeMs, endTimeMs, mode }) =>
    client.get(`${PAS_URL.API_ANOMALY_CHANGE_POINTS_URL}`, {
        resourceIds,
        mdIds,
        startTimeMs,
        endTimeMs,
        mode,
    })

export { getAnomaly, getAnomalyScatter, getAnomalyInstant, getAnomalyOnDemand, getAnomalyChangePoints }
