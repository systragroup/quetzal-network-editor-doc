---
outline: deep
---

# Deploying Model

::: info
   Files are under `docker/` into **[quetzal-network-editor-backend](https://github.com/systragroup/quetzal-network-editor-backend/tree/main/docker)**
:::

Model can be deployed on either `Lambda` or `ECS`

## Configuration (Lambda)

1. **Copy files** from  `docker/template` to the **root of the model directory**

 **Copy files** from  `docker/template_lambda` or `docker/template_ecs` 


::: code-group

``` kotlin [Lambda]
├─ .env
├─ DockerFile.dockerignore
├─ requirements.txt
├─ modelConfig.json  
├─ step-functions.json   <-- template_lambda // [!code highlight] 
└─ Dockerfile            <-- template_lambda // [!code highlight] 

```
``` kotlin [ECS]
├─ .env
├─ DockerFile.dockerignore
├─ requirements.txt
├─ modelConfig.json
├─ steps.json            <-- template_ecs // [!code highlight] 
└─ Dockerfile            <-- template_ecs // [!code highlight] 

```
:::  






### .env
2. Fill the environnement variable file `.env` .

```
AWS_ECR_REPO_NAME=<model_name>
```
`<model_name>` is defined in the infra folder `/infra/models/environments/<model_name>.tfvars`.

[see the infra creation](../infra/02_create_infra.html#configuration)

### DockerFile
The provided Dockerfile should work for any model without any modification. please note that the DockerFile for lambda and ECS are different

### Dockerignore

3. Change `<model_folder>` to your model folder name. Add any other files that should be ignore to minimize the Docker image size.

``` dockerignore
**__pycache__**
**/*.pyc
**.cache**
**/*.ipynb_checkpoints*
**/*.DS_store*
<model_folder>/scenarios/*    <-- TO CHANGE
<model_folder>/.git/objects   <-- TO CHANGE
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

We recommand installing [quetzal from pip](https://pypi.org/project/quetzal-transport/). if not, modify the dockerfile to copy your local quetzal folder in the docker and provide all of its requirements.

### step-functions.json (lambda)

::: tip INFO 
For `Lambda` infra only. Skip this step if using `ECS`
:::


5. Modify the step function configuration according to model steps and change `<model_name>` with your model name.


Each step in the step-function is a Notebook to run. It is what defines the model steps in the 
[Run page](../howto/05_run_simulation.html#run-a-simulation)

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



### steps.json (ECS)

::: tip INFO 
For `ECS` infra only. Skip this step if using `Lambda`
:::


5. Modify the steps configuration according to model steps.


Each step in the steps.jsons is a Notebook to run. It is what defines the model steps in the 
[Run page](../howto/05_run_simulation.html#run-a-simulation)

steps are executed in order.

```json
[
    {
        "name": "default",
        "steps": [
            {
                "name": "step 1",
                "path": "notebooks/2_model/test_1.ipynb"
            },
            {
                "name": "step 2",
                "path": "notebooks/2_model/test_2.ipynb"
            }
        ]
    }
]

```

### modelConfig.json
This file is used to set model wide configuration (values choices, units, etc)
(see  [model config](./07_model_configure_advanced#model-config).)

## Deploying
for the first deployment. you must at least deploy those 3 ressources.
(see [update-model](./05_model_update))

* Docker [model update](./05_model_update#update-model)
* steps [steps update](./05_model_update#update-steps).
* scenario [scenario update](./05_model_update#update-scenario).


