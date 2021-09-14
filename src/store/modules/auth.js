import HTTP from '../../api'
import router from '../../router'

export default {
    store: {},
    mutations: {},
    actions: {
        loginOrRegistration: async (ctx, {url, user}) => {
            HTTP.post(url, {userName: user.name, password: user.password,})
                .then(response => {
                    localStorage.setItem('token', response.data.token)
                    router.push('/')
                }).catch(e => {
                console.log(e)
            })
        }
    },
    getters: {}
}