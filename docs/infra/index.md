---
layout: doc
aside: false
---

# Authentification

the **Authentification** and the **Authorisation** to the application is done using **AWS Cognito**.
Cognito uses the **OpenID** standard

::: info
Authentification is the action of mapping login credentials to a user in the application user pool.
Authentification could be perform by other or multiples services (idendity provider) suchs as Google, Facebook or
Microsoft active directory

:::

<img src="/auth.svg" alt="drawing" width="600"/>


## Authentification
user credentials (username/password) are send to the Cognito identity provider service and an identity token
is return if successfull

## Authorisation

The idensity token is send to the Cognito User pool and an Access token (jwt token) is return with the appropriates 
user permission.

::: info
the access token is valid for 24 hours.
:::
::: info
Cognito also send a refresh token valid for 30 days. The access token is renew using the refresh token for 30 days
:::

## Groups and permission
Each user is within a single group (ex: admin). Groups are used to defined all the user specific permission.
Permissions are group base and not user base. Every user in a group has the same permission.

## Permission (RBAC)
Going one step back. Group are associated with an IAM role, and the IAM role has permission in the form of IAM policies
```
├─ User Group 1
│  └─ IAM Role 1
|     ├─ IAM policy 1
|     └─ IAM policy 2
|
└─ User Group 2
   └─ IAM Role 2
      ├─ IAM policy 1
      └─ IAM policy 2
```

Finally, IAM policies are json with with permission for AWS services. In the example bellow,
the policicy gives access to list, read, write and delete to a S3 bucket names "quetzal-model".
it also remove the delete and write access to the "base/" folder in that bucket.

```json
{
    "Statement": [
        {
            "Action": "s3:ListBucket",
            "Effect": "Allow",
            "Resource": "arn:aws:s3:::quetzal-model"
        },
        {
            "Action": [
                "s3:PutObject",
                "s3:GetObject",
                "s3:DeleteObject"
            ],
            "Effect": "Allow",
            "Resource": "arn:aws:s3:::quetzal-model/*"
        },
        {
            "Action": [
                "s3:PutObject",
                "s3:DeleteObject"
            ],
            "Effect": "Deny",
            "Resource": "arn:aws:s3:::quetzal-model/base/*"
        }
    ],
    "Version": "2012-10-17"
}

```