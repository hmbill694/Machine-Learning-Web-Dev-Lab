import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../components/LandingPage'
import CancerPredictor from '../components/CancerPredictor'
import FrontendInfo from '../components/FrontendInfo'
import BackendInfo from '../components/BackendInfo'
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
  },
  {
    path: '/frontend-info',
    name: 'FrontendInfo',
    component: FrontendInfo
  },
  {
    path: '/backend-info',
    name: 'BackendInfo',
    component: BackendInfo
  }
]

const router = new VueRouter({
  routes
})

export default router
