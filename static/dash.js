
Plotly.d3.csv("https://api.thingspeak.com/channels/807292/feeds.csv", function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}


var trace1 = {
  type: "scatter",
  mode: "lines",
  name: 'Driver 1',
  x: unpack(rows, 'created_at'),
  y: unpack(rows, 'field1'),
  line: {color: '#474A59'}
}

var trace2 = {
  type: "scatter",
  mode: "lines",
  name: 'Driver 2',
  x: unpack(rows, 'Date'),
  y: unpack(rows, 'AAPL.Low'),
  line: {color: '#474A59'}
}

var data = [trace1,trace2];

var layout = {
  title: 'AlcoData ',
};

Plotly.newPlot('div_plot', data, layout, {showSendToCloud: true});
})

