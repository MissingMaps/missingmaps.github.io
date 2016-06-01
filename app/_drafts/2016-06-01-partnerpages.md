---
layout: post
title: Partner Pages
postID: partnerpages
category: blog
banner: https://arcmaps.s3.amazonaws.com/share/blog-pictures/partnerpages_banner.jpg
date: 2016-06-01
author: Dale Kunce
excerpt: The next step in data analytics is coming to Missing Maps. Using the infrastructure we continue to build out on the Missing Maps leaderboards and osm-stats-api we are very happy to announce the creation of partner pages. Partner pages can be any sort of partner from some of Missing Maps corporate partners such as JP Morgan Chase to local groups such as Maptime.
published: false
tags: partner pages
permalink: /blog/:year/:month/:day/:title/
lang: en
---

## Partner Pages

The next step in data analytics is coming to Missing Maps. Using the infrastructure we continue to build out on the Missing Maps [leaderboards](http://missingmaps.org/leaderboards) and [osm-stats-api](http://github.com/americanredcross/osm-stats-api) we are very happy to announce the creation of partner pages. Partner pages can be any sort of partner from some of Missing Maps corporate partners such as [JP Morgan Chase](http://missingmaps.org/partners/jpmc/) to local groups such as [Maptime](http://missingmaps.org/partners/maptime).

Partner pages have several key features such as the ability to highlight specific tasks from the HOT [Tasking Manager](http://tasks.hotosm.org) and show the top mappers for a specific community. The site as with all Missing Maps leaderboards is powered by the inclusion of hashtags in the OSM commit message. Partners can customize social media links such as twitter and facebook. Partners can also maintain a simple calendar of events through maintaining a csv file.

The last and greatest feature is that the entire partner page is deployable via s3 or github pages. Just clone the partners github repo and make it your own, update the travis file and deploy. Because the whole site is built on Jekyll partner pages will look and act seamlessly with the main Missing Maps website but can be deployed behind firewalls or to unlisted urls if that is your thing.

If you would like to have your own partner page included into the main Missing Maps website just submit a PR to the [partner repository](http://github.com/missingmaps/partners).

## All hashtags
When we launched the Missing Maps leaderboards we only tracked hashtags if #missingmaps was included with the commit. We did this to make sure our little leaderboard workers could keep up. Long story we worked out a lot of bugs and we are now turning off the restriction of including the #missingmaps hashtag to track your project. All hashtags regardless of what they are now being tracked and can be searched and analyzed via the [leaderboards](http://missingmaps.org/leaderboards).

<figure>
<img src="https://arcmaps.s3.amazonaws.com/share/blog-pictures/partnerpages.jpg" alt="partner pages">
<p class="caption">The group that mapped through the weekend. CC-BY American Red Cross.</p>
</figure>
