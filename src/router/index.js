import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Messages from '../components/Messages.vue'
import Explore from '../components/Explore.vue'
// import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/direct/inbox',
    name: 'Messages',
    component: Messages
  },
  {
    path: '/explore',
    name: 'Explore',
    component: Explore
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
