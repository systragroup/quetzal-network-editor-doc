# Public transport network

## Overview
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

## Add a New Public Transport Line
In order to add a new trips, go to the *«PT»* tab on the left panel and click on the new **NEW LINE** button. Then, fill in the properties of the new line : you may want to give it a name, a short name and a route type (such as bus or subway). Then, hit the **SAVE** button.

Once your line is created, click anywhere on the the map to start drawing. Once the line is complete, click on the **CONFIRM** button to save it, you can always edit the properties and the itinerary of your line later.

![Alt text](/network_editor/new_line.png)
![Alt text](/network_editor/new_line_2.png)
![Alt text](/network_editor/new_line_3.png)

::: tip :bulb: TIP
Once you have created a trip for one direction, you can duplicate it and reverse it to create the return trip. For bus trips, you may have to adjust a litle bit the return trip to avoid one way roads.
:::

![Alt text](/network_editor/duplicate_line.png)

## Edit itinerary of a trip

### Select a trip

To edit the itinerary of a trip, find it in the left pannel and click on its name (you can use the filters and the search function to find it, to use the search function, type the first few letters of your trip).

Alternatively, you can hover on the map and right click on your trip, a popup will open and you can chose which trip you want to edit.

![Alt text](/network_editor/select_trip.png)
![Alt text](/network_editor/search_trip.png)

### Options
By default, the trip is created «as the crow flies», straight lines connect the stations. Othe options are available.
* Edit Line Geometry
* Stick Nodes on Existing Nodes
* Follow Roads
#### Edit Line Geometry
with this option, you can place «anchors» on your trip in order to define more precisely the geometry of the trip : left click to add an anchor point, right click to delete one. This points are not stops, passengers cannot board nor alight there.
![Alt text](/network_editor/edit_line_geometry.png)

#### Stick Nodes on Existing Nodes
When this option is activated, the other public transport stops are displayed. When you edit the itinerary of *your_trip*, you can click on the existing node of *another_trip*, then *your_trip* will also stop at this node.   
![Alt text](/network_editor/magnet.png)

#### Stick Nodes on Existing Nodes
when this option is activated, the geometry of your trip will follow the roads for all the new stops you add.

You can also click on *ALL* or *NONE* to map all your trip to the road network or revert to straight lines (none).
![Alt text](/network_editor/trip_routing.png)


## Edit the properties of a trip

On the left panel, you can filter and search the trips. Then you can duplicate them, edit their properties and edit their timetables.

If you click on **EDIT PROPERTIES**, you will edit the properties of all the links of your trip. It is relevant for the headway for instance or if you want to set a constant speed on all the trip.

![Alt text](/network_editor/new_line_4.png)