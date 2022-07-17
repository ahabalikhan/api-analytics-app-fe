import { create } from "apisauce";
import { SERVICE_CONFIG_URLS } from './../../ApiServices/config';

const apiService = {
    apiSauceInstance: create({
        baseURL: SERVICE_CONFIG_URLS.BASE_URL
    }),
    post,
    get,
    put,
    patch,
    remove,
    handleResponse: handleResponse
};

const apiServiceUnAuthorized = {
    apiSauceInstance: create({
        baseURL: SERVICE_CONFIG_URLS.BASE_URL
    }),
    getUnAuthorized,
    postUnAuthorized,
    handleResponse: handleResponse
};

async function get(url, queryParams, axiosConfig) {
    const response = await apiService.apiSauceInstance.get(url, queryParams, axiosConfig);
    return apiService.handleResponse(response);
}

async function getUnAuthorized(url, queryParams) {
    const response = await apiServiceUnAuthorized.apiSauceInstance.get(url, queryParams);
    return apiService.handleResponse(response);
}

async function postUnAuthorized(url, queryParams) {
    const response = await apiServiceUnAuthorized.apiSauceInstance.post(url, queryParams);
    return apiService.handleResponse(response);
}

async function post(url, data, config) {
    const response = await apiService.apiSauceInstance.post(url, data, config);
    return apiService.handleResponse(response);
}

async function put(url, data) {
    const response = await apiService.apiSauceInstance.put(url, data);
    return apiService.handleResponse(response);
}

async function patch(url, data) {
    const response = await apiService.apiSauceInstance.patch(url, data);
    return apiService.handleResponse(response);
}

async function remove(url, data) {
    const response = await apiService.apiSauceInstance.delete(url, data);
    return apiService.handleResponse(response);
}

function handleResponse(response) {
    // if you want to do something before returning the response do it here
    if (response.ok) {
        return response?.data;
    }
    throw response?.response;
}

export default {
    post: apiService.post,
    get: apiService.get,
    patch: apiService.patch,
    put: apiService.put,
    remove: apiService.remove,
    getUnAuthorized: apiServiceUnAuthorized.getUnAuthorized,
    postUnAuthorized: apiServiceUnAuthorized.postUnAuthorized
};
