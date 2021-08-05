import LayoutMain from '@/components/s-layout/components/main.vue'

export default {
  path: '/develop',
  name: 'develop',
  redirect: {
    path: '/develop/base'
  },
  component: LayoutMain,
  meta: {
    icon: 'compass',
    size: '20px',
    title: '开发者工具'
  },
  children: [
    {
      path: '/develop/base',
      name: 'develop/base',
      redirect: {
        path: '/develop/base/svg'
      },
      component: LayoutMain,
      meta: {
        title: '基础组件'
      },
      children: [
        {
          path: '/develop/base/svg',
          name: 'develop-base-svg',
          component: (): Promise<typeof import('*.vue')> =>
            import(
              /* webpackChunkName: "develop" */ '@/views/develop/base/svg/index.vue'
            ),
          meta: {
            title: 'SVG图标'
          }
        }
      ]
    },
    {
      path: '/develop/business',
      name: 'develop/business',
      redirect: {
        path: '/develop/business/table'
      },
      component: LayoutMain,
      meta: {
        title: '业务组件'
      },
      children: [
        {
          path: '/develop/business/table',
          name: 'develop-business-table',
          component: (): Promise<typeof import('*.vue')> =>
            import(
              /* webpackChunkName: "develop" */ '@/views/develop/business/table/index.vue'
            ),
          meta: {
            title: '基础表格'
          }
        },
        {
          path: '/develop/business/form',
          name: 'develop-business-form',
          component: (): Promise<typeof import('*.vue')> =>
            import(
              /* webpackChunkName: "develop" */ '@/views/develop/business/form/index.vue'
            ),
          meta: {
            title: '基础表单'
          }
        }
      ]
    },
    {
      path: '/develop/directive',
      name: 'develop/directive',
      redirect: {
        path: '/develop/directive/copyclip'
      },
      component: LayoutMain,
      meta: {
        title: '全局指令'
      },
      children: [
        {
          path: '/develop/directive/copyclip',
          name: 'develop-directive-copyclip',
          component: (): Promise<typeof import('*.vue')> =>
            import(
              /* webpackChunkName: "develop" */ '@/views/develop/directive/copyclip/index.vue'
            ),
          meta: {
            title: '复制到剪贴板'
          }
        },
        {
          path: '/develop/directive/full-screen',
          name: 'develop-directive-full-screen',
          component: (): Promise<typeof import('*.vue')> =>
            import(
              /* webpackChunkName: "develop" */ '@/views/develop/directive/full-screen/index.vue'
            ),
          meta: {
            title: '切换全屏'
          }
        }
      ]
    }
  ]
}
