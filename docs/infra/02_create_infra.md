

# INFRA (TERRAFORM)

::: danger 
Creating/updating the infrastructure can be dangerous. Only a trained user should do those steps.
:::

::: info
   Infrastrucure is under `infra/models/` into **quetzal-network-editor-backend**
:::
## Configuration

1. **Create a new .tfvars file** with the name of your model `infra/models/environement/<model_name>.tfvars` 

* replace `<model_name>`  with the model name, ex: **quetzal-paris**

::: warning Important
 The name should start by "quetzal-"
:::

the name must be unique in the AWS region (ca-central-1) (s3 bucket limitation)

* the .tfvars file contains the executor ressources.
```
    quetzal_model_name      = "<model_name>"
    lambda_memory_size      = 4016
    lambda_time_limit       = 300
    lambda_storage_size     = 4016
```
::: tip  Ressources configuration. 
* Time (secs) max: 900 (15 minutes)
* Memory (mb) max: 10240 (10 Gb)
* Storage (mb) max: 10240 (10 Gb)
:::
::: info 
number of vCPUs scale with memory with a max of 6.
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
* **Lambda function** (running dummy docker image) with access to the S3 bucket and cloudwatch (logs).
* **Step function** to launch the lambda function from the Api.
* **IAM role and policy** to add to the cognito user group (for user to acces the model when authenticated).