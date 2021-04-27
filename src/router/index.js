// import { createRouter, createWebHashHistory } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    meta: {
      layout: 'AuthLayout'
    },
    components: () => import('../views/Authorization.vue')
  },
  {
    path: '/main',
    name: 'main',
    meta: {
      layout: 'MainLayout'
    },
    components: () => import('../views/Main.vue')
  },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  // mode: 'history',
  // "hash": createWebHashHistory(),
  routes
})

export default router
