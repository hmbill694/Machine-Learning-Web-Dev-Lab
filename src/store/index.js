import Vue from 'vue'
import Vuex from 'vuex'
import cancerPredictor from './modules/cancerPredictor'
import frontendInfo from './modules/frontendInfo'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { cancerPredictor, frontendInfo }
})
