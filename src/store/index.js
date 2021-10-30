import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    step: 1,
  },
  getters: {
    getStep: state => state.step
  },
  mutations: {
    nextStep(state) {
      state.step < 3 ? state.step++ : "";
    },
    prevStep(state) {
      state.step > 1 ? state.step-- : "";
    }
  },
  actions: {
  },
  modules: {
  }
})
