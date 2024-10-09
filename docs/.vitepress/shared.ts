import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export const shared = defineConfig({
    title: "Quetzal Interface",
    description: "doc",
    appearance:false, //True to have dark mode choice
    base:"/quetzal-network-editor-doc/",
    head: [['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }]],
    themeConfig: {
      logo: 'favicon.png',
  
      socialLinks: [
        { icon: 'github', link: 'https://github.com/systragroup/quetzal-network-editor-doc' }
      ]
    }

  })