---
outline: deep
---

# Deploying Model

::: info
   Files are under `docker/` into **quetzal-network-editor-backend**
:::

## Configuration

1. **Copy files** from  `docker/template` to the **root of the model directory**


```
├─ .env
├─ Dockerfile
├─ DockerFile.dockerignore
├─ requirements.txt
└─ step-functions.json
```


### .env
2. Fill the environnement variable file `.env` .

```
AWS_ECR_REPO_NAME=<model_name>
AWS_LAMBDA_FUNCTION_NAME=<model_name>
AWS_BUCKET_NAME=<model_name>
```
`<model_name>` is defined in the infra folder `/infra/models/environments/<model_name>.tfvars`.

[see the infra creation](../infra/02_create_infra.html#configuration)

### DockerFile
The provided Dockerfile should work for any model without any modification.

### Dockerignore

3. Change `<model_folder>` to your model folder name. Add any other files that should be ignore to minimize the Docker image size.

```dockerignore
**__pycache__**
**/*.pyc
**.cache**
**/*.ipynb_checkpoints*
**/*.DS_store*
quetzal/.git
quetzal/.venv
quetzal/wheels-cp38-win_amd64
quetzal/docker/infra
<model_folder>/scenarios/*  // [!code focus]
<model_folder>/.git/objects // [!code focus]
```

::: tip Note 
Docker Build will be run from directory higher than the model directory. This is why we do write the `model_folder` in the paths.
:::

::: warning Note
`<model_folder>/scenarios/* ` should be in the dockerignore as those files are not to be dockerize. They are the scenarios files that will be on the Database (S3)
:::

::: danger WARNING
a .git file is needed in the docker (for some obscure reason). So you should keep the `<model_folder>/.git` and only ignore the `.git/objects` subfolder.
:::


### requirements.txt
Ajust the python requirement if needed. 

We recommand using [pip chill](https://pypi.org/project/pip-chill/). if needed.

### step-functions.json
5. Modify the step function configuration according to model steps anch change `<model_name>` with your model name (see step 2.)

:::tip Info
Each step in the step-function is a Notebook to be run. It is what defines the model steps in the 
[Run page](../howto/05_run_simulation.html#run-a-simulation)
:::

Lines to modify are marked with `# TO EDIT.` (`# TO EDIT.` must be removed from the filnal json file.)

The fist step is used to validate that the user has the correct access to run the model. (optional)

```json
{
  "StartAt": "Authorization",
  "States": {
    "Authorization": {
      "Type": "Task",
      "Resource": "arn:aws:states:::lambda:invoke",
      "OutputPath": "$.Payload",
      "Parameters": {
        "Payload": {
          "authorization.$": "$.authorization",
          "model": <model_name>, # TO EDIT. // [!code focus]
          "choice.$": "$.choice",
          "scenario_path_S3.$": "$.scenario_path_S3",
          "launcher_arg.$": "$.launcher_arg",
          "metadata.$": "$.metadata"
        },
        "FunctionName": "arn:aws:lambda:ca-central-1:142023388927:function:quetzal-api-auth:$LATEST"
      },
      ...
      "Next": "STEP 1" # TO EDIT // [!code focus]
    },
```
Steps have names (STEP 1 here) and a `Next` argument leading to the next step. you can create as many step as you want.

The last step has `"End": true` instead of `Next: Step_x`


```json
 "STEP 1": { # TO EDIT  // [!code focus]
      "Type": "Task",
      "Resource": "arn:aws:states:::lambda:invoke",
      "OutputPath": "$.Payload",
      "Parameters": {
        "Payload": {
          "notebook_path": "notebooks/transport/A10_STEP_1.ipynb", # TO EDIT  // [!code focus]
          "scenario_path_S3.$": "$.scenario_path_S3",
          "launcher_arg.$": "$.launcher_arg",
          "metadata.$": "$.metadata"
        },
        "FunctionName": "arn:aws:lambda:ca-central-1:142023388927:function:<model_name>"  # TO EDIT  // [!code focus]
      },
      "Retry": [
        {
          "ErrorEquals": [
            "Lambda.ServiceException",
            "Lambda.SdkClientException",
            "Lambda.TooManyRequestsException"
          ],
          "IntervalSeconds": 2,
          "MaxAttempts": 2,
          "BackoffRate": 2
        },
        {
          "ErrorEquals": [
            "Lambda.AWSLambdaException"
          ],
          "IntervalSeconds": 30,
          "MaxAttempts": 4,
          "BackoffRate": 2
        }
      ],
      "Next": "STEP 2" # TO EDIT  // [!code focus]
    },
```

## Deploying

7. Navigate to the script folder `docker/scripts` in your terminal

### Docker
8. Build and push the first image to the ECR Repository using the following command


::: info Windows 
make sure to <b>open docker desktop</b> first
:::

::: code-group

```bash [Linux]
./push-image.sh <model_folder> initial
```
```bat [Windows]
push-image.bat <model_folder> initial
```
:::  

::: tip Info 
This function will build the docker locally and push it on aws (ECR).then it will update the lambda function with the newly pushed docker. This operation can be long. Updating the docker is faster as it can reuse existing layers.
:::

### step-function
9. Push the step function definition to aws (step-function)

```bash
python update-function-config.py <model_folder>
```

### Scenarios
10. Add Scenarios to the database (s3).

You can add more than one scenario at the time `(<scenario> <scenario2> ...)`

```bash
python update-S3-model-files.py <model_folder> <scenario>
```
::: tip Note 
this script will copy all files from `<model_folder>/scenarios/<scenario>/` to S3
:::

::: warning Important
The webapp expect a base scenario to work properly. Base scenario are non editable in the webapp
:::

::: danger Danger
data will be permenently replace on the database for the updated scenarios.
:::

