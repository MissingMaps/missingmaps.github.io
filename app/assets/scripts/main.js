/*
Populates contribution statistics on landing page using
the root Missing Maps API endpoint.

Note: MissingMap began collecting statistics in realtime
beginning February 16, 2016, a few of which are displayed
on the MissingMaps landing page (users, total edits,
building edits, and road kilometer additions). The object
below contains a summary of the number of edits in these
categories that were submitted prior to February 16, 2016,
which are added to the running total to estimate totals
going back to 2014. Users are calculated in realtime by the
current API, so no additions are necessary.
*/

const priorStats = {
	users: 0,
	edits: 22378685,
	buildings: 2435322,
	roads: 215683
};

const xmlhttp = new XMLHttpRequest();
const url = 'https://osmstats.redcross.org/stats/missingmaps';

xmlhttp.onreadystatechange = function () {
  if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
    const response = JSON.parse(xmlhttp.responseText);
    updateStatistics(response);
  };
};
xmlhttp.open('GET', url, true);
xmlhttp.send();

function updateStatistics (stats) {
  ['users', 'edits', 'buildings', 'roads'].forEach(function (cat) {
  	const total = Math.floor(priorStats[cat] + stats[cat]);
    document.getElementById('stats-' + cat + 'Count')
      .innerHTML = total.toLocaleString();
  });
};
