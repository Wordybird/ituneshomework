var React = require('react');
var ChartSelector = require('../components/ChartSelector');
var ChartDetail = require('../components/ChartDetail');

var ChartContainer = React.createClass({
  getInitialState: function () {
    return {charts: [], focrusChart: null};
  },
  componentDidMount: function() {
    var url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function() {
      if (request.status === 200) {
        var data = JSON.parse(request.responseText);
        this.setState({charts: data, focusChart: data[0]});
      }
    }.bind(this);
    request.send(null);
  },
  setFocusChart: function(country) {
    this.setState({focusChart: chart});
  },
  render: function () {
    return (
      <div>
        <h2>Top 20 Songs in the UK Charts</h2>
        <ChartSelector charts={this.state.charts} selectChart = {this.setFocusChart}/>
        <ChartDetail chart={this.state.focusChart} />
      </div>
    );
  }
});

module.exports = ChartContainer;
