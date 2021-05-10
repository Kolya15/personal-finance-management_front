import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    meta: {
      layout: 'AuthLayout'
    },
    component: () => import('../views/Authorization.vue')
  },
  {
    path: '/main',
    name: 'main',
    meta: {
      layout: 'MainLayout'
    },
    component: () => import('../views/Main.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
