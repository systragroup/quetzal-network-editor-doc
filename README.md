# quetzal-network-editor-doc
doc for quetzal-network-editor 


# To write doc.
* doc is in .md format. refer to https://vitepress.dev/guide/markdown

* images should be in the public folder and refered without "puclic"

```md
![Alt text](/other/gtfs_importer.png)
```

* The doc is automatically deployed on push (master branch) 

# local server

```bash
yarn install
```

```bash
yarn run docs:dev
```

# to deploy

just merge on master and it will build and deploy with github actions.