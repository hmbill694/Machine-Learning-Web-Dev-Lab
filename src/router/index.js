import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../components/LandingPage'
import CancerPredictor from '../components/CancerPredictor'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/cancer-predictor',
    name: 'CancerPredictor',
    component: CancerPredictor
  }
]

const router = new VueRouter({
  routes
})

export default router
