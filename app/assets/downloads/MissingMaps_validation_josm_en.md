<figure>
<img src="https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_mmLogo.png">
</figure>

# Validating for Missing Maps Using JOSM

<figure>
<img src="https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_mapathon.png">
</figure>

This document covers processes for checking data quality in OpenStreetMap, particularly in the context of [Humanitarian OpenStreetMap Team](https://www.hotosm.org/) and Red Cross Missing Maps projects. The methods demonstrated may be useful in other contexts as well.

Checking data, or validating, is a key part of Missing Maps mapping, ensuring that the data is complete and correct so that humanitarian groups, local organizations and others can use it for their own projects and planning.

When we are trying to map a complete set of features and attributes in a specified area, we need ways to check for mistakes and ways to assess the accuracy of the work. In this tutorial we will work through several methods of checking data, explaining the steps of the method and the reason behind each. A well-managed mapping project will include each of these three processes, both for evaluating and correcting data and for reporting.

## What to look for
For Missing Maps tasks, we are generally only concerned with a few types of features, often buildings and/or roads but sometimes other features as well. The instructions for each task will see what and how to map, and we should use that as a guide for our validating.

Here we will look at some methods for checking data simply using JOSM. Some of the questions we are asking about our data are:

 - Are there **geographic** errors (things in the wrong place, overlapping buildings or roads attached to buildings)
 - Are there **tagging** errors (misspelled tags, missing tags, incorrect tags)
 - Is the data **complete** according to the requirements of the HOT task? Is everything there that should be there?

Let’s examine how we can find answers to these questions in JOSM, a powerful OpenStreetMap editing tool. We’ll assume that we are examining the work of others, but the same processes will work fine (and should be easier) when analyzing your own work.

## Get Started
First you should download JOSM from [https://josm.openstreetmap.de/](https://josm.openstreetmap.de/)  -- there are a few options for download, but JOSM.jnlp generally works well.

Start up JOSM. You may need to right click and pick “Open” the first time you run it. You may also need to go to Preferences->Security to be able to open the file. It may prompt you to update your Java software, go ahead and do that.

When JOSM opens, you'll see a gray screen with some news and updates and a number of buttons. We’ll need to add the buildings plugin, which helps us draw buildings quickly.

To do that, click the button that looks like two sliders — that’s the preferences window. (It’s also on your File or JOSM menu.)

<figure>
<img src="https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_JOSMmenu.png">
</figure>

In the Preferences window, the fourth button down looks like a plug, that's the Plug-In menu. Click it. (On some computers these buttons are very small.)

<figure>
<img src="https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_plugin.png">
</figure>

Now search for `buildings`. You’ll see one called `buildings_tools`. Check its box then click `OK` at the bottom of the screen. It will download, and you’ll need to restart JOSM.

<figure>
<img src="https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_buildingsTool.png">
</figure>

There are a few other settings we need to change also.

Click the Preferences button again. The second button looks like a globe. That's the connection settings.

<figure>
<img src="https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_connection.png">
</figure>

Make sure you're logged in with your OpenStreetMap username and password.

Then towards the bottom there’s a button that looks like a remote control. Click that and make sure Enable Remote Control is checked. This will let the HumanitarianOpenStreetMap Team Tasking Manager use JOSM to download your task.

<figure>
<img src="https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_remote1.png">
</figure>

<figure>
<img src="https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_remote2.png">
</figure>

Click `OK` and we're ready to map.

## Understanding your task

From the HOT Tasking Manager, []http://tasks.hotosm.org](http://tasks.hotosm.org) choose a task to validate.


First you must read the Description and Instructions tab for your task to understand what the goal of the project is, and this will tell you what you’re looking for. Here is the Description and Instructions for one task:

<figure>
<img src="https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_taskInstructions.png">
</figure>


## Getting Started
If it’s not already open, open JOSM. Next you need to choose a square to validate. Click the Validate tab and you’ll have a few options: you can pick a task by clicking on it; pick a random task; select a group of tasks by drawing a polygon; or pick all the tasks worked on by a particular mapper, for example if you want to validate tasks by beginner mappers first. You can see their level listed as well as the number of tasks they worked on.

<figure>
<img src="https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_validationTab.png">
</figure>

Once you’ve selected a task or tasks to validate “Start Validating” and then choose JOSM from the dropdown and click “Start Editor”

If imagery loads up automatically, you are ready to map. If not, choose what the Task’s Description and Instructions specifies from JOSM’s Imagery menu. Often it will be either Bing Imagery, Digital Globe, or Mapbox Satellite.

## Validating Data
The first step for checking data is to run the Validation tool in JOSM, which will automatically check the data you have open for suspected mistakes. This tool is especially useful for finding **geography** errors but may not be as useful for finding incorrect tags.

Activate the tool by clicking on the Validation Tool button on the left side of JOSM. (This is unnecessary if the Validation panel is already open)

<figure>
<img src="https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_validateIcon.png">
</figure>

Next make sure that nothing is selected by clicking in a blank spot on your map. If you have features selected when you run the Validation Tool, only those selected features will be checked. (sometimes you may want to only check certain features, but for now we will check the entire file)

Click the “Validation” button on the panel. That will run a check for a number of potential errors.

<figure>
<img src="https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_validateTool.png">
</figure>

You will see a list of warnings appear (your list may vary):

<figure>
<img src="https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_validateResults.png">
</figure>

A new layer also appears on your Layers panel, showing where the errors are. You may find it convenient to hide this layer for now by clicking the eye icon next to the name. It’s a bit easier to see your data with that layer turned off.

<figure>
<img src="https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_Layers.png">
</figure>

Let’s look at a few of the warnings. Most of these we need to fix, but we can ignore “Unnamed ways” since we won’t know these road names.

The rest though, we should look at. To zoom into an issue, click the dropdown then right click one of it and click “Zoom to problem” and it will highlight and zoom to the error.

<figure>
<img src="https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_zoomToProblem.png">
</figure>

Many times these are errors that we never would have caught without the validation tool.

Usually the error name is pretty straightforward and easy to understand. If not, try asking on the mapper-support channel on the HOT Slack, which is free to join: [http://slack.hotosm.org/](http://slack.hotosm.org/)  

Some warnings, such as `Crossing waterway/highway,` are not necessarily mistakes. This shows that the validation tool is good at finding possible mistakes, but it requires someone to go and see whether the warning is important or not.

Once you fix an error, run the Validation tool again and it will disappear from the list. However, sometimes a fix can cause other problems, which is why it’s important to run many times.

Some common issues you will see with the Validation tool on HOT tasks are untagged ways (a line or polygon that someone forgot to tag) and buildings overlapping other buildings or roads.

For many of the issues, the fixes are fairly easy: for overlapping buildings or roads, move the adjust to the correct location so it’s not overlapping; for untagged ways add the correct tag. (NOTE: this is untagged ways or areas, not unnamed ways. We can ignore unnamed ways.)

There are also other issues that the Validation tool won’t catch, so we’ll have to fix them next.

After fixing all the Validation errors, we need to start browsing our square to find the other errors that the Validation tool won’t catch but are also important. Some of these include (but are not limited to) things that are missing or in the wrong place, roads that are attached to buildings, and things that are not tagged properly.

So starting in one corner, zoom in pretty close so you can see the details and begin to pan through your square and look for things that should be mapped according to the task instructions. If it’s a building task and you find missing buildings, add them. Same with missing roads in a task that calls for them to be mapped. Buildings are generally going to be rectangular. ([You can learn more about drawing buildings in JOSM here.](https://www.youtube.com/watch?v=DcKewl94jR4))

You may also need to move things to to match the imagery that the task says to use.

To delete something, highlight it and click delete on your keyboard, or Fn-delete on a Mac.

Buildings should generally have squared corners too. There is a quick way to fix them all, using the JOSM search.

## Using JOSM Search
Searching in JOSM is a powerful way of reviewing data. It allows you to provide search terms, also known as queries, to select only the features that you want.

To access the search, go to Edit -> Search or press CTRL + F on your keyboard or click the magnifying glass icon on the top of the JOSM window.

<figure>
<img src="https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_search.png">
</figure>

There are a great many types of query you can search here, and you can see details and examples in the search box itself and by clicking on the “Help” button.

## Squaring Builidngs
To square buildings, we must first select them. Click Ctrl-F and put in this text:
building inview nodes:4-

That will find everything that is a building in your current view that has 4 or more nodes or corners.

<figure>
<img src="https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_searchQuery.png">
</figure>

They will all turn red on your screen. Click the q key on your keyboard and that will square all of their corners.

However, be careful! If there are buildings that should not be square, this will make them square anyway. To make sure, hit undo and redo see if any buildings that are round or other shapes were changed by mistake. If so, go fix them to what they should be.

<figure>
<img src="https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_undoRedo.png">
</figure>

## Roads
If you are validating a roads task, there are a number of issues that might come up. There may be many roads that are missing or tagged incorrectly. Also, roads may be connected to things they should not be, like buildings.

If roads are missing in your task square, add them using the scheme mentioned in the task’s instructions. If the task asks to map residential roads or small tracks, these are commonly missed. Sometimes people map roads as much bigger than they should be – marking something that should be residential, unclassified or event a track as something like a motorway or primary – you should fix those.

Another common issue with roads is naming them something incorrect. For remote mapping, we usually will not know what the name is, since we are not familiar with these areas. But sometimes people will mistakenly name roads “road” or add something else that is a description, not a name. The Name field should be a proper name like “Highway 1” or “North Avenue”. To find all the named roads, click ctrl-F and then type `highway=* name=*`

<figure>
<img src="https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_searchHighway.png">
</figure>

This will find all the roads that have a name. Click on each one to see what the name is and if it seems correct. If it’s something descriptive like “road” or “dirt road” it may be incorrect, the mapper might have meant to tag it but changed the name by mistake. Remove it if it seems wrong. But be careful, we don’t want to remove accurate data.

Road classification is also important. Sometimes remote mappers will tag roads as much more important than they should be. Consult the task’s instructions and description for how roads should be tagged.

If there are many motorway, trunk, primary, secondary and tertiary roads, especially in a rural area, the tags might be incorrect. These will appear bright colors like blue, yellow, orange and red. If you see those on your task, double check them. Maybe they should be something smaller like tertiary, residential or unclassified.

Roads should not connect with buildings, unless the road goes through the building, which is very rare and usually only seen in large cities.

Here’s an example. The building on the right is attached to the road – see the larger slightly larger square where they are attached. That bigger square indicates a joined node.

<figure>
<img src="https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_unglue.png">
</figure>

To disconnect them, click the square, then click g on your keyboard, which stands for “unglue”. Then click on one node and move it to where it should be. You may need to hit `q` on your keyboard to square the building again.

## To-Do List Plugin

Another useful plugin available in JOSM is the To-Do list. The To-Do list plugin allows you to add features to a list, investigate that feature, mark it as done and automatically zoom to the next feature on the list.

To use the plugin, you need to download it from the plugins menu like you did for the buildings_tool. After adding it, activate it by pressing the to-do list icon on the tools menu. You should then see the To-Do List panel open on the right side of the screen.

<figure>
<img src="https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_todoIcon.png">
</figure>

Using the JOSM search function above, you can select all of the features of a certain type that you would like to look at. Once they are selected, press the `Add` button on the To-Do list panel. This will add all of your features to your list. Select the first feature from the list, ensure that it is correctly mapped, and then press `Mark`, which will move you on to the next feature.

The To-Do list plugin is extremely helpful for beginner mappers who may not yet feel comfortable in scanning the image for features, and helps make sure that each individual feature is looked at.

<figure>
<img src="https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_todoPanel.png">
</figure>

## Using Paint Styles
Paint styles are ways of changing how data is viewed in JOSM. You can use them to highlight certain things that may be incorrect, things that might not come up in the validation checks.

For remote and humanitarian mapping tasks, you often won’t know names of features such as buildings and roads. JOSM Paint styles can highlight where those may have been added by mistake: buildings with names, buildings not tagged 'building=yes', roads with names, and roads that have a highway value in the name key (for example 'name=residential'). Sometimes people add what should be a description as the name, like ‘dirt road’.

Like the validation warnings, the paint style doesn’t necessarily show what is wrong, but it shows what you’ll need to look at to see if it’s wrong.

It’s also important to make sure you don’t delete existing accurate data. Maybe someone visited that place and added those names properly. But odds are something like ‘name=dirt road’ or ‘name=building’ is not correct.

To add the paint style, click on the Windows menu and go to Map Paint Styles… which will open a menu on JOSM:

<figure>
<img src="https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_paintStyle.png">
</figure>

Then click the paint style settings button at lower right.

Click the plus sign at upper right to add a new one.

<figure>
<img src="https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_addStyle.png">
</figure>

Type a name like Missing Maps Validation or whatever you'd like, and put https://github.com/MissingMaps/josm_styles/archive/master.zip in the URL field, and the paint style will appear in your Map Paint Styles window.

<figure>
<img src="https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_styleName.png">
</figure>

There are four colors you may see, plus some triangles, corresponding to the errors mentioned earlier:

- buildings with names are **yellow**
- buildings not tagged `building=yes` are **orange**
-	roads that are named are **green**
-	roads that are named for a description (like `name=residential`) are **red**
-	buildings that are connected to roads or other features are **red triangles**
-	buildings that are connected to other buildings are **orange triangles**

For example, you may see something like this:

<figure>
<img src="https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_styleExample1.png">
</figure>

Or this:

<figure>
<img src="https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_styleExample2.png">
</figure>

This paint style lets you go through and find these issues quickly and see if they should be fixed or not. Some of these might be OK, but you’ll need to check to see if they are correct or not.

You can check the History of that object if you aren’t sure if it’s correct or not, by clicking on it then ctrl-h – that will show you who edited the feature before and might give a reason why they added a certain name or tag.

When in doubt, go with the existing data and tags.

## Communicating with those who mapped
If everything in the square looks complete and correct go back to the Tasking Manager window, and leave a comment in the comment box.

If there are still things that remain to be done, you can “Invalidate” the square so that others can finish it. Make sure to note what still remains to be done. A good rule of thumb is that if you can fix everything in a square in a few minutes, go ahead and do so and Validate it. Otherwise Invalidate it. You should also check to see if the project is still being worked on – if the last person to edit there did so many months ago, you might be better off finishing what’s left and validating.

Whether you validate or invalidate, you should thank those who have worked on the square so far by typing the @ key on your keyboard and then their username.

You can see the list of people who have worked on the task below the comment box:

<figure>
<img src="https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_taskComments.png">
</figure>

There may have been many people who contributed, so make sure to thank them for their work, even if there are some errors or problems. This can encourage them to come back and map again. If you noticed errors, like any of the validation warnings we saw above or other things like buildings that weren’t squared or roads that were missing, note that in the comment too, politely. This can help the mapper learn so next time they’ll do a better job.

<figure>
<img src="https://arcmaps.s3.amazonaws.com/share/validationPictures/validation_commentExample.png">
</figure>

Here is a sample message you can use:
>Added a few remaining buildings and roads. Thank you @Stanley1260 @Prinzvizzy @GeoAlex104 for mapping! Don't forget to square your buildings using the `s` key

Another rule of thumb is that if you recognize a username from a previous square you validated or invalidated, you don’t need to message them again – we don’t want to send a ton of messages to the same people. So if you recognize a username from validating before, you can skip them in the message.

Then after you’ve left your comment, click “Validate” if everything is complete or “Invalidate” if there are still things remaining. Now you can move onto another square.

Thank you! Validating is a key part of HOT mapping and we always need more people to make sure the data is accurate and complete.

## For further reading:

 - The OpenStreetMap wiki, the source for all things OSM: http://wiki.openstreetmap.org
 - The OpenStreetMap wiki page on validation https://wiki.openstreetmap.org/wiki/OSM_Tasking_Manager/Validating_data
 - LearnOSM’s validation page http://learnosm.org/en/coordination/review/
JOSM’s validation checks page -

