
const utilService = {
    createDynamicUrl
}

function createDynamicUrl(dynamicUrl, object) {
    for (const key in object) {
        dynamicUrl = dynamicUrl.replace(`{${key}}`, object[key]);
    }
    return dynamicUrl;
}

export default utilService;