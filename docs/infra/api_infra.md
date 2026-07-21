---
layout: doc
aside: false
---

# Model Infrastructure
Quetzal Models (and Microservices) are each deployed in their own environment on either
* Lambda (Step functions)
* ECS (Fargate)

<img src="/quenedi_infra.png" alt="drawing" width="800"/>

### API gateway
gives an HTTPS endpoint to route our request to the Quenedi API (FastApi)

Only authentificated users to que Quetzal user Pool can do requests.
### Quenedi API

Main api used to communicates with AWS. Used for:
* Verify user access for each action with Cognito
* List available models
* Run simulation
* User management

<img src="/fastapi.png" alt="fast api"/>

### IAM
Each model have the access to itself. for example the lambda function for quetzal-paris has access to the quetzal-paris S3 bucket only and the step-functions has only the right to execute quetzal-paris lamba function.

### S3 bucket
The bucket host every scenarios files.
