/**
 * 注册全局组件
 */
// SVG
import svgIcon from '@/components/s-svg-icon/index.vue'
// 多主题popover
import SThemePopover from '@/components/s-theme-popover/index.vue'

export default [
  { name: 's-svg-icon', component: svgIcon },
  { name: 's-theme-popover', component: SThemePopover }
]
