
# Mapmatching

## Overview

Most of the bus routes use the road network. For each station-to-station segment, there corresponds a list of roads. Understanding which roads are used by buses is crucial to be able to map the load of the buses on the road and to apply the congestion delays to the buses. The mapmatching microservices uses and advanced algorithm to merge the road and public transport network. Hence, this algorithm will work only if the project has both a road network and a public transport network.

![Alt text](/microservice/mapmatching_overview.png)

## Explanation of the parameters

In order to match the road links with the bus network we need to determine which path of road link better fit the bus interstation. To do so there are two parameters we use :

1. The **Emission** is an estimation of the distance between the bus links and the road links. The greater the distance between the bus link and the road, the higher the Emission. The lower Beta is, the higher the Transition, the greater **power** ,the higher the Emission.

2. The **Transition** take into account the length of the bus interstation and the lenght of the path of road link.  The greater the difference of length, the higher the Transition. The lower **Beta** is, the higher the Transition.

These two parameter have a different way of determining how to merge the road and public transport network. If only **Emission** is taken into account the merge will be done using only the distance between the links.  If only **Transition** is taken into account the merge will be done using only the difference of length between public transport interstation and path of road links.

![Alt text](/microservice/formulas.png)

::: tip 💡 TIP
The Beta, Sigma, power variable allow to choose the weight of each parameter, if you want that the mapmatching to use more a parameter than the another you will want for that parameter to be the smalest possible. For instance if you want  that the mapmatching to be done mostly by using the distance between network you can choose a high Sigma. Some test can be needed to find what approach is the best to mapmatch your network.
:::

## Route_type exclusion

This scrollable menu allows to chosoe which public route type you **dont want** to merge on the road. You can check as much route type as you want or none at all.

![Alt text](/microservice/route_type_exclusion.png)

## Variables

As explained in **explaination of the parameters** the variable can be changed in order to influence the kind of mapmatching will be used. You just have to change the value in the boxes shown in the next picture

![Alt text](/microservice/variables_mapmatching.png)

::: tip 💡 TIP
It is better to change one variable at a time to better assess the effec of each variable on the mapmatching
:::

## Use difference

If the button is turned on, both **Emission** and **Transition** values are used to do the mapmatching. Else the **Transition** is ignored, and only **Emission** (the distance between the road links and public transport links) is taken into account.

![Alt text](/microservice/use_diff_mapmatching.png)

## Add indicators on road links

If this button is turned on, PT (Public Transport) metrics will be added to road links (e.g., number of trips & number of lines). This will make the road network slightly heavier but will provide useful information if you need to analyze public transport road usage.

![Alt text](/microservice/add_indicator_mapmatching.png)

## Keep time

If the button is turned on, the original time (before the mapmatching) of the public transport link will be kept and the new speed will be determine using it. Else, the original speed of the public transport link is used to determine is new time.

![Alt text](/microservice/keep_time.png)

## Process

Once everything is done you can click on the **Process** button in order to launch the algorithm.

![Alt text](/microservice/process_mapmatching.png)

It will change the geometry of the public transport links (except those in the route_type exclusion) to merge with the road network, the speed or time will also be updated for them as well.

As an example in the first picture there is a public transport network before mapmatching and in the second the same network after the mapmatching.

![Alt text](/microservice/avant.png)

![Alt text](/microservice/apres.png)