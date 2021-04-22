![](https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_mmLogo.png)

# How to Validate Mapping

![](https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_mapathon.png)

## Background

Validating data is an important part of OpenStreetMap and humanitarian mapping. OpenStreetMap is built by volunteers of all skill levels; coming from different countries, backgrounds and experiences. While having such a variety of mappers is a benefit to the project, it can also result in inconsistent mapping. Inconsistencies are particularly prevalent when beginner mappers work on small, isolated sections of the map in unfamiliar countries - such is often the case on the Humanitarian OpenStreetMap Team's (HOT) [Tasking Manager](https://tasks.hotosm.org/). 

 Validators are experienced mapping volunteers who review the work of others on the HOT Tasking Manager. It is up to the validators to:
 - Check that **OSM standards are met**. Data should be accurate, complete and consistent.
 - Ensure that mapping projects are completed **as intended by the Project Manager**. This includes preserving and improving local data. 
 - Grow the mapping community by providing support and **positive, constructive feedback** to new mappers

The specific requirements of each mapping project on the Tasking Manager vary as well as regional OSM tagging protocols. Because of this, it is difficult to put together a comprehensive guide for validators that covers everything that needs to be checked. As with mapping, validators all have their own preferences and workflows for reviewing data. Keep the above responsibilities in mind. This document is intended to be a general guide; a place to start and learn new tips. Engage with Project Managers, the validation community on [HOT's Slack](https://slack.hotosm.org/) and continue to learn and improve your skills.

 Compared to mappers, validators are a much smaller group yet play an integral part of the humanitarian mapping process. Thank you for your contributions!

### Prerequisites
Before validating the work of others, you should be an experienced mapper yourself. It is important to be able to:
- Understand the differences between high- and low-quality mapping
- Know how to improve the data efficiently without losing local information
- Recognize the different architectures and tagging protocols of various countries. Until you are comfortable mapping in a certain country, you should not feel comfortable validating in that country.
- Feel confident using the necessary mapping platforms such as the Tasking Manager and the [Java OSM Editor (JOSM)](https://josm.openstreetmap.de/)

## General Workflow
### Selecting a project
From the [HOT Tasking Manager](http://tasks.hotosm.org), choose a project to validate from the "Explore Projects" page. The progress of each project is marked by a bar visible at the bottom of each project card. The red portion indicates the amount validated, the dark grey portion indicates the amount mapped and the light grey portion indicates the amount left to be mapped. When you click on the project, you can hover over each section of the progress bar for exact percentages.

![](https://arcmaps.s3.amazonaws.com/share/validationPictures/ValidGettingStarted1.png)

Notice on the project's main page under "Teams & Permissions" that only certain users can map and validate a project. These permissions are set up by the Project Manager. If you do not meet the experience level specified or are not a part of the listed team, you cannot contribute to the project. 

![](https://arcmaps.s3.amazonaws.com/share/validationPictures/ValidGettingStarted2.png)

Continue mapping and building your skills until you meet the requirements. If you feel ready to join HOT's Validator Team, request to join it by filling out [this survey](http://bit.ly/HOTValidators). You can check your user experience level on the "My Contributions" tab of the Tasking Manager. Click on "My Teams" to view your Team membership.

Before you begin validating, you should understand the goal of the project by reading its "Description" and "Instructions" tabs. The description will be on the project's main page while the instructions can be read after pressing the `Contribute` button. This will tell you what features you are to map, how to tag them, what imagery to use and any other considerations from the Project Manager. Every project is unique and it is important to follow the Project Manager's instructions carefully to ensure that the area is mapped consistently. Here is an example of the Description and Instructions for one task:

![](https://arcmaps.s3.amazonaws.com/share/validationPictures/UnderstandingYourProject1.png)

### Opening Tasks

Opening Tasks to validate them follows a similar process to that used for mapping. If you would like to validate a task using JOSM, if the program is not already open, open it and ensure it is selected as the Editor in the drop-down menu. Multiple tasks can be selected to open at once by holding `Ctrl` and clicking multiple tasks. When the tasks are opened, you can begin validating!

### Reviewing Mapping

As mentioned previously, there is a wide variety of mapping projects and OSM standards. It is difficult to list every consideration a validator must make when reviewing data. However, here is a good place to start with things that should be considered:

- Spatial accuracy: Are features in the correct place, are there overlapping buildings, are the buildings square, etc.?
- Tagging accuracy: Are features tagged appropriately?
- Completeness: Are all the features mapped as described in the Tasking Manager project instructions?

**Specific advice and tips on validation will be covered in the next section of this document.**

Depending on your preferences and the urgency of the mapping project, you may wish to fix some or all of the mapping issues you have found while reviewing, if any. Consider how easily the issues can be fixed by a beginner mapper. 

If there is a mapping issue that an intermediate or advanced JOSM user can fix easily, it may be best resolved during validation. For example, say that a mapper mistakenly gave several buildings the tag `name=house`. That tag can quickly be modified by a validator using JOSM's search function but it would take a beginner mapper much longer to fix in the iD Editor. If you see an opportunity where beginner mappers can support in data cleanup - where many buildings need to be squared, for example - you may wish to leave those fixes up to others and spend more time validating other tasks. Some validators find it useful to take notes while they review mapping on the issues they address so they can provide more constructive feedback to the user.

You should also check to see if the project is still being worked on. If the last person to edit the project did so many months ago, you might be better off finishing what's left and validating. The same goes if the user whose work you are validating has not used OSM in many months. You can view project activity on the main page of the project. Once you open a task, you can view it's activity within the "History" tab of the sidebar on the right. Individual user activities can be found by clicking the user's username in this tab. You will be taken to their Tasking Manager profile. If you click on their username again on this page where you see the OSM symbol, you will be taken to their OSM profile. 

![](https://arcmaps.s3.amazonaws.com/share/validationPictures/ValidGettingStarted3.png)
 

### Closing Tasks and Providing Feedback

Once you have reviewed a user's mapped task, you can mark the task as being "well mapped" (validated and finished) or as "not well mapped" (invalidated and in need of more work). Whether you validate or invalidate, you should thank those who have worked on the square so far by typing the @ key on your keyboard and then their username.

You can see the list of people who have worked on the task below the history tab:

![](https://arcmaps.s3.amazonaws.com/share/validationPictures/ValidGettingStarted4.png)

There may have been many people who contributed, so make sure to thank them for their work, even if there are some errors or problems. This can encourage them to come back and map again. If you noticed errors, like any of the validation warnings we saw above or other things like buildings that weren't squared or roads that were missing, note that in the comment too, politely. This can help the mapper learn so next time they'll do a better job.

![](https://arcmaps.s3.amazonaws.com/share/validationPictures/ValidGettingStarted5.png)

Here is a sample message you can use:
>Added a few remaining buildings and roads. Thank you @Stanley1260 @Prinzvizzy @GeoAlex104 for mapping! Don't forget to square your buildings using the `Q` key

Another rule of thumb is that if you recognize a username from a previous square you validated or invalidated, you don't need to message them again - we don't want to send a ton of messages to the same people. So if you recognize a username from validating before, you can skip them in the message.

Then after you've left your comment, if everything is complete, select "Yes" under "Is this task well mapped?" and click "Submit task". Or select "No" if there are still things remaining before submitting. Now you can move onto another square.


## Validating Data Using JOSM
The next section of this document goes over detailed advice and tips for reviewing and cleaning data in JOSM. This is to be done when you have decided that you are going to validate and fix any issues in the data as opposed to marking the task as "Not well mapped", and leaving it to other mappers. 

### Issues and Errors to Look For

As mentioned previously in this document, it is difficult to create a comprehensive list of things to look for when validating a task. You must draw on your own mapping experiences and attention to detail while considering the specific project instructions from the project you are validating.

Here are some examples of common issues that require correcting:
- **Missing buildings**: If it's a building task and you find missing buildings, add them. 
- **Missing Roads** Similar to above, if it's a building task and you find roads that are missing, add them. 
- **Poorly Drawn Geometries** Buildings and other artificial structures are generally going to be rectangular or circular - or made of a combination of those shapes e.g. L-shaped. If you see a feature that is not drawn well to represent how you would expect to see the feature in real life, correct the geometry. Most often, this includes squaring the corners of rectangular buildings. [You can learn more about drawing buildings in JOSM here.](https://www.youtube.com/watch?v=DcKewl94jR4)
- **Misaligned to Imagery** Ideally, in OSM, data and imagery are aligned to a GPS track to properly georeference the information. This is not always possible - particularly at the start of remote mapping projects. Therefore, project managers will select imagery to which data should be aligned. If mappers use other imagery, their features may need to be selected and re-aligned.
- **Overlapping Features** Some features, such as buildings, never overlap in reality. This should also be true on a map. If features overlap or have nodes that are irregularly glued (e.g. one corner only), this should be fixed.
- **Improper Tagging** Refer to mapping project instructions for proper tagging requirements. Often project managers request that buildings are tagged with the generic `building=yes` as opposed to `building=house`. Correct this if features are drawn through the Tasking Manager (check object history for hashtags) but *do not correct if information is from local mapper*.
- **Incorrect Tagging** Occasionally, mappers will add incorrect tags to features such as `name=house`. This is often done out of confusion and should be corrected. Do keep in mind that although, uncommon, there may be unusual but completely correct tags from local mappers that seem strange to those from outside the community.

### The Validation tool

Many validators begin the review process by running the Validation tool in JOSM, which will automatically check the data you have open for suspected mistakes. This tool is especially useful for finding **geography** errors but may not be as useful for finding incorrect tags. Depending on the state of the data and individuals preferences, validators may decide to run this tool at the end of their workflow to see if they missed anything.

This tool runs automatically when you upload features into OSM. However, when it is run at that stage, it only assesses the features that have been edited in that session. It will not assess all of the features that have been downloaded. For example, if you download a neighbourhood and draw one new building, the Validation tool that runs upon selecting the upload button, will only look for errors in the new building not the entire neighbourhood. By running this tool outside of the upload window, it will evaluate all features. 

Activate the tool by clicking on the Validation tool button on the left side of JOSM. (This is unnecessary if the Validation panel is already open)

![](https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_validateIcon.png)



If you have features selected, the Validation tool will only check those features. Sometimes you may want to only check certain features, but for now we will check the entire file. To unselect all features, press the `Esc` key.

Click the "Validation" button on the panel. That will run a check for a number of potential errors.

![](https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_validateTool.png)

You will see a list of warnings appear (your list may vary):

![](https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_validateResults.png)

A new layer also appears on your Layers panel, showing where the errors are. You may find it convenient to hide this layer for now by clicking the eye icon next to the name. It's a bit easier to see your data with that layer turned off.

![](https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_Layers.png)

Let's look at a few of the warnings. Most of these we need to fix, but we can ignore "Unnamed ways" since we won't know these road names.

The rest though, we should look at. To zoom into an issue, click the dropdown then right click one of it and click "Zoom to problem" and it will highlight and zoom to the error.

![](https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_zoomToProblem.png)

Many times these are errors that we never would have caught without the Validation tool.

Usually the error name is pretty straightforward and easy to understand. If not, try asking on the mapper-support channel on the HOT Slack, which is free to join: [http://slack.hotosm.org/](http://slack.hotosm.org/)  

Some warnings, such as "Crossing waterway/highway," are not necessarily mistakes. This shows that the Validation tool is good at finding possible mistakes, but it requires someone to go and see whether the warning is important or not.

Once you fix an error, run the Validation tool again and it will disappear from the list. However, sometimes a fix can cause other problems, which is why it's important to run many times.

Some common issues you will see with the Validation tool on HOT tasks are untagged ways (a line or polygon that someone forgot to tag) and buildings overlapping other buildings or roads.

For many of the issues, the fixes are fairly easy: for overlapping buildings or roads, move the adjust to the correct location so it's not overlapping; for untagged ways add the correct tag. (NOTE: this is untagged ways or areas, not unnamed ways. We can ignore unnamed ways.)

### Finding Other Issues to Correct

There are also other issues that the Validation tool won't catch, so we'll have to fix them next.

After fixing all the errors from the Validation tool, we need to start browsing our square to find the other errors that the  tool won't catch but are also important. Some of these include (but are not limited to) things that are missing or in the wrong place, roads that are attached to buildings, and things that are not tagged properly. There are many ways to go about this step. Individual validators will have their own preferences and will often use a combination of techniques outlined below, such as using the Search Function and Todo List plugin. Figure out what works best for you!

The simplest way to go about this is to start in one corner, zoom in close so you can see the details of the imagery and begin to pan through your square and look for things that should be mapped according to the task instructions. 

One useful tool for panning across the task is the markseen plugin. This plugin will open the 
"Markseen Viewer" to show areas of the map that you've already reviewed.

![](https://github.com/risicle/josm-markseen/blob/master/screen_20170828.png?raw=true)

## Roads
If you are validating a roads task, there are a number of issues that might come up. There may be many roads that are missing or tagged incorrectly. Also, roads may be connected to things they should not be, like buildings.

If roads are missing in your task square, add them using the scheme mentioned in the task's instructions. If the task asks to map residential roads or small tracks, these are commonly missed. Sometimes people map roads as much bigger than they should be - marking something that should be residential, unclassified or even a track as something like a motorway or primary - you should fix those.

Another common issue with roads is naming them something incorrect. For remote mapping, we usually will not know what the name is, since we are not familiar with these areas. But sometimes people will mistakenly name roads "road" or add something else that is a description, not a name. The Name field should be a proper name like "Highway 1" or "North Avenue." To find all the named roads, click `Ctrl+F` and then type `highway=* name=*`

![](https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_searchHighway.png)

This will find all the roads that have a name. Click on each one to see what the name is and if it seems correct. If it's something descriptive like "road" or "dirt road" it may be incorrect, the mapper might have meant to tag it but changed the name by mistake. Remove it if it seems wrong. But be careful, we don't want to remove accurate data.

Road classification is also important. Sometimes remote mappers will tag roads as much more important than they should be. Consult the project instructions and description for how roads should be tagged.

If there are many motorway, trunk, primary, secondary and tertiary roads, especially in a rural area, the tags might be incorrect. These will appear bright colors like blue, yellow, orange and red. If you see those on your task, double check them. Maybe they should be something smaller like tertiary, residential or unclassified.

Roads should not connect with buildings, unless the road goes through the building, which is very rare and usually only seen in large cities.

Here's an example. The building on the right is attached to the road - see the slightly larger square where they are attached. That bigger square indicates a joined node.

![](https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_unglue.png)

To disconnect them, click the square, then click g on your keyboard, which stands for "unglue". Then click on one node and move it to where it should be. You may need to hit `Q` on your keyboard to square the building again.

### Using JOSM's Search Function
Searching in JOSM is a powerful way of reviewing data. It allows you to provide search terms, also known as queries, to select only the features that you want.

To access the search, go to Edit -> Search or press `Ctrl+F` on your keyboard or click the magnifying glass icon on the top of the JOSM window.

![](https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_search.png)

There are a great many types of query you can search here, and you can see details and examples in the search box itself and by clicking on the 'Help' button. Visit the [JOSM Search Function Wiki Page](https://wiki.openstreetmap.org/wiki/JOSM/Search_function) for more examples.

Notice the options in the top left corner to limit your search results based on the features you have selected. You can search from all features ("select"); "add to selection"; "remove from selection"; or "find in selection". This comes in handy when running consecutive  queries or when examining features within a desired area only.

**Searching for Edits made by Specific Users**

If you identify specific mappers who make the same mistake repeatedly, you can quickly identify all the features they have edited using the following search query:
>user:"*name*" 

>e.g. user:"OSMF Redaction Account"

This will select all objects that were last modified by that user. These features can then easily be added to the Todo List Plugin (more information below) to individually examine and track.

**Searching for Buildings to be Squared**

Polygons tagged as buildings with 4+ nodes often should be made square. These features can easily be found using the Search Function and squared in bulk. However, keep in mind that circular buildings will have more than 4 nodes and should not be squared. Therefore, we want to run a search query in a small section of the map that we can visually verify - such as that which is within view. To find these features, run the following search query: 
>building inview nodes:4-

That will find everything that is tagged as a building in your current view with 4 or more nodes.

![](https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_searchQuery.png)

They will all turn red on your screen. Click the `Q` key on your keyboard and that will square all of their corners.

However, be careful! If there are buildings that should not be square, this will make them square anyway. To make sure, hit undo and redo see if any buildings that are round or other shapes were changed by mistake. If so, go fix them to what they should be.

If you would like to easier sort through buildings one-by-one, add the results of the above search query to the Todo List plugin. This will let you quickly sort through the polygons to visually verify if they should be squared. More on this plugin below.

![](https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_undoRedo.png)

### Using Scripting to Identify Buildings that Should Be Squared

Another useful tool to find non-squared buildings is the following script.

Navigate to [this GitHub Repository](https://github.com/MikeTho16/JOSM-Scripts/). Look for `SelectNonOrthogonalBuilding.js` in the list and download it. Save it in an easy to find directory on your local computer. Open the scripting tab in JOSM and click 'run' and select the downloaded file. After selecting this, run the script. Now all buildings which meet the script's parameters will be highlighted red.You might check them in your task first, then press `Q` to square them all. Run the script again to see if there are any non squared buildings left. Check these first, because there may be instances where buildings are joined together on nodes. Unglue these nodes by pressing `G` and click again on the `Q` button.

### Object History

While editing features in an already mapped area, it is important to preserve local information - especially when you are mapping in an area with which you do not have first-hand familiarity. *Always check features for local information or tags before deleting them.* A good way to check is to open the object history. With a feature selected, press `Ctrl+H`. This window will tell you when the feature was first created, which users have created or edited it and the associated changeset comments. Compare the timing, usernames and changeset comments (hashtags) to that which you would expect to see from the Tasking Manager Mapping Project and Task history. If the edits occurred outside of the mapping project, the information could have been made by a local mapper. Remember: you can always improve map data without deleting features.

Example of edits from Tasking Manager mapping:
![](https://arcmaps.s3.amazonaws.com/share/validationPictures/ValidHistory1.png)

Example of edits from a local mapper:
![](https://arcmaps.s3.amazonaws.com/share/validationPictures/ValidHistory2.png)

## Todo List Plugin

Another useful plugin available in JOSM is the Todo List plugin. This plugin allows you to add features to a "To-Do" list, investigate that feature, mark it as done and automatically zoom to the next feature on the list.

To use the plugin, you need to download it from the plugins menu like you did for the buildings_tool. After adding it, activate it by pressing the Todo List icon on the tools menu. You should then see the Todo List panel open on the right side of the screen.

![](https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_todoIcon.png)

Using the JOSM search function above, you can select all of the features of a certain type that you would like to look at. Once they are selected, press the `Add` button on the Todo List panel. This will add all of your features to your list. Select the first feature from the list, ensure that it is correctly mapped, and then press `Mark` or the `]` key, which will move you on to the next feature.

The Todo List plugin is extremely helpful for beginner mappers who may not yet feel comfortable in scanning the image for features, and helps make sure that each individual feature is looked at. For more information, see the [Todo List Plugin Wiki Page](https://wiki.openstreetmap.org/wiki/JOSM/Plugins/TODO_list).

![](https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_todoPanel.png)

### Using Paint Styles

Paint styles are ways of changing how data is viewed in JOSM. You can use them to highlight certain things that may be incorrect, things that might not come up in the validation checks.

For remote and humanitarian mapping tasks, you often won't know names of features such as buildings and roads. JOSM Paint styles can highlight where those may have been added by mistake: buildings with names, buildings not tagged 'building=yes', roads with names, and roads that have a highway value in the name key (for example 'name=residential'). Sometimes people add what should be a description as the name, like "dirt road".

Like the validation warnings, the paint style doesn't necessarily show what is wrong, but it shows what you'll need to look at to see if it's wrong.

It's also important to make sure you don't delete existing accurate data. Maybe someone visited that place and added those names properly. But odds are something like "name=dirt road" or "name=building" is not correct.

To add the paint style, click on the Windows menu and go to Map Paint Styles... which will open a menu on JOSM:

![](https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_paintStyle.png)

Then click the paint style settings button at lower right.

Click the plus sign at upper right to add a new one.

![](https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_addStyle.png)

Type a name like Missing Maps Validation or whatever you'd like, and put https://github.com/MissingMaps/josm_styles/archive/master.zip in the URL field, and the paint style will appear in your Map Paint Styles window.

![](https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_styleName.png)

There are four colors you may see, plus some triangles, corresponding to the errors mentioned earlier:

- buildings with names are **yellow**
- buildings not tagged `building=yes` are **orange**
-	roads that are named are **green**
-	roads that are named for a description (like `name=residential`) are **red**
-	buildings that are connected to roads or other features are **red triangles**
-	buildings that are connected to other buildings are **orange triangles**

For example, you may see something like this:

![](https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_styleExample1.png)

Or this:

![](https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_styleExample2.png)

This paint style lets you go through and find these issues quickly and see if they should be fixed or not. Some of these might be OK, but you'll need to check to see if they are correct or not.

You can check the History of that object if you aren't sure if it's correct or not, by clicking on it then `Ctrl+H` that will show you who edited the feature before and might give a reason why they added a certain name or tag.

When in doubt, go with the existing data and tags.

Inline Validation is another useful map paint style. When you install and activate Inline Validation it will show a number of errors, if they are present. This map paint style can be downloaded from https://github.com/osmlab/appledata/archive/josm_paint_inline_validation.zip

More info can be found on GitHub at https://github.com/osmlab/appledata/wiki/Inline-Validation-Paint-Style-Information

The style checks the following:

* Roundabout-Link Check
* Missing Roundabout Tag Check
* Suspicious Roundabout Direction
* Missing One Way on Motorway
* Missing Layer Check
* Building-Road Connection Check
* BuildingSnapped2Building Style
* Building Inside Building Check
* Large Building Check
* Waterway Connected To Bridge
* Continuous Roads Check


## For further reading:

 - The OpenStreetMap wiki, the source for all things OSM: http://wiki.openstreetmap.org
 - The OpenStreetMap wiki page on validation https://wiki.openstreetmap.org/wiki/OSM_Tasking_Manager/Validating_data
 - LearnOSM's validation page http://learnosm.org/en/coordination/review/
 - HOT's Validation Training Video: https://www.youtube.com/watch?v=YQ18XfRM6d4
- Missing Maps Learn to Validate Page: https://www.missingmaps.org/validate/