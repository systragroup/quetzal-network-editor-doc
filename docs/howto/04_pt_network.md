# Public Transport Network

## Overview

Under the Map tab, you can view and edit the Public Transport (PT) network:

- Filter by agency_id, route_type, trip_id, etc, ...

![Alt text](/networks_4.png)

::: tip 💡 TIP
You can use filters to hide/show groups of lines or hide/show individual line.
:::

Following functionalities are currently available in the Public Transport Editor:

- Create a new line
- Duplicate a line (or create a reverse line)
- Edit the line properties
- Edit a line geometry
- Create or edit schedules

![Alt text](/networks_5.png)

## Create a New Line

In order to add a new line, click on the new **NEW LINE** button. Then, fill in the properties of the new line. You may want to give it a name, a short name and a route type (such as bus or subway). Then, hit the **SAVE** button.

Once your line is created, click anywhere on the the map to start drawing. Once the line is complete, click on the **CONFIRM** button to save it, you can always edit the properties and the itinerary of your line later.

![Alt text](/network_editor/new_line.png)
![Alt text](/network_editor/new_line_2.png)
![Alt text](/network_editor/new_line_3.png)

You can add a stop in the middle of a line with a left click on a link. You can also cut the line with a right click on a node > **CUT BEFORE NODE** or **CUT AFTER NODE**. 

![Alt text](/network_editor/cut_line.png)

::: tip 💡 TIP
Once you have created a line for one direction, you can duplicate it and reverse it to create the return line. For bus lines, you may have to adjust a litle bit the return line to avoid one way roads.
:::

![Alt text](/network_editor/duplicate_line.png)

## Edit an Existing Line

### Select a Line

To edit the itinerary of a line, find it in the left pannel and click on its name (you can use the filters and the search function to find it). You can also use the search bar.

Alternatively, you can hover over the map and right-click on your line. If multiple lines are overlaid, a popup will open, allowing you to choose which line you want to edit.

![Alt text](/network_editor/select_trip.png)
![Alt text](/network_editor/search_trip.png)

## Editor Options

By default, when creating or editing a line, the geometry is created «as the crow flies», straight links connect the stations. Following options are also available:

* Edit Line Geometry
* Stick Nodes on Existing Nodes
* Follow Roads

![Alt text](/network_editor/options.png)

### Edit Line Geometry

With this option, you can place «anchors» on your line in order to define more precisely the geometry : left click on the line to add an anchor point, drag them wherever you want, right click to delete one. This points are not stops, passengers cannot board nor alight there.

![Alt text](/network_editor/edit_line_geometry.png)

### Stick Nodes on Existing Nodes

With this option, the other public transport stops are displayed. When you edit your line, you can move a node over an existing node of another line to re-use that node for your line. 

![Alt text](/network_editor/magnet.png)

### Follow Roads

With this option, the geometry of your line will follow the roads network (if provided) between all the new stops you add.

You can also click on *ALL* or *NONE* to map all your line to the road network or revert to straight lines (none).

![Alt text](/network_editor/trip_routing.png)

## Edit Links and Nodes Properties
While editing a line, you can right click on a link to edit its propoerties. You can also do the same on a node to edit its propoerties. 

## Edit Line Properties

If you click on **EDIT PROPERTIES** in the side panel, you will edit the properties of all the links of your line (or selected group). It is relevant for the headway for instance or if you want to set a constant speed on all the line.

![Alt text](/network_editor/new_line_4.png)

## Create or Edit a Schedule

By default, new lines are frequency-based, defined by the headway in the line properties. You can convert any line to be schedule-based by selecting **CREATE SCHEDULE** in the **EDIT PROPERTIES** form.

![Alt text](/network_editor/create_timetable.png)

When creating a schedule, a single trip is generated with a starting time of **08:00:00**, travel times based on links *time*, and a default dwell time of 0 seconds. From the schedule editor, you can:

- Edit the schedule times (Departures and Arrivals) at each stops
- Select the station label for the schedule graph
- Create a new trip
- Delete a trip
- Select a trip to edit

![Alt text](/network_editor/schedule_1.png)

When creating a new trip, specify a start time. The travel times from the links and a default dwell time of 0 second will be used to compute the schedule.

![Alt text](/network_editor/schedule_2.png)
![Alt text](/network_editor/schedule_3.png)