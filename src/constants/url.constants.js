/**
 * RESOURCE API
 */
const RESOURCE_URL = {
    API_RESOURCE_URL: '/api/resources',
    API_ROOT_RESOURCE_URL: '/api/resources/root',
    API_DISCOVERY_URL: '/api/resource-discovery',
    API_CONNECTION_CONFIG_URL: '/api/resource-connection-config',
    API_RESOURCE_TREE_URL: '/api/resource-tree',
    API_RESOURCE_TREE_TYPE_URL: '/api/resource-tree/type',
    API_EXECUTE_OPERATION: '/api/resources/operation-execute',
    API_RESOURCES_URL: '/api/resources/multiple-deletion',
    API_RESOURCES_RESOURCE_TYPE_NAMES_URL: '/api/resources/resource-type-names',
    API_RESOURCES_PAGED_URL: '/api/resources/paged',
    API_RESOURCE_DASHBOARD_URL: '/api/resources/dashboard',
}

const RESOURCE_TYPE_URL = {
    API_RESOURCE_TYPE_URL: '/api/resource-type',
    API_RESOURCE_TYPES_URL: '/api/resource-types',
}

/**
 * DASHBOARD API
 */
const DASHBOARD_URL = {
    API_DASHBOARDS_URL: '/api/dashboards',
    API_DASHBOARD_URL: '/api/dashboard',
}
/**
 * PAS API
 */
const PAS_URL = {
    API_ANOMALY_URL: '/api/anomaly',
    API_ANOMALY_SCATTER_URL: '/api/anomaly-scatter',
    API_ANOMALY_INSTANT_URL: '/api/anomaly-instant',
    API_ANOMALY_ON_DEMAND_URL: '/api/anomaly/on-demand',
    API_ANOMALY_CHANGE_POINTS_URL: '/api/anomaly/change-points',
}
/**
 * MEASUMRENT_URL
 */
const MEASUREMENT_URL = {
    API_MEASUREMENT_URL: '/api/measurement',
    API_MEASUREMENT_DEFINITIONS_URL: '/api/measurement-definitions',
    API_MEASUREMENT_SINGLE_URL: '/api/measurement/single',
    API_MEASUREMENT_SINGLE_BASELINE_URL: '/api/measurement/single/baseline',
    API_METRIC_MULTIPLE_URL: '/api/metric/multiple',
    API_METRIC_MULTIPLE_LAST_URL: '/api/metric/multiple-last',
    API_METRIC_NAMES_URL: '/api/metric/names',
    API_METRIC_MULTIPLE_AGGREGATION: '/api/metric/multiple/aggregation',
    API_METRICS_ORDERED_URL: '/api/metrics/ordered',
    API_METRICS_RECENT_URL: '/api/metrics/recent',
    API_TRAIT_RECENT_URL: '/api/traits/recent',
}

const USER_URL = {
    API_USERS_URL: '/api/users',
}

const ROLE_URL = {
    API_ROLES_URL: '/api/roles',
}

const AUTHENTICATION_URL = {
    API_LOGIN_URL: '/api/auth/login',
    API_REFRESH_TOKEN_URL: '/api/auth/token',
    API_ACCOUNT_LOCKOUT: '/api/noauth/account-lockout',
}

const ACCOUNT_URL = {
    API_CURRENT_USER_INFO_URL: '/api/auth/user',
    API_CHANGE_PASSWORD_URL: '/api/auth/change-password',
}

const SYSTEM_CONFIG_URL = {
    API_SYSTEM_CONFIG_URL: '/api/system-config',
    API_SYSTEM_CONFIG_TEST_MAIL_URL: '/api/system-config/test-mail',
    API_SYSTEM_PROPERTY_URL: '/api/system-property',
}

const USER_PROPERTY_URL = {
    API_CURRENT_USER_PROPERTY_URL: '/api/current-user-property',
    API_USER_PROPERTY_URL: '/api/user-property',
}

const ALARM_URL = {
    API_ALARM_DEFINITION_URL: '/api/alarm-definitions',
    API_ALARMS_URL: '/api/alarms',
    API_ACTIVE_ALARMS_URL: '/api/active-alarms',
    API_ACTIVE_ALARMS_COUNT_URL: '/api/active-alarms-count',
}
/**
 * Audit API
 */
const AUDIT_URL = {
    API_AUDIT_URL: '/api/audit-logs',
}

/**
 * Rule Chain API
 */
const RULE_CHAIN_URL = {
    RULE_CHAINS_URL: '/api/rule-chains',
    RULE_NODE_DESCRIPTORS_URL: '/api/rule-node-descriptors',
    CRON_EXPRESSION: '/api/rule-chains/describe-cron-expression',
    TEST_SCRIPT: '/api/rule-chains/test-script',
}

/**
 * Platform Integration API
 */
const INTEGRATION_URL = {
    INTEGRATIONS_URL: '/api/integrations',
}

/**
 * Application Token API
 */
const APPLICATION_TOKEN_URL = {
    APP_TOKENS_URL: '/api/app-tokens',
}

/**
 * Timeseries API
 */
const TIMESERIES_URL = {
    API_TIMESERIES: '/api/ts',
    API_TIMESERIES_MEATADATA: '/api/ts/metadata',
    API_TIMESERIES_STAT_MULTI: '/api/ts/stats/multi-resources',
    API_TIMESERIES_LATEST_MULTI: '/api/ts/latests/multiple-resources',
    API_TIMESERIES_LATESTS: '/api/ts/latests/multiple',
}

/**
 * White-Label API
 */
const WHITELABEL_URL = {
    API_NOAUTH_WHITE_LABEL: '/api/noauth/white-label',
}

/**
 * Media API
 */
const MEDIA_URL = {
    API_MEDIA: '/api/media',
    API_NOAUTH_MEDIA: '/api/noauth/media',
}

/**
 * Custom Property API
 */
const CUSTOM_PROPERTY_URL = {
    API_CUSTOM_PROPERTY: '/api/custom-property',
    API_CUSTOM_PROPERTY_DEFINITIONS: '/api/custom-property/definitions',
}

const STATISTICS_URL = {
    API_STAT_FILTERS: '/api/statistics/filters',
    API_STAT_MARKERS: '/api/statistics/markers',
}

/**
 * Access Key API
 */
const ACCESS_KEY_URL = {
    API_ACCESS_KEY: '/api/access-keys',
}

/**
 * License API
 */
const LICENSE_URL = {
    API_LICENSE_STATUS: '/api/license-status',
    API_LICENSE_RESOURCE_COUNT: '/api/license-resource-count',
}

export {
    RESOURCE_URL,
    RESOURCE_TYPE_URL,
    DASHBOARD_URL,
    MEASUREMENT_URL,
    PAS_URL,
    USER_URL,
    ROLE_URL,
    AUTHENTICATION_URL,
    ACCOUNT_URL,
    SYSTEM_CONFIG_URL,
    USER_PROPERTY_URL,
    ALARM_URL,
    AUDIT_URL,
    RULE_CHAIN_URL,
    INTEGRATION_URL,
    APPLICATION_TOKEN_URL,
    TIMESERIES_URL,
    WHITELABEL_URL,
    MEDIA_URL,
    CUSTOM_PROPERTY_URL,
    STATISTICS_URL,
    ACCESS_KEY_URL,
    LICENSE_URL,
}
