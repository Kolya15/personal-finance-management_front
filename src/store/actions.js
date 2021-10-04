import http from '../api'

export default {
    get: async (context, url) => {
        return await http.get(url)
    },

    post: (context, data) => {
        return http('post', data.url, {data: data.data}).then(response =>  response)
    },

    put: (context, data) => {
        return http('put', data.url, {data: data.data}).then(response =>  response)
    },

    delete: (context, data) => {
        return http('delete', data.url).then(response =>  response)
    }
}

