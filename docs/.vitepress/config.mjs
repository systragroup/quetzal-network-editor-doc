import { defineConfig} from 'vitepress'
import {shared} from './shared'


export default defineConfig({
  ...shared,
  locales: {
    root: {
      label: 'English',
      lang: 'en',
    },
    fr: {
      label: 'French',
      lang: 'fr', // optional, will be added  as `lang` attribute on `html` tag
      link: '/fr' // default /fr/ -- shows on navbar translations menu, can be external
      // other locale specific properties...
    }
  }
})