## [Missing Maps](http://www.missingmaps.org/)


### Adding events
When updating the csv of events...

- The year must be 4 digits (may need to adjust display settings in Microsoft Excel). Otherwise, 15 may be interpreted as 1915 instead of 2015.
```
new Date("9/15/15")
Date 1915-09-15T04:00:00.000Z
new Date("9/15/2015")
Date 2015-09-15T04:00:00.000Z
```
- Don't leave fields blank, instead put `null`
