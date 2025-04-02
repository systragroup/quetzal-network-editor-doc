
# Matrix Road Caster

## Overview

Matrix Road Caster is a machine learning algorithm used to estimate the average speed on the road links at a given time of the day.

Random origins and destinations are scattered on the network, the Origin-Destination times are requested on the Here or Google API for the chosen time of day. The use of this algorithm requires an API key for either of the services.

![Alt text](/microservice/overview_matrix_road_caster.png)

## Detailed steps of the algorithm

1. The algorithm is either creating the chosen number of zones (number of zones parameter) using the density of the network to generate zones or you can choose to use your own zoning.
2. We call the Google or Here matrix API, and we select the chosen number of Origin-Destination (**number of OD** parameter) to create random OD. Around 1% of the total ODs is often enough (the number of total OD is the number of zones at power 2).
3. Using an hybrid machine learning model we interpolate the model OD times from the known time of the API's OD sample.
4. The algorithm adjusts the speed on the road network to match the routing time with the OD time using an iterative algorithm.

## API choice

You can choose the API (Application Programming Interface) of Google or Here time. these APIs provide the duration of a road travel in between two point. To choose the one you want to use the scrollable menu displayed on the next picture.

![Alt text](/microservice/API.png)

## Zones selection

### own zones

If you want use your own centroids to generate the OD that are going to be used to determine the time in the network. To do so click on the **Use zone** button , which will allow you to choose from a scrollable menu which input of the model you want to use. The number of zones in this case it is the one of the layer of your choice.

![Alt text](/microservice/zones_choice.png)

::: tip 💡 TIP
You should choose to use your own zones if you think that the density of centroids you use aligns with the precision you want for the road network. If there is a lot of centroids in a part of the network, it will be more likely that more test OD will be created here hence a more precise time of the road network in the area. 
:::

### generated zones

If you want to generate random zones based on the road network. You will just have to choose the number of zones you want in the parameter **number of zones** displayed on the next picture.

![Alt text](/microservice/number_of_zones.png)

The zones will be generated using a Kmean clustering method, that mean that they will be generated on all the network and more likely around more dense road network.
The zones created using this method are displayed after the scripts runs with the name  **1_HERE_zones_centroids.png**.

![Alt text](/microservice/1_HERE_zones_centroids.png)

::: tip 💡 TIP
The number of zones you choose to create will determine the precision of the Matrix road caster but more zones means more OD you need to to generate. Indeed, you will need to fetch from the API around 1% of the total OD of the model for good precision. For 100 zones it mean you will need 100 OD, but for 200 zones you will need 400. As the number of free request per API is generally limited this can be a limiting factor.
:::

## Date time 

You can choose the date and time that will be used to go fetch the data of the API (UTC Timezone). To do so you need to change the preexisting date and hour, the format is (YYYY-MM-DDTHH:MM:SS)

![Alt text](/microservice/date_time_MRC.png)

::: warning Important
The date should be in the future for the Google API and in the past for the Here API.
:::

## Freeflow time on road

The aim of the **freeflow time on roads** scrollable menu is to choose which columns of the road network represent the free flow time (With no congestion) of each road links. That can be seen as the speed limit.

![Alt text](/microservice/free_flow.png)

## max speed on road

This is the maximum allowed speed on a road. applying an OD matrix on the road network could result in unrealistic speed if not used.

![Alt text](/microservice/max_speed.png)

## number of OD to plot

The parameter **number of OD to plot** allow to choose the number of OD to generate calibration ouputs such as **4_HERE_OD_prediction** shown on the next picture.

![Alt text](/microservice/4_HERE_OD_prediction_1.png)

or **4_HERE_speed_prediction** shown on the next picture.

![Alt text](/microservice/4_HERE_speed_prediction_1.png)

They will be a generation of those two outputs for the number of OD chosen.

## API key

You will need an API key either from Google or Here to import the set of OD that will allow the calibration. It is possible to create free acount on each platform to create this key. 

![Alt text](/microservice/API_key.png)

##  Process

Once every parameter have been chosen you can click on process in order to lauch the algorithm.

![Alt text](/microservice/process.png)

This will generate two new columns in the road link layer, the columns **here_speed** and **here_time**, even if it was Google that was used.

![Alt text](/microservice/here_speed.png)

It wil also generate calibration figures that can be used to estimate the precision of the estimation and the calibration needed by the road network.

## Calibration figure

### Error per iteration 

This figure show the mean error of the routing when we interpolate the model OD time from the known time of the API's OD sample. Each iteration of the machine learning aim to decrease this error.

![Alt text](/microservice/2_HERE_iteration_error.png)

### Road Network calibration

This figure show the correlation between the road link time obtained using the routing algorithm and the original road link time. If the majority of the value are close by the red diagonal it mean that the road network have close result with the API data.

![Alt text](/microservice/3_HERE_road_calibration.png)

###  OD time and speed prediction

One or several random OD are picked from the calculated OD set ( depending on **number of OD to plot**), to check if the API ODs that has been used to determine the time of this/those calculated OD. The red ligne is the iterpolated OD and the orange ones are the API ODs.

![Alt text](/microservice/4_HERE_OD_prediction_1.png)

The same is done for the routing to determine the speed of the different road links used to go from the origin to the destination.

![Alt text](/microservice/4_HERE_speed_prediction_1.png)


### Model calibration

The precision of the interpolation is assessed using a sample of the ODs to monitor if the predicted OD times are close of the ones of the API.

![Alt text](/microservice/5_HERE_model_calibration.png)