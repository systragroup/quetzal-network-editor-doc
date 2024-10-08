import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export const en = defineConfig({
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
            { text: 'Login', link: '/howto/01_first_step' },
            { text: 'Undestand the Tabs', link: '/howto/02_tabs' },
            { text: 'Load a project', link: '/howto/03_load_project' },
            { text: 'Dowload Network', link: '/howto/04_download_network' },
            { text: 'Edit Public Transport', link: '/howto/04_pt_network' },
            { text: 'Edit Roads', link: '/howto/04_road_network' },
            { text: 'Run a Simulation', link: '/howto/05_run_simulation' },
            { text: 'Explore the Results', link: '/howto/06_results' },
  
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
        },
        {
          text: 'Project Specific Trainings',
          items: [
            { text: 'Introduction', link: '/trainings/00_introduction' },
  
          ]
        }
  
      ],
  
      socialLinks: [
        { icon: 'github', link: 'https://github.com/systragroup/quetzal-network-editor-doc' }
      ]
    }

  })