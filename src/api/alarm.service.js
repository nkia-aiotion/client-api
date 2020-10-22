import { client } from '../http'
import { urlConstants } from '../constants'

const { RESOURCE_URL, ALARM_URL } = urlConstants

const getAlarmDefinition = (id) => client.get(`${ALARM_URL.API_ALARM_DEFINITION_URL}/${id}`)
const saveAlarmDefinition = (alarmDefinition) => client.post(ALARM_URL.API_ALARM_DEFINITION_URL, alarmDefinition)
const updateAlarmDefinition = (alarmDefinition) => client.put(ALARM_URL.API_ALARM_DEFINITION_URL, alarmDefinition)
const updateAlarmDefinitionEnabled = (request) => client.put(`${ALARM_URL.API_ALARM_DEFINITION_URL}/enabled`, request)
const deleteAlarmDefinition = (id) => client.delete(`${ALARM_URL.API_ALARM_DEFINITION_URL}/${id}`)
const getAlarmDefinitionsByResourceId = (param) =>
    client.get(`${RESOURCE_URL.API_RESOURCE_URL}/${param.resourceId}/alarm-definitions`, param.request)
const getMasterAlarmDefinitions = (request) => client.get(ALARM_URL.API_ALARM_DEFINITION_URL, request)
const getActiveAlarms = () => client.get(ALARM_URL.API_ACTIVE_ALARMS_URL)
const getActiveAlarmsByResourceIdAncestry = (idAncestry) =>
    client.get(`${ALARM_URL.API_ACTIVE_ALARMS_URL}?idAncestry=${idAncestry}`)
const ackActiveAlarms = (request) => client.put(`${ALARM_URL.API_ACTIVE_ALARMS_URL}/ack`, request)
const deleteActiveAlarms = (request) => client.put(`${ALARM_URL.API_ACTIVE_ALARMS_URL}/delete`, request)
const getAlarm = (id) => client.get(`${ALARM_URL.API_ALARMS_URL}/${id}`)
const getAlarms = (request) => client.get(ALARM_URL.API_ALARMS_URL, request)
const addAlarmNote = (request) => client.post(`${ALARM_URL.API_ACTIVE_ALARMS_URL}/notes`, request)
const deleteAlarmNote = (id) => client.delete(`${ALARM_URL.API_ACTIVE_ALARMS_URL}/notes/${id}`)
const countActiveAlarms = () => client.get(ALARM_URL.API_ACTIVE_ALARMS_COUNT_URL)

export {
    getAlarmDefinition,
    saveAlarmDefinition,
    updateAlarmDefinition,
    updateAlarmDefinitionEnabled,
    deleteAlarmDefinition,
    getAlarmDefinitionsByResourceId,
    getMasterAlarmDefinitions,
    getActiveAlarms,
    getActiveAlarmsByResourceIdAncestry,
    ackActiveAlarms,
    deleteActiveAlarms,
    getAlarm,
    getAlarms,
    addAlarmNote,
    deleteAlarmNote,
    countActiveAlarms,
}
