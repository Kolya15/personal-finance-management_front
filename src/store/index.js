import { createStore } from 'vuex'
import auth from './modules/auth'

export default createStore({
  state: {
    test: 'test'
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    test: state => state.test
  },
  modules: {
    auth
  }
})
