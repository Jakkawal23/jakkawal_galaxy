import { createI18n } from 'vue-i18n'
import { useLocaleStore } from '../composables/locale'
import en from '../locales/en.json'
import th from '../locales/th.json'

export default defineNuxtPlugin(({ vueApp }) => {
  const localeStore = useLocaleStore()
  
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: localeStore.getLocale || 'th',
    fallbackLocale: 'th',
    messages: {
      th,
      en,
    }
  })

  vueApp.use(i18n)

  return {
    provide: { i18n }
  }
})
