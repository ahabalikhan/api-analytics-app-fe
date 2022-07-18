const CONTROLLER_NAMES = {
    CONSUMER_APPLICATION: "/consumer-application",
    NODE: "/node",
    PORTAL_AUTH: "/portal-auth"
}

export const SERVICE_CONFIG_URLS = {
    BASE_URL: "https://api-analytics-app-be.herokuapp.com/api/v1",
    CONSUMER_APPLICATION: {
        CREATE: CONTROLLER_NAMES.CONSUMER_APPLICATION,
        TODAYS_REQUESTS: `${CONTROLLER_NAMES.CONSUMER_APPLICATION}/{token}/todays-requests`,
        MONTHS_REQUESTS: `${CONTROLLER_NAMES.CONSUMER_APPLICATION}/{token}/months-requests`,
        TOTAL_REQUESTS: `${CONTROLLER_NAMES.CONSUMER_APPLICATION}/{token}/total-requests`,
        CHART: `${CONTROLLER_NAMES.CONSUMER_APPLICATION}/{token}/chart`,
    },
    NODE: {
        LIST: `${CONTROLLER_NAMES.NODE}/{token}`,
        GRAPH: `${CONTROLLER_NAMES.NODE}/graph/{token}`
    },
    PORTAL_AUTH:{
        TOKEN: `${CONTROLLER_NAMES.PORTAL_AUTH}/token`
    }
}