console.log('🚀 Events.js loading...');

// Simple constants
const EVENTS_JSON_URL = '/assets/data/events.json';

// Simple build function - 2019 style
const buildEvents = (events) => {
	console.log('📋 Building', events.length, 'events...');
	
	const eventList = document.getElementById('eventList');
	if (!eventList) {
		console.error('❌ No eventList found!');
		return;
	}
	
	// Clear and show progress
	eventList.innerHTML = '';
	
	if (events.length === 0) {
		eventList.innerHTML = '<div class="column"><h3>No upcoming Missing Maps events found.</h3></div>';
		return;
	}
	
	// Process each event using old template style in Foundation cards
	events.forEach((event, index) => {
		console.log('📅 Processing:', event.name);
		
		try {
			// Parse date with Luxon
			const startDate = luxon.DateTime.fromISO(event.date.start);
			const endDate = event.date.end ? luxon.DateTime.fromISO(event.date.end) : null;
			
			// Extract event ID from URL for join link
			const urlParts = event.url.split('/').filter(part => part.length > 0); // Remove empty parts
			const eventId = urlParts[urlParts.length - 1]; // Get last non-empty part
			const joinUrl = `https://osmcal.org/event/${eventId}/join`;
			
			// Get country code for flag
			const getCountryCode = (locationString) => {
				const countryMap = {
					'United States': 'us', 'USA': 'us', 'US': 'us',
					'United Kingdom': 'gb', 'UK': 'gb', 'Britain': 'gb',
					'Germany': 'de', 'Deutschland': 'de',
					'France': 'fr', 'République française': 'fr',
					'Canada': 'ca', 'España': 'es', 'Spain': 'es',
					'Italy': 'it', 'Italia': 'it', 'Netherlands': 'nl',
					'Switzerland': 'ch', 'Czech Republic': 'cz', 'Czechia': 'cz',
					'Slovakia': 'sk', 'Norway': 'no', 'Norge': 'no'
				};
				
				// Extract country from location string (last part after last comma)
				if (!locationString) return 'online'; // Default for online events
				const parts = locationString.split(',');
				const country = parts[parts.length - 1].trim();
				
				return countryMap[country] || country.toLowerCase().substring(0, 2);
			};
			
			// Handle events with or without location data
			const hasLocation = event.location && event.location.detailed;
			const countryCode = hasLocation ? getCountryCode(event.location.detailed) : 'online';
			
			// Format times like the old template
			const startTime = startDate.toFormat('HH:mm');
			const endTime = endDate ? endDate.toFormat('HH:mm') : '';
			const timeDisplay = endTime ? `${startTime} - ${endTime}` : startTime;
			
			// Create location string - handle online events
			const location = hasLocation 
				? `${event.location.venue}, ${event.location.detailed}`
				: 'Online Event';
			
			// Determine flag image or Missing Maps logo for online events
			const flagImage = hasLocation 
				? `<img class="event-images" src="/assets/graphics/flags/4x3/${countryCode}.svg" width="72px" />` 
				: '<img class="event-images mm-logo" src="/assets/graphics/content/MMlogo-Outlined.svg" width="72px" />';
			
			// Create event container - Foundation card with old template style
			const eventContainer = document.createElement('div');
			eventContainer.className = 'column event-card';
			
			eventContainer.innerHTML = `
				<div class="card-section">
					<div class="event-top-section clearfix">
						<div class="sub-head">
							<div class="event-header-container">
								<div class="event-flag">${flagImage}</div>
								<h3 class="event-header">${event.name}</h3>
							</div>
						</div>
					</div>
					<div class="event-maindetails clearfix">
						<div class="event-details-left">
							<span class="emphasizedNumber">${startDate.day}</span>
							<p><b>${startDate.toFormat('MMMM')}</b></p>
						</div>
						<div class="event-details-right">
							<div class="textbox" style="padding-top:8px">
								<p>${location}</p>
								<p class="event-details">${startDate.toFormat('cccc')}, ${timeDisplay}</p>
								<div class="event-buttons" style="display: flex; gap: 10px; flex-wrap: wrap;">
									<a href="${event.url}" target="_blank" rel="noopener noreferrer" 
									   class="btn">
										View Event
									</a>
									<a href="${joinUrl}" target="_blank" rel="noopener noreferrer" 
									   class="btn btn-grn">
										Attend
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			`;
			
			eventList.appendChild(eventContainer);
			console.log('✅ Added event:', event.name);
		} catch (error) {
			console.error('❌ Error processing event:', event.name, error);
			// Extract event ID for join link even in error case
			const urlParts = event.url.split('/').filter(part => part.length > 0);
			const eventId = urlParts[urlParts.length - 1];
			const joinUrl = `https://osmcal.org/event/${eventId}/join`;
			
			// Still add a simple version using old template style
			const simpleContainer = document.createElement('div');
			simpleContainer.className = 'column event-card';
			simpleContainer.innerHTML = `
				<div class="card-section">
					<div class="event-top-section clearfix">
						<div class="sub-head">
							<h3 class="event-header">${event.name}</h3>
						</div>
					</div>
					<div class="event-maindetails clearfix">
						<div class="event-details-right">
							<div class="textbox" style="padding-top:8px">
								<p>Error loading event details</p>
								<div class="event-buttons" style="display: flex; gap: 10px; flex-wrap: wrap;">
									<a href="${event.url}" target="_blank" rel="noopener noreferrer" 
									   class="btn">
										View Event
									</a>
									<a href="${joinUrl}" target="_blank" rel="noopener noreferrer" 
									   class="btn btn-grn">
										Attend
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			`;
			eventList.appendChild(simpleContainer);
		}
	});
	
	console.log('✅ All events built with Foundation cards!');
};

// Fetch events
const fetchEvents = async () => {
	try {
		console.log('📡 Fetching events...');
		const response = await fetch(EVENTS_JSON_URL);
		if (!response.ok) throw new Error('HTTP ' + response.status);
		const events = await response.json();
		console.log('📦 Got', events.length, 'events');
		return events;
	} catch (error) {
		console.error('💥 Fetch error:', error);
		return [];
	}
};

// Main init
const init = async () => {
	console.log('🎯 Initializing...');
	
	// Check Luxon
	if (typeof luxon === 'undefined') {
		console.error('💥 Luxon not available!');
		return;
	}
	console.log('✅ Luxon available');
	
	const events = await fetchEvents();
	buildEvents(events);
};

// Start when DOM ready
document.addEventListener('DOMContentLoaded', () => {
	console.log('📄 DOM ready!');
	
	const eventList = document.getElementById('eventList');
	if (!eventList) {
		console.error('💥 eventList not found!');
		return;
	}
	
	eventList.innerHTML = '<div class="column"><h3>Loading Missing Maps events...</h3></div>';
	
	init();
});

console.log('✅ Events.js loaded!');