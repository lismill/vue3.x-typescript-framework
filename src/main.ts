import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { renderTheme } from '@/utils/common'

/**
 * Element Plus
 */
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

/**
 * SVG
 */
import '@/components/s-svg-icon/index'
import svgIcon from '@/components/s-svg-icon/index.vue'

/**
 * Styles
 */
import '@/assets/styles/index.scss'

/**
 * I18N
 */
import i18n from '@/language/i18n'

/**
 * Render Theme
 */
renderTheme()

const app = createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.use(i18n)
app.component('svg-icon', svgIcon)
app.mount('#app')
