import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/auth',
    name: 'auth',
    meta: {
      layout: 'AuthLayout'
    },
    component: () => import('../views/auth/Auth'),
    children: [
      {
        path: 'login',
        name: 'login',
        meta: {
          layout: 'AuthLayout'
        },
        component: () => import('../views/auth/login/Login')
      },
      {
        path: 'registration',
        name: 'registration',
        meta: {
          layout: 'AuthLayout'
        },
        component: () => import('../views/auth/registration/Registration')
      },
    ]
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
