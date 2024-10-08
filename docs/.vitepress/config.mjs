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
      { text: 'Overview', link: '/00_overview' }
    ],

    sidebar: [
      {
        text: 'Overview',
        items: [
          { text: 'Overview', link: '/00_overview' },

        ]
      },
      {
        text: 'How to Use the Interface',
        items: [
          { text: 'Login', link: '/01_first_step' },
          { text: 'Undestrand the Tabs', link: '/02_tabs' },
          { text: 'Load a project', link: '/03_load_project' },
          { text: 'Edit the Networks', link: '/04_networks' },
          { text: 'Run a Simulation', link: '/05_run_simulation' },
          { text: 'Explore the Results', link: '/06_results' },

        ]
      },
      {
        text: 'How to Deploy a Model',
        items: [
          { text: 'Prerequisites', link: '/deploy/prerequisites' },
          { text: 'Infrasructure', link: '/deploy/infra' },
          { text: 'Model configuration', link: '/deploy/model_configure' },
          { text: 'Model deploying', link: '/deploy/model_deploy' },
          { text: 'Model update', link: '/deploy/model_update' },
          { text: 'Model Maintenance', link: '/deploy/model_maintenance' },

        ]
      },
      {
        text: 'Infrastructure',
        items: [
          { text: 'Authentication', link: '/infra/index' },
          { text: 'Infrastructure', link: '/infra/api_infra' },
        ]
      },
      {
        text: 'Quetzal Python Library',
        items: [
          { text: 'Overview', link: '/quetzal_library/quetzal_library' },
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
