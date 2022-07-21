import apiService from "../core/util/api.service";
import { SERVICE_CONFIG_URLS } from "./config";
import utilService from "../core/util/util.service";
import LocalStorageService from "../core/util/local-storage.service";


export async function getToken(keys){
    const response = await apiService.post(utilService.createDynamicUrl(SERVICE_CONFIG_URLS.PORTAL_AUTH.TOKEN),keys);
    LocalStorageService.set("token", response.data)
    return true;
}