const baseUrl = 'https://swapi.dev/api';

const request = async (method, endpoint, params, token = null) => {
    method = method.toLowerCase();
    let fullUrl = `${baseUrl}${endpoint}`;
    let body = null;

    switch(method){
        case 'get':
            let queryString = new URLSearchParams(params).toString();
            fullUrl += `?${queryString}`;
        break;
        case 'post':
        case 'put':
        case 'delete':
            body = JSON.stringify(params);
        break;
    }

    let headers = {'Content-Type': 'application/json'};
    if(token){
        headers.Authorization = `Bearer ${token}`;
    }
    let req = await fetch(fullUrl, { method, headers, body });
    let json = await req.json();
    return json;
}
export default {
    getAll: async () => {
        let json = await request('get', `/people`, {});
        return json;
    },
    getPage: async(page) => {
        let json = await request('get', `/people/`, {page});
        return json;
    }
    
}