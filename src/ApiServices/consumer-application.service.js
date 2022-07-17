import apiService from "../core/util/api.service";
import { SERVICE_CONFIG_URLS } from "./config";
import utilService from "../core/util/util.service";
import LocalStorageService from "../core/util/local-storage.service";


export async function addConsumerApplicationAndGetKeys(nodeNames){
    const payload = { nodeNames: nodeNames};
    const keysResponse = await apiService.post( SERVICE_CONFIG_URLS.CONSUMER_APPLICATION.CREATE, payload);

    return keysResponse;
}

export async function getTodaysRequests(){
    const token = LocalStorageService.get("token", null)
    if (token == null){
        return null;
    }
    const keysResponse = await apiService.get(utilService.createDynamicUrl(SERVICE_CONFIG_URLS.CONSUMER_APPLICATION.TODAYS_REQUESTS, {token:token}));

    return keysResponse;
}

export async function getMonthsRequests(){
    const token = LocalStorageService.get("token", null)
    if (token == null){
        return null;
    }
    const keysResponse = await apiService.get(utilService.createDynamicUrl(SERVICE_CONFIG_URLS.CONSUMER_APPLICATION.MONTHS_REQUESTS, {token:token}));

    return keysResponse;
}

export async function getTotalRequests(){
    const token = LocalStorageService.get("token", null)
    if (token == null){
        return null;
    }
    const keysResponse = await apiService.get(utilService.createDynamicUrl(SERVICE_CONFIG_URLS.CONSUMER_APPLICATION.TOTAL_REQUESTS, {token:token}));

    return keysResponse;
}
