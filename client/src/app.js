var React = require('react');
var ReactDOM = require('react-dom');

var ChartContainer = require('./containers/ChartContainer.jsx');

window.onload = function () {
  ReactDOM.render(
    <ChartContainer />,
    document.getElementById('app')
  );
};
