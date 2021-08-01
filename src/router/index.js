import Vue from 'vue'
import VueRouter from 'vue-router'
import theatre from '../views/theatre.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Theatre',
    component: theatre
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
