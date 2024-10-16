import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export const shared = defineConfig({
    title: "Quetzal Cloud",
    head: [
      ['link', { rel: 'icon', type: 'image/svg+xml', href: '/vitepress-logo-mini.svg' }],
      ['link', { rel: 'icon', type: 'image/png', href: '/vitepress-logo-mini.png' }],
      ['meta', { name: 'theme-color', content: '#5f67ee' }],
      ['meta', { property: 'og:type', content: 'website' }],
      ['meta', { property: 'og:locale', content: 'en' }],
      ['meta', { property: 'og:title', content: 'VitePress | Vite & Vue Powered Static Site Generator' }],
      ['meta', { property: 'og:site_name', content: 'VitePress' }],

    ],
    description: "doc",
    appearance:false, //True to have dark mode choice
    base:"/quetzal-network-editor-doc/",

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