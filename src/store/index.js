import {createStore} from 'vuex'

// Modules
import app from './modules/app'
import auth from './modules/auth'
import windows from './modules/windows'
import currentUser from './modules/currentUser';



export default createStore({
    state: {
        test: 'test'
    },
    mutations: {},
    actions: {},
    getters: {
        test: state => state.test
    },
    modules: {
        app,
        auth,
        windows,
        currentUser
    }
})
