---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Quetzal Cloud"
  image: "favicon_white.png"
  text: "Transport Modeling"
  tagline: Opensource Web Solution for Transport Modeling Build powerful models, access them in with a friendly interface and run them in the cloud.
  actions:
    - theme: brand
      text: Overview
      link: /00_overview
    - theme: alt
      text: How to Use the Interface
      link: /01_first_step
    - theme: alt
      text: Developper
      link: /deploy/prerequisites

features:
    
  - img
      src: /features/run.png
    title: Cloud storage and file manager
    details: All your projects and scenarios available in on place. Parametrize your simulations and run then in parallel with the integrated run manager.
  - title: Network Editor & Microservices
    icon : 
      src: /gauge-solid.svg
    details: Easily edit public transport routes and roads and benefit from a comprehensive suite of network tools.
  - icon : 
      src: /play-solid.svg
    title: Launcher
    details: Parametrize your simulations and run then in parallel with the integrated run manager.
  - icon : 
      src: /map-solid.svg
    title: Result Maps and Dashboards
    details: Create interactive result maps and illustrated reports.
  - icon : 
      src: /play-solid.svg
  - title: Powered by Quetzal
    details: Quetzal is an opensource python library for transport modeling. Build powerful customizable models with Quetzal and make them available with Quetzal Interface.
---