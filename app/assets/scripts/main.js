/*
Populates contribution statistics on landing page using
the root Missing Maps API endpoint.
*/

const xmlhttp = new XMLHttpRequest();
const url = "https://stats.now.ohsome.org/api/stats/missingmaps?ohsomeFormat=true";

xmlhttp.onreadystatechange = function() {
  if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
    const response = JSON.parse(xmlhttp.responseText);
    updateStatistics(response);
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function updateStatistics(stats) {
  ["users", "edits", "buildings", "roads"].forEach(function(cat) {
    document.getElementById("stats-" + cat + "Count").innerHTML = Math.round(
      stats.result[cat]
    ).toLocaleString();
  });
}
