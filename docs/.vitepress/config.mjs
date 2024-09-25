import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Quetzal Interface",
  description: "doc",
  appearance:false, //True to have dark mode choice
  base:"/quetzal-network-editor-doc/",
  head: [['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }]],
  themeConfig: {
    logo: 'favicon.png',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get started', link: '/first_step' }
    ],

    sidebar: [
      {
        text: 'Get started',
        items: [
          { text: 'Login', link: '/01_first_step' },
          { text: 'Tabs', link: '/02_tabs' },
          { text: 'Loading project', link: '/03_load_project' },
          { text: 'Networks', link: '/04_networks' },
          { text: 'Run', link: '/05_run_simulation' },
          { text: 'Results', link: '/06_results' },

        ]
      },
      {
        text: 'deploy a model',
        items: [
          { text: 'Prerequisites', link: '/deploy/prerequisites' },
          { text: 'Infra', link: '/deploy/infra' },
          { text: 'Model configuration', link: '/deploy/model_configure' },
          { text: 'Model deploying', link: '/deploy/model_deploy' },
          { text: 'Model update', link: '/deploy/model_update' },
          { text: 'Model Maintenance', link: '/deploy/model_maintenance' },

        ]
      },
      {
        text: 'infrastructure',
        items: [
          { text: 'Auth', link: '/infra/index' },
          { text: 'Infrastructure', link: '/infra/api_infra' },
        ]
      }

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/systragroup/quetzal-network-editor-doc' }
    ]
  },
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
