# quetzal-network-editor-doc
doc for quetzal-network-editor 

## local dev
run the website locally
```bash
yarn run docs:dev
```
test the build locally
```bash
yarn run docs:build
yarn run docs:preview
```

note: building is usefull because it will find broken links in your doc.

## deploy

Just push on master and the page build and deploy will automaticly start

## Edit doc

edit any .md files to change the doc

## images 

you need to add any image (or media) to the public directory

## Site structure

Each MakeDoc files (.md) are routed in `docs/.vitepress.config.mjs` . 

```js
sidebar: [
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
      }
    ]
```

the corresponding sidebar

![image](https://github.com/systragroup/quetzal-network-editor-doc/assets/79281989/95e244e5-c537-4fcb-9c83-efad2f6fc387)

## traduction

You need to recopy everythin in the /fr folder and redo the.

