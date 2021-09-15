import {createStore} from 'vuex'

// Modules
import auth from './modules/auth'
import locale from './modules/locale'
import windows from './modules/windows'


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
        auth,
        locale,
        windows
    }
})
