const fs = require('fs');
const path = require('path');

// Fetch Missing Maps events from osmcal.org and save to JSON file
async function fetchMissingMapsEvents() {
  try {
    console.log('Fetching events from osmcal.org...');
    
    // Dynamic import for node-fetch v3 (ESM)
    const { default: fetch } = await import('node-fetch');
    
    const response = await fetch('https://osmcal.org/api/v2/events/', {
      headers: {
        'Accept': 'application/json',
        'Client-App': 'missing-maps-website/1.0.0'
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const events = await response.json();
    console.log(`Fetched ${events.length} total events`);
    
    // Filter for events with "missing maps" in the title (case insensitive)
    const missingMapsEvents = events.filter(event => 
      event.name && event.name.toLowerCase().includes('missing maps')
    );
    
    console.log(`Found ${missingMapsEvents.length} Missing Maps events`);
    
    // Add build metadata
    const eventsData = {
      buildTime: new Date().toISOString(),
      count: missingMapsEvents.length,
      events: missingMapsEvents
    };
    
    // Save to app/assets/data/events.json
    const dataDir = path.join(__dirname, 'app', 'assets', 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    const outputPath = path.join(dataDir, 'events.json');
    fs.writeFileSync(outputPath, JSON.stringify(eventsData, null, 2));
    
    console.log(`Saved events to ${outputPath}`);
    console.log(`Build time: ${eventsData.buildTime}`);
    console.log('Event names:');
    missingMapsEvents.forEach(event => {
      console.log(`  - ${event.name} (${event.date.human})`);
    });
    
  } catch (error) {
    console.error('Error fetching events:', error);
    
    // Create empty events file on error
    const dataDir = path.join(__dirname, 'app', 'assets', 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    const outputPath = path.join(dataDir, 'events.json');
    const errorData = {
      buildTime: new Date().toISOString(),
      count: 0,
      events: [],
      error: error.message
    };
    fs.writeFileSync(outputPath, JSON.stringify(errorData, null, 2));
    console.log('Created empty events file due to error');
  }
}

if (require.main === module) {
  fetchMissingMapsEvents();
}

module.exports = fetchMissingMapsEvents;