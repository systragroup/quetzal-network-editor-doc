import { defineConfig } from 'vitepress'
import { version } from '../../package.json'
// https://vitepress.dev/reference/site-config
export const fr = defineConfig({
  description: "doc",
  appearance: false, //True to have dark mode choice
  base: "/quetzal-network-editor-doc/",

  themeConfig: {
    logo: 'favicon.png',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Overview', link: '/00_overview' },
      { text: version, link: '#' } // version badge
    ],

    sidebar: [
      {
        text: 'Aperçu',
        items: [
          { text: 'Aperçu', link: 'fr/00_overview' },
        ]
      },
      {
        text: 'Comment utiliser l\'interface',
        items: [
          { text: 'Connexion', link: '/howto/01_first_step' },
          { text: 'Comprendre les Onglets', link: '/howto/02_tabs' },
          { text: 'Charger un projet', link: '/howto/03_load_project' },
          { text: 'Téléchager un réseau', link: '/howto/04_download_network' },
          { text: 'Modifier réseau TC', link: '/howto/04_pt_network' },
          { text: 'Modifier réseau routier', link: 'howto/04_road_network' },
          { text: 'Exécuter une Simulation', link: '/howto/05_run_simulation' },
          { text: 'Explorer les Résultats', link: '/howto/06_results' },
        ]
      },
      {
        text: 'Micro services',
        items: [
          { text: 'OSM importer', link: '/microservice/01_osm_importer' },
          { text: 'GTFS importer', link: '/microservice/02_gtfs_importer' },
          { text: 'Matrix road caster', link: '/microservice/03_ML_Matrix_Road_Caster' },
          { text: 'Mapmatching', link: '/microservice/04_Mapmatching' },

        ]
      },
      {
        text: 'Comment déployer un Modèle',
        items: [
          { text: 'Prérequis', link: '/deploy/01_prerequisites' },
          { text: 'Configuration du Modèle', link: '/deploy/02_model_configure' },
          { text: 'Déploiement du Modèle', link: '/deploy/03_model_deploy' },
          { text: 'Mise à Jour du Modèle', link: '/deploy/05_model_update' },
          { text: "Groupe d'utilisateur", link: '/deploy/04_model_user_group' },
          { text: 'Maintenance du Modèle', link: '/deploy/06_model_maintenance' },
          { text: 'Configuration Avancées', link: '/deploy/07_model_configure_advanced' },
          { text: 'Configuration des Variantes', link: '/deploy/08_model_variants_configure' },
          { text: 'Documentaion du Modèle', link: '/deploy/09_model_docs' },

        ]
      },
      {
        text: 'Infrastructure',
        items: [
          { text: 'Prérequis', link: '/infra/01_prerequisites' },
          { text: 'Création', link: '/infra/02_create_infra' },
          { text: 'info Authentification', link: '/infra/index' },
          { text: 'info Infrastructure', link: '/infra/api_infra' },
        ]
      },
      {
        text: 'Bibliothèque Python Quetzal',
        items: [
          { text: 'Modélisation des Transports', link: '/quetzal_library/transport_modeling_intro' },
          { text: 'Aperçu', link: '/quetzal_library/quetzal_library' },
        ]
      },
      {

        text: 'Formations Spécifiques aux Projets',
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/trainings/00_introduction' },
          { text: 'Transit-DCA', link: '/trainings/01_transit_dca' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/systragroup/quetzal-network-editor-doc' }
    ]
  }

})