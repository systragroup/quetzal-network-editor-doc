---
layout: doc
aside: false
---


# Maintenance
## destroy Terraform workspace (for AWS admin)

`terraform workspace select <your_model_name>`

`terraform destroy`

`terraform workspace delete <your_model_name>`

This will fail for S3 and ECR because they are not empty.
empty S3 bucket and ECR. you may need to remove the policy in the cognito group too

## Test lambda function locally

you can test the lambda function docker locally. but you will need to create a s3 folder with your files (ex: test/), and add your AWS crdential to the .env file.

```
QUETZAL_MODEL_NAME=<model_folder>
AWS_ECR_REPO_NAME=<model-name>
AWS_LAMBDA_FUNCTION_NAME=<model-name>
AWS_BUCKET_NAME=<model-name>
AWS_ACCESS_KEY_ID= <your access key>
AWS_SECRET_ACCESS_KEY= <your secret key>
```

after that. you can run the test script to build and run the docker locally

``./test-lambda.sh <model_folder_name> test ``

here. test is the docker tag.

Finally, run this command in a new terminal with the appropriate values.

```bash
 curl -XPOST "http://localhost:9000/2015-03-31/functions/function/invocations" -d '{"notebook_path": "notebooks/model/model.ipynb", "scenario_path_S3": "test/", "launcher_arg": {"training_folder": "/tmp","params": {"some_param":"value"}},"metadata": {"user_email": "lambda_test@test.com"}}'
```

## debug a docker container

running an interactive shell to explore the docker container

 ``docker run -it --rm --entrypoint /bin/bash <docker_name>:<tag>``

 by default, you will be in `/var/task` which is where all your files (main.py for instance)
 the command `du -ah --max-depth=1` is usefull to see the size of each dir

## Knowned issue

### terraform destroy

ECR  will not be destroy as it is not empty. We need to empty and then destroy ECR as the last step. last step because Lambda depend on an image tag on ecr. if ECR is empty lambda will fail to destroy.

### jupyter-nbconvert KeyError: 'template_paths'

The entrypoint of the dockerfile convert .ipynb to .py files. For some reason. this will not work if there is no .git in the quetzal_model.

### Lambda.Unknown Task timed out (tqdm)

tqdm doesn't work on lambda when the loop is too long (a priori ~1000 iterations).
gives back a timeout error with no log. 

This could also be a timeout issue. lambda have 5 minutes to completes its task and it took more for example.