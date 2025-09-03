# Scenario inputs

The following are the inputs required for the model to run its calculations and analyses, resulting in the outputs you receive:

* **PT network** (mandatory): Public transport network, links and nodes. Can be retrieved different ways:
    * Drawn directly in the platform (under the Maps tab)
    * Downloaded from a GTFS from the open-source mobilitydata database directly in the app using the GTFS importer micro-service.
    * Uploaded directly from your computer (pt links and nodes are required to be stored in two seperate geojson files)

    See section 04_pt_network for more detail on how to upload and edit PT networks.

* **Paramaters** (mandatory): A default version exists.

* **Road network** (optional): Road network, links and nodes. Using a road network enables you to build networks that use roads (buses, express buses...). Road network can be 
    * Downloaded directly from OpenStreetMap database through the OSM import microservice for a chosen area. 
    * Uploaded directly from your computer
    
    See section 05_road_network for more detail on how to upload and edit road networks.

* **OD matrix** (optional): For additional results regarding modal share estimations and flow estimates, you can provide an OD matrix. The requirements in terms of format are as follows:

    * geometry: LineStrings origin (first point) to destination (last point)
    * origin point id (will be atributed to the position of the first point of the linestring geometry)
    * destination point id (will be attributed to the position of the first point of the linestring geometry)
    * volume field

Load the file in the OD Matrix section of the inputs tab. Alternatively, you can draw the OD-matrix in the OD subsection under the Maps tab.

* **Zonage** (optional): file containing socio-economical data and used to compute network, line and station coverage. To compute coverage such as coverage, you must provide a zoning file named zonage.geojson. Here is the main information it must include:

    * geometry column giving zone shapes (crs 4326)
    * Densities for each item whose catchment should be computed (field1, field2...) in the format item1_density, item2_density... expressed in item/km². Relevant items include population, jobs, medical facilities...

For population and jobs, zonage can be easily generated using SYSMAP, using the script hosted here: https://gitlab.com/systra/dca/python-snippets/-/snippets/4840233.

Once your zoning file is ready, load it into the additional inputs section under the inputs tab.

* **Style requirements** (optional): Defines the symbology of the output GIS layers.