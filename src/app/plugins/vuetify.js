import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { ru, en } from 'vuetify/locale'

import '@mdi/font/css/materialdesignicons.css'

import theme from '@/shared/const/theme'

const defaultTheme = 'light'
const locale = 'ru'

export default createVuetify({
  components,
  directives,
  display: {
    mobileBreakpoint: 'sm',
    thresholds: {
      xs: 0,
      sm: 640,
      md: 960,
      lg: 1280,
      xl: 1920,
      xxl: 2560,
    },
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
    theme: {
      options: {
        customProperties: true,
      },
      defaultTheme: defaultTheme,
      themes: theme,
    },
    locale: {
      locale: locale,
      messages: { ru, en },
    },
  },
})
