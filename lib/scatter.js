
// http://code.google.com/apis/chart/image/docs/gallery/line_charts.html

var util = require('util');

var Chart = require('./chart');

module.exports = (function() {
  var Scatter = function() {
    this.initialize();
  };

  util.inherits(Scatter, Chart);

  Scatter.prototype.initialize = function() {
    Scatter.super_.prototype.initialize.call(this);

    this.type = 'scatter';
  };

  

  return Scatter;
}());