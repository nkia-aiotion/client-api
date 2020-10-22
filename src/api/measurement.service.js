import { client } from '../http'
import { urlConstants } from '../constants'

const { MEASUREMENT_URL } = urlConstants

const getLastMeasurementData = (resourceId) => client.get(`${MEASUREMENT_URL.API_MEASUREMENT_URL}/${resourceId}/last`)
const getMeasurementMetricData = ({ resourceId, definitionId, startTimeMs, endTimeMs, mode, baseline = false }) =>
    client.get(`${urlConstants.MEASUREMENT_URL.API_MEASUREMENT_URL}/${resourceId}/metric`, {
        definitionId,
        startTimeMs,
        endTimeMs,
        mode,
        baseline,
    })
const getOrderedMetricList = ({ idAncestry, definitionId, topN, isAscending }) =>
    client.get(`${urlConstants.MEASUREMENT_URL.API_METRICS_ORDERED_URL}`, {
        idAncestry,
        definitionId,
        topN,
        isAscending,
    })

const getRecentMetricList = ({ idAncestry, resourceTypes, resourceIds, definitionNames }) =>
    client.get(`${urlConstants.MEASUREMENT_URL.API_METRICS_RECENT_URL}`, {
        idAncestry,
        resourceTypes,
        resourceIds,
        definitionNames,
    })

const getRecentTraitList = ({ idAncestry, resourceTypes, resourceIds, definitionNames }) =>
    client.get(`${urlConstants.MEASUREMENT_URL.API_TRAIT_RECENT_URL}`, {
        idAncestry,
        resourceTypes,
        resourceIds,
        definitionNames,
    })

const getMeasurementDefinitions = ({
    startIndex = 0,
    limit = 1000,
    textSearch,
    idAncestry,
    resourceTypes,
    resourceIds,
    measurementType,
    definitionNames,
}) =>
    client.get(`${urlConstants.MEASUREMENT_URL.API_MEASUREMENT_DEFINITIONS_URL}`, {
        startIndex,
        limit,
        textSearch,
        idAncestry,
        resourceTypes,
        resourceIds,
        measurementType,
        definitionNames,
    })

export {
    getLastMeasurementData,
    getMeasurementMetricData,
    getOrderedMetricList,
    getRecentMetricList,
    getRecentTraitList,
    getMeasurementDefinitions,
}
