import { createStore } from 'vuex'

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
  }
})
