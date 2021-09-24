import axios from 'axios'
import router from '../router'
const HTTP = axios.create({
    baseURL: process.env.VUE_APP_API_URL || '/',
})

HTTP.interceptors.request.use(request => {
    const token = localStorage.getItem('token')
    if (token) {
        request.headers.Authorization = `Bearer ${token}`
    }
    return request
})

HTTP.interceptors.response.use(response => {
        return Promise.resolve(response)
    }, error => {
        if (error.response.status === 401) {
            localStorage.removeItem('token')
            router.push('/auth/login')
        }
        return Promise.resolve(error)
    }
)

export default HTTP