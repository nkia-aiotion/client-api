import { client } from '../http'
import { urlConstants } from '../constants'

const { DASHBOARD_URL, MEASUREMENT_URL, TIMESERIES_URL } = urlConstants

const getDashboards = (userId) => client.get(`${DASHBOARD_URL.API_DASHBOARDS_URL}/${userId}`)

const getDashboard = (id) => client.get(`${DASHBOARD_URL.API_DASHBOARD_URL}/${id}`)

const saveDashboard = (dashboard) => client.post(DASHBOARD_URL.API_DASHBOARD_URL, dashboard)

const updateDashboard = (dashboard) => client.put(`${DASHBOARD_URL.API_DASHBOARD_URL}`, dashboard)

const cloneDashboard = ({ id, dashboard }) => client.post(`${DASHBOARD_URL.API_DASHBOARD_URL}/${id}/clone`, dashboard)

const importDashboard = (dashboard) => client.post(`${DASHBOARD_URL.API_DASHBOARD_URL}/import`, dashboard)

const deleteDashboard = (ids) => client.all(ids.map((id) => client.delete(`${DASHBOARD_URL.API_DASHBOARD_URL}/${id}`)))

const saveWidget = (ids, widget) =>
    client.all(ids.map((id) => client.post(`${DASHBOARD_URL.API_DASHBOARD_URL}/${id}/gadget`, widget)))

const updateWidget = ({ id, widget }) => client.put(`${DASHBOARD_URL.API_DASHBOARD_URL}/${id}/gadget`, widget)

const deleteWidget = ({ id, widgetId }) => client.delete(`${DASHBOARD_URL.API_DASHBOARD_URL}/${id}/gadget/${widgetId}`)

const updateLayout = ({ id, layout }) => client.put(`${DASHBOARD_URL.API_DASHBOARD_URL}/${id}/layout`, layout)

const getSingleMeasurement = ({ resourceId, measurementDefinitionId, startTime, endTime, mode, aggregation }) =>
    client.get(`${MEASUREMENT_URL.API_MEASUREMENT_SINGLE_URL}/${resourceId}/${measurementDefinitionId}`, {
        startTime,
        endTime,
        mode,
        aggregation,
    })

const getMultipleMetric = ({ resourceIds, mdIds, startTimeMs, endTimeMs, mode, aggregationTypes, baselineGap }) =>
    client.get(`${MEASUREMENT_URL.API_METRIC_MULTIPLE_URL}`, {
        resourceIds,
        mdIds,
        startTimeMs,
        endTimeMs,
        mode,
        aggregationTypes,
        baselineGap,
    })

const getMultipleLastMetric = ({ resourceIds, mdIds, startTimeMs, endTimeMs, mode }) =>
    client.get(`${MEASUREMENT_URL.API_METRIC_MULTIPLE_LAST_URL}`, {
        resourceIds,
        mdIds,
        startTimeMs,
        endTimeMs,
        mode,
    })

// deprecated
const getMetricNames = ({ resourceIds, mdIds }) =>
    client.get(`${MEASUREMENT_URL.API_METRIC_NAMES_URL}`, { resourceIds, mdIds })

// deprecated
const getMultipleMetricsWithAggregation = ({ resourceIds, definitionIds, startTimeMs, endTimeMs, mode }) =>
    client.get(`${MEASUREMENT_URL.API_METRIC_MULTIPLE_AGGREGATION}`, {
        resourceIds,
        definitionIds,
        startTimeMs,
        endTimeMs,
        mode,
    })

const updateStarredDashboard = ({ userId, dashboardId, starred }) =>
    client.put(`${DASHBOARD_URL.API_DASHBOARD_URL}/${userId}/starred/${dashboardId}/${starred}`)

const getStarredDashboards = (userId) => client.get(`${DASHBOARD_URL.API_DASHBOARDS_URL}/${userId}/starred`)

export {
    getDashboards,
    getDashboard,
    saveDashboard,
    updateDashboard,
    deleteDashboard,
    cloneDashboard,
    importDashboard,
    saveWidget,
    updateWidget,
    deleteWidget,
    updateLayout,
    getSingleMeasurement,
    getMultipleMetric,
    getMultipleLastMetric,
    getMetricNames,
    getMultipleMetricsWithAggregation,
    updateStarredDashboard,
    getStarredDashboards,
}
