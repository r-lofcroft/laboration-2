import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentSearch:[]
  },
  mutations: {
    setCurrentSearch(state, payload){
      state.currentSearch.push(payload)
    }
  },
  actions: {
  },
  modules: {
  }
})
