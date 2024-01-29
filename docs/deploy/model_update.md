---
layout: doc
aside: false
---

# Model update

## Update a model on ECR (docker)

You need AWS permissions to update a model on ECR. You can ask for those permissions to the AWS Admin.

::: code-group

```bash [Linux]
./update-lambda.sh <model_folder_name>
```
```bat [Windows]
update-lambda.bat <model_folder_name>
```
:::



## Update Step function workflow 
step-function.json in the root directory of your model

   ```bash
   python update-function-config.py <model_folder>
   ```

## Update scenario (S3)

   ```bash
   python update-S3-model-files.py <model_folder> <scenario1> <scenario2>
   ```
::: info
this script will copy all files from `<model_folder>/scenarios/<scenario1>/` to S3. <br>
for example. with quetzal_test and a base scenario we would have in quetzal_test: `scenarios/base/inputs/pt/links.geojson` and so on
:::