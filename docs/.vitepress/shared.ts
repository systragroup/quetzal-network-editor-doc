import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export const shared = defineConfig({
    title: "Quetzal Cloud",
    description: "doc",
    appearance:false, //True to have dark mode choice
    base:"/quetzal-network-editor-doc/",
    head: [
      //['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
      //['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
      logo: 'favicon.png',
      search: {
        provider: 'local'
      },
      socialLinks: [
        { icon: 'github', link: 'https://github.com/systragroup/quetzal-network-editor-doc' }
      ]
    }

  })