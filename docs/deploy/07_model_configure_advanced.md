---
outline: deep
---

## Overview

## Parameters

Parameters are divided into categories and can have multiple types.
Here we have an example of all possible parameters into a single "general" category.

![Alt text](/deploy/params.png)

```json
[
    {
        "category": "general",
        "model": "default",
        "params": [
            {
                "text": "param 1",
                "value": 1,
                "type": "Number",
                "hint": "this is a hint",
                "rules": ["required"],
                "name": "name_in_python_1"
            },
            {
                "text": "number param",
                "value": 2,
                "type": "Number",
                "units":"secs",
                "hint": "this is a hint",
                "rules": ["required", "largerThanZero", "nonNegative"],
                "name": "name_in_python_2"
            },
            {
                "text": "string param",
                "value": "default value",
                "type": "String",
                "hint": "this is a hint",
                "rules": [],
                "name": "name_in_python_3"
            },
            {
                "text": "bool param",
                "value": true,
                "type": "Boolean",
                "hint": "this is a hint",
                "rules": [],
                "name": "name_in_python_4"
            },
            {
                "text":"single Choices",
                "value":"rail",
                "items":[
                   "rail",
                   "subway",
                   "bus"
                ],
                "type":"String",
                "hint":"this is a hint",
                "rules":["required"],
                "name":"name_in_python_5"
             },
             {
                "text":"Multiple Choices",
                "value":["rail", "subway"],
                "multiple":true,
                "items":[
                   "rail",
                   "subway",
                   "bus"
                ],
                "type":"String",
                "hint":"this is a hint",
                "rules":["required"],
                "name":"name_in_python_6"
             },
             {
                "text":"Scenario selector",
                "value":[""],
                "multiple":true,
                "items": "$scenarios",
                "type":"String",
                "hint":"this is a hint",
                "rules":["required"],
                "name":"name_in_python_7"
             }
        ]
    }
]
```




## Scenario Lock

![Alt text](/deploy/scenario_lock.png)

you can lock any scenario simply by adding a **.lock** empty file at the root dir of the project

```
├─ inputs
|  ├─ pt           
|  |  ├─ links.geojson 
|  │  └─ nodes.geojson
|  ├─ road             
|  |  ├─ road_links.geojson 
|  │  └─ road_nodes.geojson 
|  ├─ params.json      
│  └─ ... 
├─ outputs
│  └─ ... 
├─ styles.json        
├─ .lock       // [!code focus]   
└─ ... 
```

::: tip Note 
scenario named **base** is always lock
:::


## Attributes choices

![Alt text](/deploy/attribute_choices.png)

in the root dir of a project. you can add "attributesChoices.json" This gives choices for **PT** and/or **road** attributes.
ex:


```
├─ inputs
|  ├─ pt           
|  |  ├─ links.geojson 
|  │  └─ nodes.geojson
|  ├─ road             
|  |  ├─ road_links.geojson 
|  │  └─ road_nodes.geojson 
|  ├─ params.json      
│  └─ ... 
├─ outputs
│  └─ ... 
├─ styles.json        
├─ attributesChoices.json       // [!code focus]   
└─ ... 
```

```json
{
    "pt":{
    },
    "road":{
       "oneway":[
          "0",
          "1"
       ],
       "cycleway":[
          "yes",
          "no",
          "shared"
       ],
       "cycleway_reverse":[
          "yes",
          "no",
          "shared"
       ],
       "highway":[
          "motorway",
          "residential"
       ]
    }
 }
```



## Step function choices

![Alt text](/deploy/run_multi_choice.png)

In the step function definition (step-functions.json), you can add a choice as the first step after Authorization.
:::tip
You can add as many choices as you want. in this case we have 3 pipelines: default, demand and orchestrator.
:::
```json
"Choice": {
    "Type": "Choice",
    "Choices": [
    {
        "Variable": "$.choice",
        "StringEquals": "demand",
        "Next": "Step 3"
    },
    {
        "Variable": "$.choice",
        "StringEquals": "orchestrator",
        "Next": "Step 2"
    }
    ],
    "Default": "Step 1"
},
```

Then. You need to add parameters specific to each Choice into the keyword **"model"**.

:::tip
The webapp will only display The choices if there are parameters associated to them. This allow us to have a Comparision scenario with 1 pipeline and a normal scenario with another pipeline for example.
:::

```json
[
    {
        "info": "default info",
        "model": "default"
    },
    {
        "info": "demand info",
        "model": "demand"
    },
    {
        "info": "orchestrator info",
        "model": "orchestrator"
    },
    {
        "category": "general",
        "model": [
            "default",
            "demand",
            "orchestrator"
        ],
        "params": [
            {
                "text": "number",
                "value": 44,
                "type": "Number",
                "hint": "this is a hiny",
                "rules": [
                    "required"
                ],
                "name": "param_name"
            }
        ]
    }
]
```

:::tip Note
**model** keyword accept a list or a string.
:::


## Parallel Step function

Parallel step function are supported. See with an administrator how to configure it.
