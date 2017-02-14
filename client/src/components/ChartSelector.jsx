var React = require('react');

var ChartSelector = React.createClass({
  getInitialState: function() {
    return {selectedIndex: undefined};
  },
  handleChange: function(event) {
    var newIndex = event.target.value;
    this.setState({selectedIndex: newIndex});
    this.props.selectChart(this.props.charts[newIndex]);
  },
  render: function () {
    var options = this.props.charts.map(function(chart, index) {
      return <option value={index} key={index}>{chart.feed.entry.title.label}</option>
    })
    return (
      <select id="charts" value={this.state.selectedIndex} onChange = {this.handleChange}>
        {options}
      </select>
    );
  }
});

module.exports = ChartSelector;
