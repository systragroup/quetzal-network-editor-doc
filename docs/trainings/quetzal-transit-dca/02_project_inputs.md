# Scenario inputs

To initialize your project, you need to provide inputs in the Inputs tab.
The following are the inputs required for the model to run its calculations and analyses, resulting in the outputs you receive. The level of detail of the outputs depend on the different inputs you provide:

* **PT network** *(mandatory)*: Public transport network, links and nodes. There are different ways to generate it:
    * By drawing it directly in the platform (under the Maps tab)
    * By downloading it from a GTFS from the open-source mobilitydata database directly in the app using the GTFS importer micro-service.
    * By uploading it from your computer (pt links and nodes are required to be stored in two seperate geojson files)

    See section 04_pt_network for more detail on how to upload and edit PT networks, and on different properties to fill when defining the lines to compute indicators.

* **Paramaters** *(mandatory)*: Json file providing simulation parameters. You can modify the parameters in the Simulation Tab.

* **Road network** *(optional)*: Road network, links and nodes. Providing a road network is optional; however, including it can significantly enhance your analysis, especially if your model incorporates public transport modes that utilize the road network (bus, express bus) by allowing to create bus lines that follow actual roads and adapt their speed. Road network can be:
    * Downloaded directly from OpenStreetMap database through the OSM import microservice for a chosen area. 
    * Uploaded directly from your computer
    
    In this documentation, please refer to section **How to use the interface / Download Network** for more detail on how to upload road networks and section **How to use the Interface / Edit roads** for more detail on how to edit road networks.

* **OD matrix** *(optional)*: For additional results regarding modal share estimations and flow estimates, you can provide an OD matrix in geojson format. The requirements in terms of format are as follows:

    * "geometry": LineStrings origin (first point) to destination (last point)
    * "origin": origin point id (will be atributed to the position of the first point of the linestring geometry)
    * "destination": destination point id (will be attributed to the position of the first point of the linestring geometry)
    * "volume": volume field

    Load the file in the OD Matrix section of the inputs tab. Alternatively, you can draw the OD-matrix in the OD subsection under the Maps tab.

* **Zonage** *(optional)*: file containing socio-economical data and used to compute network, line and station coverage indicators. To compute coverage, you must provide a zoning file named zonage.geojson. Here is the main information it must include:

    * "geometry": column giving zone shapes (crs 4326)
    * "population_density", "jobs_density"... : Densities for each item whose catchment should be computed (item1, item2...) in the format item1_density, item2_density... expressed in item/km². Relevant items include population, jobs, medical facilities...

    For population and jobs, a zoning file can be easily generated from a SYSMAP export, using the script hosted here: https://gitlab.com/systra/dca/python-snippets/-/snippets/4840233.

    Once your zoning file is ready, load it into the additional inputs section under the inputs tab.

* **Style requirements** *(optional)*: Defines the symbology of the output GIS layers. You can download style requirements from a TRANSIT-DCA project and reuse them in your own project.