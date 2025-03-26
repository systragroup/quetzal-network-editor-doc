
# GTFS importer

## Overview

The aim of this module is to import GTFS (General Transit Feed Specification) data either from a local zip file or download it from an online repository and convert it to Quetzal's own public transport format.

## Zip Importer

Zip importer is the microservice that import GTFS from local GTFS zip file.

![Alt text](/microservice/import_gtfs.png)

# Uploading GTFS

The GTFS uploaded need to be in the classical gtfs form, an exemple is shown on the next picture. This kind of GTFS file is often downloaded from a transport autority website. You can upload as much GTFS zip file as you want to create your public transport network. 

![Alt text](/microservice/exemple_gtfs.png)

![Alt text](/microservice/upload_gtfs.png)

# Filter

It is possible to filter the time period of the GTFS that will be used. Only the trips having at least one stop during the time range, will be imported. 

![Alt text](/microservice/time_gtfs.png)

You will also have to choose a date inside the date range of the GTFS. This range is displayed in the from and to columns. A selected date is preset but can be changed.

![Alt text](/microservice/info_gtfs.png)

# Convert 

Once all the GTFS have been uploaded, and the date and time set for each of them you can clink on convert in order to convert the GTFS to Quetzal's own public transport format.

![Alt text](/microservice/convert_gtfs_zip.png)

This will directly display the public transport network of the GTFS uploaded, in the Quetzal format and for the date and time choosen.

![Alt text](/microservice/gtfs_import_zip.png)

## Web Importer

Web Importer is the microservice that import GTFS from an online repository : https://database.mobilitydata.org/. The public transport network that will be imported will be determined using a polygon.

![Alt text](/microservice/web_importer_overview.png)

# Polygon 

The preset polygon is a rectangle that varies in size depending on the level of zoom.
If a polygon more specific is needed an option can be choose, for that we need to clink on the icon shown on the next picture.

![Alt text](/microservice/importer_polygon_icon.png)

Once it is done, it is possible to moove the differents nodes of the polygon by draging them. It is also possible to add new nodes by left-clicking. The nodes can also be deleted by righ-clicking on them.

![Alt text](/microservice/node_polygon_gtfs.png)

It is also possible to choose to use another polygon by importing from your computer a geojson file projected in epsg 4326 (the geometry must be a polygon), for that you need to clink on the icon shown in the next picture.

![Alt text](/microservice/importer_polygon_imp.png)

# Fetch available GTFS 

Once the polygon is set you can fetch all the available GTFS that exist within the boundary of the polygon. To do so you just need to click on the icon shown in the next picture.

![Alt text](/microservice/fetch_available_gtfs.png)

# Download GTFS zip file

It is possible to download the GTFS zip file of a specific GTFS, by clicking on the icon shown in the next picture.

![Alt text](/microservice/download_zip-gtfs.png)

# Filter 

It is possible to filter the time period of the GTFS that will be used. Only the trips having at least one stop during the time range, will be imported. On the same row you will need to choose the day of the current week you want to import.

![Alt text](/microservice/data_time_gtfs_importer.png)

You can also pick which GTFS you want to import. To help the decision the different columns give information about the GTFS:
- If is network is entierely inside the displayed polygone (All in polygon)
- The code of the country of the GTFS (Code)
- The city that generate the GTFS (City)
- The transport agency that generate the GTFS (Agency)

To select the gtfs you just need to opt the box shown in the next picture.

![Alt text](/microservice/select_gtfs.png)

# Convert

Once all the GTFS have been selected, you can clink on download in order to convert the GTFS to Quetzal's own public transport format.

![Alt text](/microservice/download_gtfs.png)

This will directly display the public transport network of the GTFS uploaded, in the Quetzal format and for the date and time choosen.

![Alt text](/microservice/gtfs_display_web.png)