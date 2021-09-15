import axios from 'axios'

const HTTP = axios.create({
    baseURL: process.env.VUE_APP_API_URL || '/',
})

HTTP.interceptors.request.use(request => {
    const token = localStorage.getItem('token')
    if(token) {
        request.headers.Authorization = `Bearer ${token}`
    }
    return request
})

export default HTTP