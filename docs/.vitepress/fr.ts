import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export const fr = defineConfig({
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
          text: 'Aperçu',
          items: [
            { text: 'Aperçu', link: '/00_overview' },
          ]
        },
        {
          text: 'Comment utiliser l\'interface',
          items: [
            { text: 'Connexion en Français', link: 'fr/howto/01_first_step' },
            { text: 'Comprendre les Onglets', link: 'fr/howto/02_tabs' },
            { text: 'Charger un projet', link: 'fr/howto/03_load_project' },
            { text: 'Modifier les Réseaux', link: 'fr/howto/04_networks' },
            { text: 'Exécuter une Simulation', link: 'fr/howto/05_run_simulation' },
            { text: 'Explorer les Résultats', link: 'fr/howto/06_results' },
          ]
        },
        {
          text: 'Comment déployer un Modèle',
          items: [
            { text: 'Prérequis', link: 'fr/deploy/prerequisites' },
            { text: 'Infrastructure', link: 'fr/deploy/infra' },
            { text: 'Configuration du Modèle', link: 'fr/deploy/model_configure' },
            { text: 'Déploiement du Modèle', link: 'fr/deploy/model_deploy' },
            { text: 'Mise à Jour du Modèle', link: 'fr/deploy/model_update' },
            { text: 'Maintenance du Modèle', link: 'fr/deploy/model_maintenance' },
          ]
        },
        {
          text: 'Infrastructure',
          items: [
            { text: 'Authentification', link: 'fr/infra/index' },
            { text: 'Infrastructure', link: 'fr/infra/api_infra' },
          ]
        },
        {
          text: 'Bibliothèque Python Quetzal',
          items: [
            { text: 'Aperçu', link: 'fr/quetzal_library/quetzal_library' },
          ]
        },
        {
          text: 'Formations Spécifiques aux Projets',
          items: [
            { text: 'Introduction', link: 'fr/trainings/00_introduction' },
          ]
        }
      ],
  
      socialLinks: [
        { icon: 'github', link: 'https://github.com/systragroup/quetzal-network-editor-doc' }
      ]
    }

  })