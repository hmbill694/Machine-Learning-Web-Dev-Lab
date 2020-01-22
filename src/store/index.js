import Vue from 'vue'
import Vuex from 'vuex'
import cancerPredictor from './modules/cancerPredictor'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { cancerPredictor }
})
