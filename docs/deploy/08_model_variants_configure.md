---
outline: deep
---

## Overview
Variants are a way to codify multiple periods or horizon on the same network. Variants are mark with a **#** at the ends of properties (ex: headway#AM). Variants are added on the: 

- Networks (PT and road)
- Parameters 
- Model (parallel excecution)


## Network

Network variants (such as period) can be added with <u>**#**</u> in the property (ex: headway#AM)

```json
    "index": "link_21611",
    "trip_id": "Trip 1",
    "a": "node_242202",
    "b": "node_236804",
    "link_sequence": 9,
    "drop_off_type": 0,
    "pickup_type": 0,
    "headway": 402, // [!code --]
    "headway#AM": 402, // [!code ++]
    "headway#PM": 804, // [!code ++]
    "route_type": "subway",
    "route_color": "4CAF50",
    "agency_id": "Quetzal",
    "route_short_name": "route 1",
    "route_width": 5,
    "direction_id": 0,
    "speed":20 // [!code --]
    "speed#AM": 20, // [!code ++]
    "speed#PM": 15, // [!code ++]
    "time":338 // [!code --]
    "time#AM": 338, // [!code ++]
    "time#PM": 450, // [!code ++]
```

:::danger
Properties with variant **<u>MUST</u>** be added for **<u>every variant</u>**. If there is 2 variants, AM & PM, you we should have speed#AM and speed#PM or only Speed.
:::

:::info info (Road)
Road reversed properties **<u>MUST</u>**  end with _r just like before ex: **speed#AM, speed#AM_r**
:::

variants can be filtered in the edition dialog.

![alt text](/deploy/variant.png)

Every variant can be edited at once while filtering a single property (here 5 variants).

![alt text](/deploy/variant2.png)

## Stepfunction

You can add variants to the model (for example periods). Variants needs to be added to the **params.json** to described the choices and the selected one.

![Alt text](/deploy/variant_stepfunction.png)
::: code-group
```json [params.js] 
[   
    {
		"variants": [
			"AM",
			"PM"
		],
		"choices": [
			"AM",
			"PM",
			"MD",
			"NI",
		],
		"multiple": true,   // optional
		"label": "periods", // optional
		"model": "default" // optional
	},
    ...
]
```
:::

Parallel function execution is defined in the **step-function.js**. in the example below, each variants are map to the period argv of the notebook, but any name is possible.

::: tip Note 
it is possible to pass only one variant or none to the Parallel Iterator. if none are passed, the steps are skipped.
:::

::: code-group
```json [step-functions.js]
 "Parallel Iterator": {
      "Type": "Map",
      "InputPath": "$",
      "ItemsPath": "$.variants",
      "Parameters": {
        "scenario_path_S3.$": "$.scenario_path_S3",
        "metadata.$": "$.metadata",
        "launcher_arg": {
          "training_folder.$": "$.launcher_arg.training_folder",
          "params.$": "$.launcher_arg.params",
          // period.$ can be changed to any notebbok argv  [!code highlight]
          "period.$": "$$.Map.Item.Value" //  [!code highlight]
        }
      },
      // all parallel steps defined here.
      "Iterator": {
        "StartAt": "Network Preparation",
        "States": {
          "Network Preparation": {
            "Type": "Task",
            ...
            "Next": "Road Model"
          },
            ...
        }
      },
      "End": true
    }
```

```python [notebook argv]
import sys
import json
default = {'scenario': 'base', 'period': 'AM', 'training_folder': '../..'} #[!code highlight]
manual, argv = (True, default) if 'ipykernel' in sys.argv[0] else (False, dict(default, **json.loads(sys.argv[1])))
```
:::


## Parameters

variants can be added to each parameters in **params.json** in the web interface or manually in the json (adding #var at the end)

::: tip Note 
The choice of variants are the one already defined in params.json
:::


![Alt text](/deploy/variant_params.png)

on the image above:
1. show the buttons (2, 3, 4)
2. add a variant to the parameter
3. change the variant between the available choices
4. delete a parameter's variant

::: code-group
```js [params.js]
[
    {
		"variants": [
			"AM",
			"PM"
		],
		"choices": [ // the choices  [!code highlight]
			"AM",    //  [!code highlight]
			"PM",    //  [!code highlight]
			"MD",    //  [!code highlight]
			"NI",    //  [!code highlight]
		],           //  [!code highlight]
        ...
	},
    ...
    {
        "text": "speed",
        "value": 2.82,
        "type": "Number",
        "units": "km/h",
        "hint": "Footpaths walking speed (acf)",
        "rules": [
            "required"
        ],
        "name": "speed"
    },
    {
        "text": "speed#AM", //  [!code highlight]
        "value": 2.82,
        "type": "Number",
        "units": "km/h",
        "hint": "Footpaths walking speed (acf)",
        "rules": [
            "required"
        ],
        "name": "speed#AM" //  [!code highlight]
    },
    ...
]
```
:::

## python utils

A function to correctly parse the variants in the parameters is available in pyhton

```python
from quetzal.io.quenedi import read_parameters
var = excel.read_var(file=os.path.join(input_folder, 'parameters.xlsx'), scenario=scenario, period=period, return_ancestry=False)
if 'params' in argv.keys():
	params = read_parameters(argv['params'], period=period)
	var.update(params)
```

A function to correctly parse the networks is available in pyhton

``` python
from quetzal.io.quenedi import restrict_to_variant
restrict_to_variant(sm, period=period)
```
