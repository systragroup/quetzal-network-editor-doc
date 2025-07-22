---
outline: deep
---

# GTFS importer

## Overview

The aim of this module is to import GTFS (General Transit Feed Specification) data either from a local zip file or download it from an online repository and convert it to Quetzal's own public transport format.

# Zip Importer

Zip importer is the microservice that imports GTFS from local GTFS zip file.

![Alt text](/microservice/import_gtfs.png)

## Uploading GTFS

The GTFS uploaded needs to be in the classical gtfs form, an example is shown on the next picture. This kind of GTFS file is often downloaded from a transport autority website. You can upload as much GTFS zip file as you want to create your public transport network. 

![Alt text](/microservice/exemple_gtfs.png)

![Alt text](/microservice/upload_gtfs.png)

## Filters

### time

It is possible to filter the time period of the GTFS that will be used. Only the trips having at least one stop during the time range, will be imported. 

![Alt text](/microservice/time_gtfs.png)

### Periods

You can import GTFS over multiple time periods with unique names over 24 hours. This will output a single network with Headway#AM = 0 when a trip have no service in AM for example
[see variant configuration](../deploy/08_model_variants_configure#network)

![Alt text](/microservice/periods_gtfs.png)

### Date

You will also have to choose a date inside the date range of the GTFS. This range is displayed in the **from** and **to** columns. A selected date is preset but can be changed.

![Alt text](/microservice/info_gtfs.png)

## Convert 

Once all the GTFS have been uploaded, and the date and time set for each of them you can click on **convert** in order to convert the GTFS to Quetzal's own public transport format.

![Alt text](/microservice/convert_gtfs_zip.png)

This will directly display the public transport network of the GTFS uploaded, in the Quetzal format and for the date and time chosen.

![Alt text](/microservice/gtfs_import_zip.png)

# Web Importer

Web Importer is the microservice that imports GTFS from an online repository : https://database.mobilitydata.org/. The public transport network that will be imported will be determined using a polygon.

![Alt text](/microservice/web_importer_overview.png)

## Polygon 

The preset polygon is a rectangle that varies in size depending on the level of zoom.
If a polygon more specific is needed an option can be choose, for that we need to click on the icon shown on the next picture.

![Alt text](/microservice/importer_polygon_icon.png)

Once it is done, it is possible to move the differents nodes of the polygon by dragging them. It is also possible to add new nodes by left-clicking. The nodes can also be deleted by right-clicking on them.

![Alt text](/microservice/node_polygon_gtfs.png)

It is also possible to choose to use another polygon by importing a GeoJSON file projected in EPSG 4326 (the geometry must be a polygon), for that you need to click on the icon shown in the next picture.

![Alt text](/microservice/importer_polygon_imp.png)

## Fetch available GTFS 

Once the polygon is set you can fetch all the available GTFS that exist within the boundary of the polygon. To do so you just need to click on the icon shown in the next picture.

![Alt text](/microservice/fetch_available_gtfs.png)

## Download GTFS zip file

It is possible to download the GTFS zip file of a specific GTFS, by clicking on the icon shown in the next picture.

![Alt text](/microservice/download_zip-gtfs.png)

## Filters (web)

It is possible to filter the time period of the GTFS that will be used. Only the trips having at least one stop during the time range, will be imported.  [see filters for more information](#Filters)

* you will need to choose the day of the week you want to import.

![Alt text](/microservice/data_time_gtfs_importer.png)


You can also pick which GTFS you want to import. To help the decision the different columns give information about the GTFS:
- If the network is entirely inside the displayed polygone (**All in polygon**)
- The code of the country of the GTFS (**Code**)
- The city that generate the GTFS (**City**)
- The transport agency that generate the GTFS (**Agency**)

To select the GTFS you just need to check the box shown in the next picture.

![Alt text](/microservice/select_gtfs.png)

## Download

Once all the GTFS have been selected, you can click on **download** in order to convert the GTFS to Quetzal's own public transport format.

![Alt text](/microservice/download_gtfs.png)

This will directly display the public transport network of the GTFS uploaded, in the Quetzal format and for the date and time chosen.

![Alt text](/microservice/gtfs_display_web.png)