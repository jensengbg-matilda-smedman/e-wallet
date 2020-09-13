import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'E-WALLET' }
  },
  {
    path: '/addcard',
    name: 'AddCard',
    component: () => import('../views/AddCard.vue'),
    meta: { title: 'ADD A NEW BANK CARD' }
  }
]

const router = new VueRouter({
  routes
})

export default router
