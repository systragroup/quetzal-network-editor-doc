---
layout: doc
aside: false
---
# What is Quetzal Cloud
Quetzal Cloud is an opensource web solution for Transport Modeling. It provides a framework to set up and run python models online. 
 * The cloud architecture lets you store your data safely and run multiple model in parallel
 * The user interface provides a collection of features to manage and run your models.

# Features of Quetzal User Interface
## Access and manage you projects in the browser
Quetzal Cloud provides a graphical interface to manage your projects stored in the cloud.
* Access all your project in the same place. 
* Find, your scenarios easily with the search bar. 
* Manage the inputs and outputs of your scenarios.
* Both cloud storage and zip files upload and downloads are supported

![Alt text](/other/load_project_0.png)

## Microeservices
The micro services provide robust automated processing to make the best of the road and public transport network data.
### OpenStreetMap importer (OSM importer)
Import a road network from Open Street Map, clean it and convert it to Quetzal's light road network format.
* draw a polygon on the map
* choose the types of roads you want to import, only the main one or the detailed network
* include cycleway details if needed

![Alt text](/other/microservices.png)

### GTFS Importer
Import GTFS data either from a zip file or download it from an online repo and convert it to Quetzal's own public transport format.
* upload a zip file with the zip importer or 
* from database.mobilitydata.org

![Alt text](/other/gtfs_importer.png)

### Matrix Road Caster

Matrix Road Caster is a machine learning algorithm used to estimate the average speed on the road links at a given time of the day.

Random origins and destinations are scattered on the network, the Origin-Destination times are requested on the Here API for the chosen time of day
![alt text](/here/1_HERE_zones_centroids.png)
The iterative algorithm adjusts the speed on the network and computes the shortest path until the OD times are consistent between the network and the request pool.
![alt text](/here/2_HERE_iteration_error.png)  ![alt text](/here/3_HERE_road_calibration.png) 
To calibrate the roads at a small scale with few requests, OD times are interpolated before the iterative OD to road time algorithm.
![alt text](/here/4_HERE_OD_prediction_1.png, "OD time prediction") ![alt text](/here/5_HERE_model_calibration.png, "Model Calibration")
The relevancy of the interpolation is monitored


### Mapmatching

Most of the bus routes use the road network. To each station to station segment correspond a list of roads. Understand which roads are used by with bus is crutial to be able to map the load of the buses on the road and to apply the congestion delays to the buses. The mapmatching microservices uses and advanced algorithm to merge the road and public transport network.
![alt text](/other/mapmatching.png)

## Network Editor

### Public Transport Network
The public transport map shows all the public transport routes.
* the trips can be sorted, filtered and edited in groups with the lateral panel
![alt text](/network_editor/pt_network_map.png)
The public transport roads can be matched to the road network on the fly by the in-browser simple mapmatching algorithm.
![alt text](/network_editor/front_mapmatching.png)
The data of each public transport link can be edited individually.
![alt text](/network_editor/front_mapmatching.png)
* the timetable module handles the conversion of frequency based trips into timetables. 
* the timetables can be edited easily, trips can be duplicated 
![alt text](/network_editor/timetable.png)

### Road Network
The road network can easily be edited :
* add new roads
* edit nodes and link info
* easy selection of multible links at a time from group edit
* direction hints to edit two way links

![alt text](/network_editor/road.png)
![alt text](/network_editor/road_edit.png)
![alt text](/network_editor/road_group_edit.png)

## Scenario Settings and Simulation Runs

All the simulation parameters and controls in one place with many features built to provide hints and feedbacks.

### Parameters
* methodological notes for the scenario are shown in the header
* the parameters are groupped in categories 
* small notes can be added to each category to explay the overall modeling step
* each parameter comes with a name, a unit and a collapsible hint (?)
* the hints can be edited by the user for a better collaborative experience

### Runs
* various simulation types can be made available | detailed and fast for example. Each simulation comes with a different list of steps (and relevant parameters)
* the interface provides real time updates about the simulations. 
* the complete logs of each step can be explored in the interface or dowloaded

![alt text](/run/run.png)

## Results
### Maps
The gegraphic results can be analysed with a powerful Map editor.
* Each layer can be visualized with custom vizualization parameters.
* the presets can be saved to the database or managed with jsons.
* the upload and download feature of the presets makes them ease to share among scenarios and projects.
![alt text](/results/road_speed_map.png)
* many presets can be shown at the same time to compose insightfull maps
![alt text](/results/map_composer.png)
### Reports
* All the plots and pictures generated by the model are organized in an automated report. 
* The interface supports Markdown files to compose the reports and display the data. 
* The pictures can be copied or downloaded in bulk with the report as a zipfile
![alt text](/results/pictures.png)
### Data Tables
The model outputs that are exported as .csv can be browsed directly in the interface.
![alt text](/results/result_table.png)

# Cloud Architecture
<img src="/api.svg" alt="drawing" width="800"/>