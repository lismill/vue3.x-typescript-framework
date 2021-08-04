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

/**
 * Styles
 */
import '@/assets/styles/index.scss'

/**
 * I18N
 */
import i18n from '@/language/i18n'

/**
 * Components
 */
import componsnts from '@/components/index'

/**
 * Render Theme
 */
renderTheme()

const app = createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.use(i18n)
componsnts.forEach(item => app.component(item.name, item.component))
app.mount('#app')
