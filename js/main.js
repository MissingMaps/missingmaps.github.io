d3.json("data/events.json", function(data){
	// function to build html content for event list item element
	function eventHtml(eventData){
		// event date
		var dateObject = new Date(eventData.date);
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
		    '<span class="flag-icon flag-icon-' + eventData.flag +
		    ' flag-icon-squared flag" style="width:120px;"></span>' +
		    '<div class="info">' +
		      '<h3 class="title event">' + eventData.title + '</h3>'+
		      '<p class="desc">Place: <a href="' + eventData.place_url + '">' + eventData.place_name + '</a></p>' +
		      '<p class="desc">Time: ' + eventData.time_string + '</p>' +
		      '<p class="desc"><span class="fa fa-check-square-o"></span>' +
		      '<a href="' + eventData.signup_url + '"> Sign Up</a></p></div>';
	    return thisHtml;
	}
	// date for filtering event data (show one day past events)
	var yesterday = d3.time.day.offset(new Date, -7);
	// add a list item to page for each event from data that meets filter criteria
	var displayedEvents = d3.select("#events .event-list").selectAll('li')
		.data((data).filter(function(d){
			var eventDate = new Date(d.date);
			return eventDate >= yesterday;
		})).enter().append('li').html(function(d){
			return eventHtml(d);
		});
	// sort ascending (in case JSON data wasn't in order by date)
	displayedEvents.sort(function(a,b){
      return new Date(a.date) - new Date(b.date);
    });
})
