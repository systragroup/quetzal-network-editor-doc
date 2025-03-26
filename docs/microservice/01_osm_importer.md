
# OSM IMPORTER

## Overview

The aim of this module is to import road network from Open Street Map (OSM), clean it and convert it to Quetzal's road network format. The drawing of a polygon determine the zone for wich the network will be imported. The different type of road displayed can be choose aswell. The cycleway information can also be displayed at choice.

![Alt text](/microservice/overview_osm.png)

The road network that will be imported will be determined using a polygon.

## Polygon 

The preset polygon is a rectangle that varies in size depending on the level of zoom.
If a polygon more specific is needed an option can be choose, for that we need to clink on the icon shown in the next picture.

![Alt text](/microservice/icon_polygon.png)

Once it is done, it is possible to moove the differents nodes of the polygon by draging them. It is also possible to add new nodes by left-clicking. The nodes can also be deleted by righ-clicking on them.

![Alt text](/microservice/polygon_nodes.png)

It is also possible to choose to use another polygon by importing from your computer a geojson file projected in epsg 4326 (the geometry must be a polygon), for that you need to clink on the icon shown in the next picture.

![Alt text](/microservice/icon_televerse_osm.png)

## Road links selection

It is possible to choose which kind of road links (motorway, primary, secondary, residential) are going to be download from osm. To do so, you need to select the type of link you want displayed in the list 'selected item' shown in the next picture. Some of the type of road links are preopt, but can be unselected if needed.

![Alt text](/microservice/route_type_osm.png)

## Extended cycleway

The information about the bike network on the road link comme by default as 3 columns ["yes","no","shared"], if the option extended cycleway is choosen columns are added to give more information about the bike network.

![Alt text](/microservice/extended_cycleway.png)

## Download the osm network

When all the filter previously explained have been choosen, you click on download to create your road network.

![Alt text](/microservice/download_osm.png)

It display automatically the network with the types of road links choosen in the polygon determine. It's possible to export this network in zip file by clicking in the pictogram shown in the next picture.

![Alt text](/microservice/finish_road_network.png)
