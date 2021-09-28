import apiUrls from '../../api/apiUrls'
import HTTP from '../../api'

export default {
    state: {
        user: {}
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
        }
    },
    actions: {
        getCurrentUser({commit}) {
             HTTP.get(apiUrls.currentUser.get).then(response => {
                commit('setUser', response.data.user)
                 console.log(response)
                 return response
            })
        },
    },
    getters: {
        user: (state) => state.user
    }
}