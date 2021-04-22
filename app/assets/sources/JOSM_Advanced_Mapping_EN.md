![](https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_mmLogo.png)

# Advanced Mapping Using JOSM

![](https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_mapathon.png)

## Pre-Mapping Setup

First you should download JOSM from [https://josm.openstreetmap.de/](https://josm.openstreetmap.de/)  -- there are a few options for download, but JOSM.jnlp generally works well. 

Start up JOSM. You may need to right click and pick "Open" the first time you run it. You may also need to go to Preferences->Security to be able to open the file. **It may prompt you to update your Java software, go ahead and do that.**

When JOSM opens, you'll see a gray screen with some news and updates and a number of buttons. We'll want to add some plugins including the building_tools plugin to help map more efficiently.

To add plugins, click the button that looks like two sliders - that's the preferences window. It can also be accessed in the menu under "Edit" or by pressing `F12`.)

![](https://arcmaps.s3.amazonaws.com/share/validationPictures/PreMappingOverview.png)

In the Preferences window, the fourth button down looks like a puzzle piece, that's the Plug-In menu. Click it. (On some computers these buttons are very small.)

![](https://arcmaps.s3.amazonaws.com/share/validationPictures/PreMappingplug.png)

Now search for `buildings`. You'll see one called `buildings_tools`. Check its box then click `OK` at the bottom of the screen. It will download, and you'll need to restart JOSM.

![](https://arcmaps.s3.amazonaws.com/share/validationPictures/PreMappingBuildings.png)

We suggest you also download the below plugins as well. They will help you with your mapping/editing. There are plenty more plugins that you can explore [here](https://josm.openstreetmap.de/wiki/Plugins).

 - **auto_tools** Automatic tools to help on common issues
 - **building_tools** Tools for simple drawing of rectangular or round/circular buildings
 - **FastDraw** Fast drawing ways by mouse
 - **imagery_offset_db** Database of imagery offsets: share and acquire imagery offsets with one button
 - **mapwithai** Allows the use of MapWithAI data
 - **markseen** Displays areas of the map that have been viewed (useful when validating or reviewing an area without missing a spot)
 - **opendata** Eases analysis of geographic data from various open data portals
 - **scripting** For automating small tasks for which no dedicated plugin is available
 - **terracer** Helps create terraced buildings (rowhouse, townhouse)
 - **utilsplugin2** Several utilities that make your life easier

There are a few other settings we need to change also.

Click the "Preferences" button again. The second button looks like two computers. That's the connection settings.

![](https://arcmaps.s3.amazonaws.com/share/validationPictures/PreMappingComputers.png)

Make sure you're logged in with your OpenStreetMap username and password.

Then towards the bottom of the screen, there's a button that looks like a remote control. Click that and make sure "Enable Remote Control" is checked. This will let the Humanitarian OpenStreetMap Team Tasking Manager use JOSM to download your task.

![](https://arcmaps.s3.amazonaws.com/share/validationPictures/PreMappingRemote.png)

![](https://arcmaps.s3.amazonaws.com/share/validationPictures/PreMappingRemoteSettings.png)


## Getting Started

**Understanding your project**

From the [HOT Tasking Manager](http://tasks.hotosm.org), choose a project to map. Before you begin mapping, you should understand the goal of the project by reading its "Description" and "Instructions" tabs. The description will be on the project's main page while the instructions can be read after pressing the `Contribute` button. This will tell you what features you are to map, how to tag them, what imagery to use and any other considerations from the Project Manager. Every project is unique and it is important to follow the Project Manager's instructions carefully to ensure that the area is mapped consistently. Here is an example of the Description and Instructions for one task:

![](https://arcmaps.s3.amazonaws.com/share/validationPictures/UnderstandingYourProject1.png)

**Opening Task in JOSM**

If it's not already open, open JOSM. On the project overview page, ensure that you have "JOSM" selected in the Editor dropdown menu before selecting a task to map. You can change your default editor in the settings page of the Tasking Manager.

![](https://arcmaps.s3.amazonaws.com/share/validationPictures/OpenMappingTask1.png)

If imagery loads up automatically, you are ready to map. If not, JOSM will display a black background. Check the project instructions and enable the correct imagery layer from the "Imagery" dropdown menu, found along the top of the JOSM editor.

You'll notice that the task boundary is now indicated by a gray box surrounded by a hatched area. This has replaced the pink border that you might be familiar with from the iD Editor. Avoid mapping in the hatched areas unless a feature extends into multiple tasks. You can always lock and map the adjacent task after you have completed your square.

![](https://arcmaps.s3.amazonaws.com/share/validationPictures/OpenMappingTask2.png)


## JOSM Basics

**Navigating JOSM**

Apart from the top menu bar, there are four main areas of the JOSM editor: two rows of icons along the left and the top of the window with frequently used tools and shortcuts; a centre area for mapping; and a sidebar on the right side of the window. If you cannot view the map or side panels, you must first download map data using "Download data..." in the "File" menu or by pressing `Ctrl+Shift+Down`. You can then load imagery by opening the "Imagery" menu along the top of the window and selecting the imagery you would like to use.

![](https://arcmaps.s3.amazonaws.com/share/validationPictures/NavigatingJOSM1.png)

The icons along the top of the editor are a configurable quick access selection of tools that are also available from the dropdown menus above it. The icons on the left-hand side of the window are split into two groups. The upper icons are all related to selecting different edit modes, and the lower ones toggle the visibility of the windows on the sidebar on the right. At a minimum, make sure that the "Layers" and "Tags/Memberships" windows are visible on the right hand side.

The centre area of the editor is where the geometry of the spatial information can be viewed and edited. If you already have data loaded into JOSM, you can navigate it by zooming with your mouse wheel and pan around the map by right-clicking and dragging.

The "Layers" window shows you the OSM data, boundary and imagery layers. You can move a layer in the stack by dragging it, or you can toggle the visibility by selecting the small eye icon preceding the layer name. You'll also notice a green tick next to the OSM data layer, this means that layer is active and editable - this can be toggled, which is useful when working with multiple data layers.

The "Tags/Memberships" window will show you the tags of an object once it is selected. This is where you can change the tag of an object. 

For more information on the basic functions and operations of JOSM, please refer to the [JOSM - Detailed Editing](learnosm.org/en/josm) guide created and maintained by learnOSM.

**General Mapping Guidance**

To **trace a new feature** in JOSM, activate the "draw nodes" tool by selecting `A`. Unlike with the iD Editor, you do not have to distinguish between point, line and polygon tools - this tool will draw them all. To draw a point, double-click. To add a line, click once until you reach the end of the feature and double-click on the last point. To draw a polygon, trace the feature by single-clicking and double-click on the first point to close the shape. 

To **add tags** to your newly drawn feature, be sure that it is selected - enter "Select" mode by pressing `S` and click on the feature. When it is selected, press the "Add" button in the "Tags/Memberships" menu along the right of the screen. Unlike in the iD Editor, you will have to select two parts to each tag: the "key" and the "value". You will see these boxes in the "Add Tag" window. All tags have a key and a value but it may not have been as obvious in the iD Editor. For example, the generic "building" tag is written as `building=yes` where "building" is the key and "yes" is the value. To determine how to properly tag a feature, refer to the [OpenStreetMap Wiki](https://wiki.openstreetmap.org/wiki/Main_Page) and search for your feature. The "Tags/Memberships" menu can also be used to edit existing tags on features.

It is fairly common to come across previously mapped features that need a bit of an adjustment. JOSM has several powerful tools that make this very effective. The extrude tool, activated with `X` can be used to shorten or lengthen the edges of existing buildings, simply drag an edge with the tool active. If you see any un-squared buildings these can be fixed by selecting them and hitting `Q`. Selected buildings can also be rotated by holding `Shift+Ctrl`, and resized by holding `Ctrl+Alt`. Buildings can be disconnected from other features by hitting ‘G’ with the building selected (this "un-glues" connected nodes, which is very useful elsewhere as well!). 

It can be helpful to **adjust the visibility** of your imagery layer(s) in JOSM. Select an imagery layer from the Layers window and click the icon at the base of the window indicated below:

![](https://arcmaps.s3.amazonaws.com/share/validationPictures/GeneralMapping.png)

The visibility of the layer can then be adjusted with a series of sliders. Increasing the Gamma tends to make features standout from the landscape. 

When mapping a HOT Tasking Manager project, stick with the imagery layer that you are told to use in the project instructions. However, it is good practice comparing this to other imagery sources when you are mapping. This is particularly easy in JOSM. Additional layers can be added by selecting them from the "Imagery" menu and their visibility can be toggled on/off using the eye icons in the Layers window.

**JOSM Shortcuts**

Basic:
- `S` = selection tool
- `Esc` = deselect all
- `Shift+U` = unselect nodes
- `Delete` = delete selected object(s)
- `A` = add nodes tool
- `M` = merge nodes
- `G` = unglue nodes
- `M` = merge nodes
- `C` = combine two sections of way into one
- `P` = splits a section of a way
- `Shift+Ctrl` = rotate object
- `Ctrl+Alt` = resize object

Handy for drawing buildings:
- `B` = enable building_tools plugin
- `Alt+R` = set building tool to rectangle
- `Alt+Z` = set building tool to circle
- `Q` = square selected polygon
- `X` = extrude tool
- `Shift+J` = merging overlapping polygons

Intermediate techniques:
- `Ctrl+B` = create Multipolygon
- `Shift+I` = add nodes at intersections of ways
- `Ctrl+Shift+G` = replace geometry
- `Shift+R` = paste tags from previous selection

FastDraw:
- `Shift+F` = enable FastDraw plugin
- `Space` = draws a single node, hold and move mouse to keep drawing nodes (while using FastDraw)
- `Backspace` = delete last node (while using FastDraw)
- `Q` = open FastDraw settings (while using FastDraw)


Some of these shortcuts will only work when the needed plugins are installed (e.g. utilsplugin2) More shortcuts can be found here: https://josm.openstreetmap.de/wiki/Shortcuts

**Saving Your Edits**

Like editing in the iD Editor, you need to make sure that you frequently save your edits. Select the hard disk icon with an upwards green arrow (or `Ctrl + Shift + Up`) to display the Upload popup. Here you can alter the changeset comments and execute the upload by selecting "Upload Changes" or hitting `Enter` on your keyboard.

## Mapping Buildings

**Buildings Tool Plugin**

To map a **rectangular building**, press `B` on your keyboard. This activates the `buildings_tool` plugin that you downloaded and installed in the preferences earlier. Left click on the corner of a building and keep your mouse button pressed down. Move your pointer along the longest edge of the building and release at another corner. You are then free to set the building depth, adjust the depth until it fits and left click to finish the shape. The building tool automatically squares and tags your buildings - notice how much quicker that was than using the iD Editor?

This plugin will draw rectangles parallel to any other feature on the map that you have selected. This is very useful if you are drawing many buildings that are constructed in alignment with a road. All you have to do is select the road feature, press `B` and draw.

You might have found a **circular building**. First make sure you are in building mode, if not hit `B`. Now switch your building tool to circle mode by selecting `Alt+Z` on your keyboard. Trace the diameter of the circular building and it will automatically create a perfect tagged circular building. Switch back to rectangle building mode by selecting `Alt+R` on your keyboard. 

You can change the tag that is applied to the shapes with this tool by opening its advanced settings. In the top toolbar, go to "Tools" then "Set buildings size and shape" and select "Advanced..." In this window, you can change the tag or add additional tags to be applied. Always keep in mind the tagging instructions outlined by the Project Manager if mapping through the HOT Tasking Manager.

**Complex Shapes**

You might have a building that is an **unusual shape** like a L, T or U rather than a simple rectangle. Here are two ways to go about drawing these features: using the extrude tool and combining overlapping shapes. The best way of mapping for you will depend on the building complexity and your preferences. 

To map with the Extrude tool," first draw a rectangle using the `buildings_tool` plugin (press "b") along the longest edge of the building. Then press `X` on your keyboard, this activates a powerful tool in the editor called the Extrude tool. Double click to add a point at the edge of your rectangle where the building extends. Now drag the edge you want to extend until it fits the footprint.

![](https://arcmaps.s3.amazonaws.com/share/validationPictures/ComplexShapes1.png)

Another way to map complex buildings is by combining multiple simple shapes. This is particularly useful if a building has a round feature or is too complex to be properly orthogonalized with the `Q` shortcut. Draw as many shapes as necessary to complete the building. Ensure that individual shapes are orthogonalized or made circular and that they all overlap with at least one other shape. Using the `buildings_tool` plugin is very helpful for this step, especially when having the first shape selected so that the proceeding shapes are drawn in alignment. When all shapes are drawn, select them all and use the "join overlapping areas" tool with the shortcut `Shift+J`. You may have to do a bit of cleanup after the join to remove unwanted nodes.

![](ComplexShapes2.png)

Another tip for drawing complex buildings is to first trace along the roof of the building where the shape is more visible as seen in the above example. After you're satisfied with the shape, move it by dragging it and align it properly with the building footprint.

For **buildings with courtyards**, you will need to create a multipolygon. There are two easy ways to do this. You can draw segments of overlapping buildings leaving a space in the middle for the courtyard and combining them with `Shift+J` to merge the overlapping buildings into one. The building color will change to purple which indicates that you have successfully created a multipolygon.  

![](https://arcmaps.s3.amazonaws.com/share/validationPictures/ComplexShapes3.png)

The other way to do this is by mapping the outside and inside as two separate features. Once you are satisfied with their shapes, select them both and create a multipolygon. In the top toolbar, select "Tools" then "Create Multipolygon" or use the  `Ctrl+B` shortcut. The building color will change to purple which indicates that you have successfully created a multipolygon. The inner shape should not be shaded in and should look like a hole in the building.

![](https://arcmaps.s3.amazonaws.com/share/validationPictures/ComplexShapes4.png)

## Other Useful Plugins
### utilsplugin2
By adding utilsplugin2 to JOSM, you enable a number of handy features. Here are some of our favourites:

**Add nodes at intersections** `Shift+I`: this function allows you to add nodes where selected lines intersect. This is very useful if you run into data from new mappers who forgot to connect overlapping features such as footpaths. Rather than manually adding and gluing additional nodes on two overlapping lines, use this tool to do it automatically.

**Replace geometry** `Ctrl+Shift+G`: this function allows you to redraw a feature that has been drawn poorly or its real-life shape has been updated while keeping the original feature's tags and history. This is useful when you run into cases where it would be faster to redraw a feature than it would be to edit a feature. It is important to maintain a feature's history when possible so that the original users and changeset comments can be preserved. By using this function, you can be sure that you don't lose important local information and tags when you are trying to improve the geometry of a feature.

**Paste tags from previous selection** `Shift+R`: this function allows you to paste the tags onto a selected feature from the feature you had selected previously. This is very useful if you quickly want to apply multiple tags from one object to another. Simply select the feature with the tags you want to transfer then select the feature to which you want to paste the tags and press `Shift+R`.

**Unselect nodes** `Shift+U`: this function allows you to quickly unselect the nodes from your current selection. This is very useful if you would like to edit the tags on multiple polygons that you have selected with the select tool (`s`). Without unselecting the nodes from your selection, if you were to add a new tag, it would be applied to all elements including the nodes rather than just the polygons. 

More functions from this plugin can be found on its page in the [JOSM Wiki](https://josm.openstreetmap.de/wiki/Help/Plugin/UtilsPlugin2) or the [OSM Wiki](https://wiki.openstreetmap.org/wiki/JOSM/Plugins/utilsplugin2).

### FastDraw
This plugin greatly eases the digitization process for large, complex shapes such as lakes and woods. By using FastDraw, you can trace a shape and drop nodes without having to click your mouse button. The nodes will be drawn according to a set distance. 

To start using the plugin, press `Shift+F`. While there are many ways to use the tool as outlined in the [Wiki](https://wiki.openstreetmap.org/wiki/JOSM/Plugins/FastDraw), one easy way to begin is to move your cursor to where you want to start drawing, hold down the spacebar and drag your cursor around the shape. If you want to stop dropping nodes, release the spacebar until you are ready to trace again. You can press the spacebar once to drop a single point along the way. Press `Backspace` to delete the most recently drawn node. When you're finished drawing a shape, press `Enter`.

![](https://arcmaps.s3.amazonaws.com/share/validationPictures/FastDraw1.png)

The way will be simplified (extraneous nodes removed) and turn orange. If the shape has been oversimplified, use the up arrow `↑` to add more nodes. If the shape has too many nodes, use the down arrow `↓` to remove nodes. It is important to reduce the number of nodes a feature has in OpenStreetMap to limit the required memory to store the data. When you are happy with your shape, press `Enter` for a 2nd time and your shape will be created. To draw another shape with the plugin, press `Shift+F`.

![](https://arcmaps.s3.amazonaws.com/share/validationPictures/FastDraw2.png)

To access the FastDraw settings menu, press `Q` when the plugin is active (i.e. after pressing `Shift+F`). Within this menu, you can modify the number of points drawn while you drag your mouse along the map. In addition, you can add the tags you'd like to be applied to your feature under "Add auto tags" if you are drawing multiple features in a row. You can also select "Draw closed polygons only" if you are drawing polygons instead of lines to make the digitization quicker.

![](https://arcmaps.s3.amazonaws.com/share/validationPictures/FastDraw3.png)

For more information on the FastDraw plugin, see its page in the [Wiki](https://wiki.openstreetmap.org/wiki/JOSM/Plugins/FastDraw).

### Terracer
The Terracer plugin allows users to quickly create a terraced building (rowhouse, townhouse). It works by separating a large polygon delineating the entire structure into individual units delineating single homes within the larger building. [Terraced buildings](https://en.wikipedia.org/wiki/Terraced_house) are made up of several attached dwellings that share side walls. They often have separate entrances and addresses or unit numbers. There are at least 2 ways these structures can be mapped in OSM: as one large building tagged as `building=terrace` with individual nodes for each unit tagged with its address; or as several attached polygons sharing at least two nodes tagged as `building=house` with other tags to describe individual units (address etc.).

The second method of drawing these buildings is preferred as it illustrates more detail to the locations of the individual units. The easiest way to map terraced homes with this method is to use the Terracer plugin and described below. However, keep in mind that allough this is the preferred method of mapping these structures, it should only be done when the mapper can confidently delineate the individual units, knowing that they are of equal size. If the mapper cannot confirm this from local knowledge or street imagery, it may be best to map using the first method and indicate individual units with nodes tagging entrance and address information. 

To use the Terracer plugin, first trace the outer outline of the entire terrace (the extent of all units). This can be done easily with the building_tools plugin installed and pressing `B`. Be sure that your shape is a quadrilateral (4 sides) and that it is aligned properly with the imagery. Rotate `Shift+Ctrl`, resize `Ctrl+Alt` and move the shape as needed until satisfied. 

![](https://arcmaps.s3.amazonaws.com/share/validationPictures/Terracer1.png)

Next, you are ready to use the Terracer plugin and break the shape up into individual, attached units. With the polygon selected, press `Shift+T` to enable the plugin and launch the "Terrace a house" dialog box. In this dialog box, indicate how many units you would like to be created in the "Segments" line. This example shows how addresses can be added to the units by indicating the lowest unit number (1) and the highest (7). 

![](https://arcmaps.s3.amazonaws.com/share/validationPictures/Terracer2.png)

Based on the interpolation method chosen in the dialog box, the plugin will fill in the units' address tag according to those numbers and the number of segments/units. The "Even/Odd" interpolation method will skip every other address number whereas the "All" method will use every number. Press `OK` and the plugin will perform its actions. 

![](https://arcmaps.s3.amazonaws.com/share/validationPictures/Terracer3.png)

If you do not like the results, press `Ctrl+Z` to undo and try the plugin again. Ensure that the new polygons are tagged appropriately (e.g.`address=house`).

## Other Resources
- Imagery offsets (HOT webinar)
- [JOSM Conflict Resolution](https://learnosm.org/en/josm/josm-conflict-resolution/) (LearnOSM)
- Filters (HOT webinar)
- [JOSM Relations](https://learnosm.org/en/josm/josm-relations/) (LearnOSM)
