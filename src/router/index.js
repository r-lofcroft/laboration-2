import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import Saved from '../views/Saved.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Search',
    name: 'Search',
    component: Search
  },
  {
    path: '/Saved',
    name: 'Saved',
    component: Saved
  }
]

const router = new VueRouter({
  routes
})

export default router
