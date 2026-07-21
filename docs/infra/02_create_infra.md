---
outline: deep
---


# INFRA (TERRAFORM)

::: danger 
Creating/updating the infrastructure can be dangerous. Only a trained user should do those steps.
:::

::: info
   Infrastrucure is under `infra/models/` into **quetzal-network-editor-backend**
:::


## Infrastructure 
Model can be deployed on either `Lambda` or `ECS` see below for more information on both infrastructures

### Lambda 

* Lambda uses aws step-functions as an orchestrator.
* Steps are predefined in the step-function definition.
* Each steps are run in a new lambda execution.
* Progress in reported by the step-functions.

👍 advantages:
* starts in seconds when used frequently
* easy progress tracking

👎 disavantages:
* memory (ram) 10Gib max
* time limit: 15 minutes max (per step)
* max 6vCPU
* start in a minute if not frequently used in (+/- 1 week)
* lambda specific Docker images


### ECS

* ECS run the docker in a fargate instance 
* Orchestration is done in the running model docker image.(`quetzal-network-editor-backend/docker/mains_ecs.py`)
* Progress is reported by the docker orchestrator writing a status.json file on S3. ECS also return fargate status such as RUNNING,STARTING,etc
* Steps are passed to the model alongside the parameters

👍 advantages:
* no time limit
* max memory (ram) 244Gib
* up to 32vCPU
* cheaper than lambda (after lambda free tier limit)

👎 disavantages:
* always start in a minute (and ~30secs to stop)


::: info info
ECS long start time can be offset with faster I/O. Files are only downloaded and uploaded to S3 once, while Lambda infra will do so at each step. Lambda is a better choice for small and fast microservices running a single step.
:::



## Configuration

1. **Create a new .tfvars file** with the name of your model `infra/models/environement/<model_name>.tfvars` 

* replace `<model_name>`  with the model name, ex: **quetzal-paris**

::: warning Important
 The name should start by "quetzal-"
:::

the name must be unique in the AWS region (ca-central-1) (s3 bucket limitation)

* the .tfvars file contains the executor ressources.
::: code-group
``` [Lambda]
    quetzal_model_name      = "<model_name>"
    lambda_memory_size      = 4016
    lambda_time_limit       = 300
    lambda_storage_size     = 4016
```
``` [ECS]
    quetzal_model_name      = "<model_name>"
    ecs_cpu_units    = 1024
    ecs_memory_size  = 4096
    ecs_time_limit   = 60
    ecs_storage_size = 21
```
:::

::: tip  Ressources configuration (Lambda). 
* Time (secs) max: 900 (15 minutes)
* Memory (mb) max: 10240 (10 Gib)
* Storage (mb) max: 10240 (10 Gib)
* vCPUs automaticaly scale with memory 
:::

::: tip  Ressources configuration (ECS). 
* Time (mins) max: None
* Memory (mb) max: 249 856 (244 Gib)
* Storage (gib) max: 200 (200 Gib)
* vCPUs (cpu unit) max: 32768 (32 vcpu)
* [see available combinations](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html#task_size)
:::


## Workspace
2. **Go to the infra folder** `(infra/models)`

```bash
cd infra/models
```

3. **Create a new workspace**. Each model share the same architecture and must be in separated workspace

```bash
terraform init
```

check the list of existing workspace (optional)
```bash
terraform workspace list
```
create a new workspace. 
```bash
terraform workspace new <model_name>
```

4. **Select your workspace and initialize it**. this will sync your local copy with the deployed terraform state

```bash
terraform workspace select <model_name>
```

```bash
terraform init
```

## Plan
5. **Plan your deployment**. This will create a plan of deployment. if it is a new deployment, make sure everything is created and **nothing is destroy**

   The plan should read  : `Plan: 16 to add, 0 to change, 0 to destroy.`


::: code-group

```bash [Linux]
terraform plan -var-file="environments/<model_name>.tfvars"

```
```bat [Windows]
terraform plan -var-file="environments/<model_name>.tfvars" -var os="windows" 
```
:::


::: danger Review the plan with an Administrator before the next step to make sure it's all right.
:::

## Apply
6. **Apply your deployment**. Make sure the plan is the same as in the previous step and press yes  

   Again, the plan should read  : `Plan: 18 to add, 0 to change, 0 to destroy.`

::: info Windows 
make sure to <b>open docker desktop</b> first
:::

::: code-group

```bash [Linux]
terraform apply -var-file="environments/<model_name>.tfvars"

```
```bat [Windows]
terraform apply -var-file="environments/<model_name>.tfvars" -var os="windows" 
```
:::


# Finish! terraform created:

* **S3 bucket** named <model_name> (empty).
* **ECR** repo to store the model docker image (with dummy docker image).
* **IAM role and policy** to add to the cognito user group (for user to acces the model when authenticated).
   * **Lambda function** (running dummy docker image) with access to the S3 bucket and cloudwatch (logs).
   * **Step function** to launch the lambda function from the Api.
   
   or
   
   * **ECS task definition** (running dummy docker image) with access to the S3 bucket and cloudwatch (logs).
