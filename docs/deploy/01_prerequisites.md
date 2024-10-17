

# Prerequisites

::: info An infrastructure is needed for a brand new model. [Create a new infrastructure](../infra/01_prerequisites).
:::




## AWS-CLI

First You need the **AWS Command Line Interface** and **Credentials**.

::: warning Contact an Administrator to receive your credentials
:::

Install AWS CLI using [this guide](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)

After this, configure your profile with your **Credentials** running this command in the terminal:
```bash
    aws configure
```
```
    AWS Access Key ID [None]: <YOUR_ACCESS_KEY>
    AWS Secret Access Key [None]: <YOUT_SECRET_KEY>
    Default region name [None]: ca-central-1
    Default output format [None]: json
```

## Docker

Install **Docker** using [this guide](https://docs.docker.com/get-docker/)

::: info  Windows
 install Docker Desktop
:::

## Quetzal-network-editor-backend

Clone [this repo](https://github.com/systragroup/quetzal-network-editor-backend) on your computer. **It should be at the same level as Quetzal and Quetzal models**. 

```
.
├─ quetzal-network-editor-backend
│  ├─ docker
│  ├─ infra
│  └─ ...
├─ quetzal
│  ├─ quetzal
│  ├─ syspy
│  └─ ...
├─ quetzal_montreal
│  └─ ...
└─ quetzal_paris
│  └─ ...
...
```

This is important as scripts used in **quetzal-network-editor-backend** expect this relative path system


