import apiService from "../core/util/api.service";
import { SERVICE_CONFIG_URLS } from "./config";


export async function addConsumerApplicationAndGetKeys(nodeNames){
    const payload = { nodeNames: nodeNames};
    const keysResponse = await apiService.post( SERVICE_CONFIG_URLS.CONSUMER_APPLICATION.CREATE, payload);

    return keysResponse;
}