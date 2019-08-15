import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Page404 from '@/views/404'
Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/404',
    component: Page404,
    hidden: true
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

export default new Router({
  mode: 'history',
  // mode: 'hash',
  routes: constantRouterMap
})
