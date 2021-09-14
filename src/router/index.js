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
    path: '/',
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

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if(token) {
    if(to.name === 'login' || to.name === 'registration') {
      next('/')
    } else {
      next()
    }
  } else if(to.name !== 'login' && to.name !== 'registration') {
    next('/auth/login')
  }
  else next()
})

export default router
