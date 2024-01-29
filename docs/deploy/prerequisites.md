---
layout: doc
aside: false
---

# Prerequisites

## AWS-CLI

You need the **AWS Command Line Interface** and **authorized credentials** to send a dockerized model to the AWS Elestic Container Registery.

Install AWS CLI using [this guide](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)

After this, configure your profile default profile:

    $ aws configure
    AWS Access Key ID [None]: <YOUR_ACCESS_KEY>
    AWS Secret Access Key [None]: <YOUT_SECRET_KEY>
    Default region name [None]: ca-central-1
    Default output format [None]: json

**NOTE:** If your don't have credentials or necessary permissions. Please contact the AWS admin.

## Docker

Install **Docker** using [this guide](https://docs.docker.com/get-docker/)

## Terraform

Install **Terraform** using [this guide](https://developer.hashicorp.com/terraform/downloads)