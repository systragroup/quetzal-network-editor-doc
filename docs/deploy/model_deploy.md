---
layout: doc
aside: false
---

# Deploying Model

## Deploying

1. **Copy files** from this `template directory` to the **root of the model directory**
2. Fill the environnement variable file `.env` .

   * `QUETZAL_MODEL_NAME` should be the same as the the **model folder** name.
   * Everything else should be the same as `<your_model_name>` in terraform
3. Create the `requirements.txt` for the model. We recommand using [pip chill](https://pypi.org/project/pip-chill/).
   * you an also use the one provided in this `template directory`
4. Modify the step fonction configuration file `step-functions.json` according to model steps.
5. Fill the `Dockerfile.dockerignore`. Inputs that are provided by quenedi and outputs are not necessary in the image. Note that Docker Build will be run from directory higher than the model. You should add the model folder path to your ignored path (Exemple: inputs -> QUETZAL_MODEL_NAME/inputs)

   **note**: you need a .git in your model for the docker to work but you can ignore the quetzal .git
6. Go to this quetzal docker script folder `(quetzal/docker/scipts)`
7. Build and push the first image to the ECR Repository using the following command

   ```bash
   ./push-image.sh <model_folder_name> initial
   ```

   Or, in windows, make sure Docker desktop is running and run:

   ```bash
   push-image.bat <model_folder_name> initial
   ```

8. Add Step function workflow (step 4: step-function.json in the root directory of your model)

   ```bash
   python update-function-config.py <model_folder>
   ```

9. Add model files for base scenario to s3 **(first scenario should be base)**

   ```bash
   python update-S3-model-files.py <model_folder> <scenario1> <scenario2>
   ```

Note: this script will copy all files from `<model_folder>/scenarios/<scenario1>/` to S3. <br>
for example. with quetzal_test and a base scenario we would have in quetzal_test: `scenarios/base/inputs/pt/links.geojson` and so on

## Create Cognito User group (Optional)

::: warning AWS Admin only
:::

* Create new Cognito user group in quetzal user pool (Cognito Console -> User pool -> Quetzal -> Groups -> Create Group).
  * Enter a group name.
  * Select the role created by terraform (Cognito_quetzal_pool_`<model-name>`).
* You can then add user to the cognito user group in the AWS web interface

* Update cognito_group_access.json in quetzal-config bucket to add available bucket (model) to group.
  * ex: `<cognito_user_group>` : [`<model-name>`]
  * note: this is necessary as there are no other way for the front to know which models (buckets) are accessible.

## Add Access to existing Cognito User group  (Optional)

::: warning AWS Admin only
:::

* Find the IAM role associate to the Cognito user Group (ex: Cognito_quetzal_pool_`<cognito_user_group>`) under IAM>Roles
* In the Permissions tab. click "Add persmissions" then attach policies.
* Select the appropriated policy create by terraform (s3_read_put_`<model-name>`)
  
* Update cognito_group_access.json in quetzal-config bucket to add available bucket (model) to group.
  * ex: `<cognito_user_group>` : [`<model-name>`]
  * note: this is necessary as there are no other way for the front to know which models (buckets) are accessible.
