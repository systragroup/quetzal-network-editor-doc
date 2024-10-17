import { defineConfig} from 'vitepress'
import {shared} from './shared'
import {en} from './en'
import {fr} from './fr'

export default defineConfig({
  head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
  ...shared,
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      ...en
    },
    fr: {
      label: 'French',
      lang: 'fr', // optional, will be added  as `lang` attribute on `html` tag
      link: '/fr', // default /fr/ -- shows on navbar translations menu, can be external
      ...fr // other locale specific properties...
    }
  }
})