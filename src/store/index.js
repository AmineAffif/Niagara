import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    step: 3,
  },
  getters: {
    getStep: state => state.step
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
