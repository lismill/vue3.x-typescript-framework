import { createI18n } from 'vue-i18n'
import messages from './index'

// 注册实例，引入多语言
const i18n = createI18n({
  locale: localStorage.language || 'cn',
  messages
})
export default i18n
