import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import develop from './modules/develop'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Dashboard',
    component: (): Promise<typeof import('*.vue')> =>
      import(
      /* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'
      ),
    meta: {
      icon: 'home',
      size: '23px',
      title: '首页'
    }
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '@/components/s-not-found/index.vue')
  },
  develop
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 设置动态标题
router.beforeEach((to, from, next) => {
  document.title = `Vue.js3.x + TypeScript 后台管理中心${to.meta.title ? ' - ' + to.meta.title : ''}`
  next()
})

export default router
