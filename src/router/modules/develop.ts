import LayoutMain from '@/components/s-layout/components/main.vue'

export default {
  path: '/develop',
  name: 'develop',
  redirect: {
    path: '/develop/svg'
  },
  component: LayoutMain,
  meta: {
    icon: 'compass',
    size: '20px',
    title: '开发者工具'
  },
  children: [
    {
      path: '/develop/svg',
      name: 'develop-svg',
      component: (): Promise<typeof import('*.vue')> =>
        import(
          /* webpackChunkName: "develop" */ '@/views/develop/svg/index.vue'
        ),
      meta: {
        title: 'SVG图标'
      }
    }
  ]
}
