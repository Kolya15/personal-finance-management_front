import axios from 'axios'
import store from '../store'
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
        if (response.config.method !== 'get') {
            store.commit('setNotification', {
                severity: 'success',
                summary: 'Success!',
                detail: response.data.message || 'Success!',
                closable: false,
                life: 3000
            })
        }
        return Promise.resolve(response.data)
    }, error => {
        store.commit('setNotification', {
            severity: 'error',
            summary: 'Error',
            detail: error.response.data.message || 'Error!',
            closable: false,
            life: 3000
        })
        if (error.response.status === 401) {
            localStorage.removeItem('token')
            router.push('/auth/login')
        }
        return Promise.resolve(error)
    }
)

export default HTTP