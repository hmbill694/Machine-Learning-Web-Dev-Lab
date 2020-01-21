import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../components/LandingPage'
import WineClassifier from '../components/WineClassifier'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/wine-classifier',
    name: 'WineClassifier',
    component: WineClassifier
  }
]

const router = new VueRouter({
  routes
})

export default router
