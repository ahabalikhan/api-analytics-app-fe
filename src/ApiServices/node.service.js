import apiService from "../core/util/api.service";
import { SERVICE_CONFIG_URLS } from "./config";
import utilService from "../core/util/util.service";
import LocalStorageService from "../core/util/local-storage.service";


export async function getNodeList(){
    const token = LocalStorageService.get("token", null)
    if (token == null){
        return null;
    }
    const listResponse = await apiService.get(utilService.createDynamicUrl(SERVICE_CONFIG_URLS.NODE.LIST, {token:token}));

    return listResponse;
}

export async function getNodes(){
    const token = LocalStorageService.get("token", null)
    if (token == null){
        return null;
    }
    const nodeResponse = await apiService.get(utilService.createDynamicUrl(SERVICE_CONFIG_URLS.NODE.GRAPH, {token:token}));

    return nodeResponse;
}