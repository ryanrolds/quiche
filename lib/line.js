
// http://code.google.com/apis/chart/image/docs/gallery/line_charts.html

var util = require('util');

var Chart = require('./chart');

module.exports = (function() {
  var Line = function() {
    this.initialize();
  };

  util.inherits(Line, Chart);

  Line.prototype.initialize = function() {
    Line.super_.prototype.initialize.call(this);

    this.type = 'line';
    this.lineType = 'normal';
    this.setAutoScaling();
  };

  Line.prototype.setSparklines = function() {
    this.lineType = 'sparklines';
  };

  Line.prototype.isSparklines = function() {
    return (this.lineType === 'sparklines') ? true : false;
  };

  Line.prototype.setXY = function() {
    this.lineType = 'xy';
  };

  Line.prototype.isXY = function() {
    return (this.lineType === 'xy') ? true : false;
  };

  return Line;
}());