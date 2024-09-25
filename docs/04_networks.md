---
layout: doc
aside: false
---

# A) Download networks

## Road network

1. Go to the Microservices tab
2. Drag the map over the area to download
3. Select the types of links to download
4. Download

![Alt text](/networks_1.png)

## Public transport network

**Zip** 

1. Go to the Microservices tab
2. Go to GTFS importer
3. Upload GTFS files
4. Select date
5. Convert GTFS to Quetzal links and nodes

![Alt text](/networks_2.png)

**Web**

1. Go to the Microservices tab
2. Drag the map over the area of interest
3. Check the agencies to download\*
4. Download

<small> If an error message appears during download, one of the selected agencies may be the cause; please try again by changing the agencies selected to find the faulty one. </small>

![Alt text](/networks_3.png)


# B) Visualize and edit networks

## Public transport network

Under the Maps tab, you can:

- Filter by agency_id, route_type, trip_id, etc, ...

![Alt text](/networks_4.png)

- Duplicate a link 
- Create a new line
- Edit the schedules
- Edit a line geometry by clicking on the link name
- Stick nodes on existing nodes
- Follow roads

![Alt text](/networks_5.png)


## Road network

Under the Maps tab, you can:

- Modify road links individually by right clicking on the road link to edit
- Filter by anyway field desired and edit every link of a type 
- Select multiple road links by selecting an area on the map (right click) and edit selected info

![Alt text](/networks_6.png)


>[!TIP]
>You can create a group field in your road links that you can modify when you multiple select road links on the map. This will allow you to easily identify the links you edited group by group and later filter the links by group and edit them again.

