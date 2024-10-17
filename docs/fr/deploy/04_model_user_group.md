---
outline: deep
---

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
