var React = require('react');

var ChartDetail = function (props) {
  if (!props.chart) {
    return <h4>No Chart Selected. </h4>
  }
  return (<div>
    <h4>Artist: {props.chart.feed.entry.title.label}</h4>
    </div>)
};

module.exports = ChartDetail;
