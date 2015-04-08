d3.json("data/events.json", function(data){
	// function to build html content for event list item element
	function eventHtml(eventData){
		// event date
		var dateObject = new Date(eventData.properties.date);
		// numeric day of month for event
		var day = dateObject.getDate();
		// d3 helper to return abbreviated month
		var monthFormatter = d3.time.format('%b');
		// abbreviated month for event
		var month = monthFormatter(dateObject).toUpperCase();
		var thisHtml = '<time>' +
		      '<span class="day">' + day + '</span>' +
		      '<span class="month">' + month + '</span>' +
		    '</time>' +
		    '<span class="flag-icon flag-icon-' + eventData.properties.flag +
		    ' flag-icon-squared flag" style="width:120px;"></span>' +
		    '<div class="info">' +
		      '<h3 class="title event">' + eventData.properties.title + '</h3>'+
		      '<p class="desc">Place: <a href="' + eventData.properties.place_url +
					'" target="_blank">' + eventData.properties.place_name + '</a></p>' +
		      '<p class="desc">Time: ' + eventData.properties.time_string + '</p>' +
					// '<p class="desc"><span class="fa fa-check-square-o"></span>' +
					// '<a href="' + eventData.properties.signup_url + '" target="_blank"> Sign Up</a></p>' +
					((eventData.properties.signup_url == "null") ? '<p class="desc"></p>' : '<p class="desc"><span class="fa fa-check-square-o"></span>' +
					'<a href="' + eventData.properties.signup_url + '" target="_blank"> Sign Up</a></p>') +
					' </div>';
	    return thisHtml;
	}
	// date for filtering event data (show future and past week)
	var oneWeekPast = d3.time.day.offset(new Date, -7);
	// add a list item to page for each event from data that meets filter criteria
	var displayedEvents = d3.select("#events .event-list").selectAll('li')
		.data((data.features).filter(function(d){
			var eventDate = new Date(d.properties.date);
			return eventDate >= oneWeekPast;
		})).enter().append('li').html(function(d){
			return eventHtml(d);
		});
	// sort ascending (in case data wasn't in order by date)
	displayedEvents.sort(function(a,b){
      return new Date(a.properties.date) - new Date(b.properties.date);
    });
})
