import Vue from 'vue'
import VueRouter from 'vue-router'
import homeRoutes from './home-routes'
import allRouter from './all-routes'
import findRoutes from './find-routes'
import mineRoutes from './mine-routes'
import walletRoutes from './wallet-routes'
import loginRoutes from './login-routes'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home'
  },
  homeRoutes,
  allRouter,
  findRoutes,
  mineRoutes,
  walletRoutes,
  loginRoutes,
  {
    path: '/404',
    component: () => import('../pages/common/not-find/notFind')
  }, {
    path: '**',
    component: () => import('../pages/common/not-find/notFind')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router