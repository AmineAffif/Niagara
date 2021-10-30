import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    step: 3,
    user: null,
    userCards: [
      { 
        id: 1,
        cardName: "Carte de production du lot pomme",
        teamNames: [
          "Logistique", "Production", "Maintenance"
        ]
      },
      { 
        id: 2,
        cardName: "Carte de production du lot poire",
        teamNames: [
          "Logistique"
        ]
      },
      { 
        id: 3,
        cardName: "Carte de production du lot orange",
        teamNames: [
          "Logistique", "Production"
        ]
      },
      { 
        id: 4,
        cardName: "Carte de production du lot citron",
        teamNames: [
          "Production"
        ]
      },
      { 
        id: 5,
        cardName: "Carte de production du lot ananas",
        teamNames: [
          "Logistique", "Qualité", "Production"
        ]
      },
    ],
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
    },
    setUser(state, userData) {
      state.user = userData
    },
  },
  actions: {
  },
  modules: {
  }
})
