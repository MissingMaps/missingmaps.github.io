/*
Populates contribution statistics on landing page
using the root Missing Maps API endpoint
*/

var xmlhttp = new XMLHttpRequest();
var url = 'http://nickss-mbp.local:3000/';

xmlhttp.onreadystatechange = function() {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    var response = JSON.parse(xmlhttp.responseText)[0];
    updateStatistics(response);
  };
};
xmlhttp.open('GET', url, true);
xmlhttp.send();

function updateStatistics(stats) {
  ['users', 'edits', 'buildings', 'roads'].forEach(function (cat) {
    document.getElementById('stats-' + cat + 'Count')
      .innerHTML = Math.floor(stats[cat]).toLocaleString() + '+';
  });
};
