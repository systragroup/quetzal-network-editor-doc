

# Model update

::: info
   scripts are under `docker/scripts` into **[quetzal-network-editor-backend](https://github.com/systragroup/quetzal-network-editor-backend)**
:::

![Alt text](/deploy/model_infra.png)

## 1. Update a model on ECR (docker)

This will Create and deploy a docker image with:
 * Python and python librairies (requirement.txt)
 * model Notebooks
 * model inputs files

Run the command and provide a tag (anything) when prompted

::: code-group

```bash [Linux]
./update-lambda.sh <model_folder_name>
```
```bat [Windows]
update-lambda.bat <model_folder_name>
```
:::



## 2. Update Step function workflow 

This will only push the step-functions.json file Which tells the model steps (which notebooks to run)

```bash
python update-function-config.py <model_folder>
```

## 3. Update scenario (S3)

this script will copy a scenario from your local scenario folder `<model_folder>/scenarios/<scenario1>/` to the database (S3).

You can add more than one scenario at the time `(<scenario> <scenario2> ...)`

```bash
python update-S3-model-files.py <model_folder> <scenario1> <scenario2>
```
::: danger Danger
data will be permenently replace on the database for the updated scenarios.
:::