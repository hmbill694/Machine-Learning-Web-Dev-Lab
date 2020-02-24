import Vue from 'vue'
import Vuex from 'vuex'
import flowerPredictor from './modules/flowerPredictor'
import frontendInfo from './modules/frontendInfo'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { flowerPredictor, frontendInfo }
})
