# INFRA (TERRAFORM)

::: warning AWS Admin only
:::

1. **Create a new .tfvars file** with the name of your model `docker/infra/environement/<your_model_name>.tfvars` `<br>`

* replace `<your_model_name>`  with the model name, ex: quetzal-paris `<br>`
* the name must be unique in the AWS region (ca-central-1) (s3 bucket limitation)

```
    quetzal_model_name      = "<your_model_name>"
    lambda_memory_size      = 4016
    lambda_time_limit       = 300
    lambda_storage_size     = 4016
```

*NOTE*: Ressources configuration may differ depending on model requierements. time in secs and memory in mb

2. **Go to the infra folder** `(docker/infra)`

```bash
cd docker/infra
```

3. **Create a new workspace**. Each model share the same architecture and must be in separated workspace\

```bash
terraform init
```

```bash
terraform workspace new <your_model_name>
```

4. **Select your workspace and initialize it**. this will sync your local copy with the deployed terraform state

```bash
terraform workspace select <your_model_name>
```

```bash
terraform init
```

5. **Plan your deployment**. This will create a plan of deployment. if it is a new deployment, make sure everything is created and **nothing is destroy** `<br>`
   The plan should read  : `Plan: 16 to add, 0 to change, 0 to destroy.`

```bash
terraform plan -var-file="environments/<your_model_name>.tfvars"
```

6. **Apply your deployment**. Make sure the plan is the same as in the previous step and press yes  `<br>`
   Again, the plan should read  : `Plan: 17 to add, 0 to change, 0 to destroy.`

```bash
terraform apply -var-file="environments/<your_model_name>.tfvars"
```

That's it! terraform created:

* **S3 bucket** named <your_model_name> (empty)
* **ECR** repo to store the model docker image (with dummy docker image)
* **Lambda function** with access to the S3 bucket and cloudwatch (running dummy docker image)
* **Step function** to launch the lambda function from the Api Gateway
* **IAM role and policy** to add to the cognito user group (for user to acces the model when authenticated)
