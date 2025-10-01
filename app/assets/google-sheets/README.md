# Google Sheets Data

This folder contains CSV data from Google Sheets used by the site:

- `eventHelpers.csv` - Contact information for mapathon organizers and helpers (used by helper-map.html)

**Note**: Events data is now fetched from osmcal.org API and stored in `/assets/data/events.json` instead of Google Sheets.

The helper contact data is still pulled from Google Sheets because we get a CORS error if we try to pull the data directly from Sheets into the browser client-side.