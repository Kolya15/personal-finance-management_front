import {createStore} from 'vuex'

// Modules
import app from './modules/app'
import auth from './modules/auth'
import windows from './modules/windows'
import currentUser from './modules/currentUser';

// Actions

import actions from "./actions";

export default createStore({
    actions,
    modules: {
        app,
        auth,
        windows,
        currentUser
    }
})
