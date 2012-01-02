
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
    this.lineStyles = [];
    this.setAutoScaling();
  };

  Line.prototype.addData = function(data, label, color, thickness, dashLength, spaceLength) {
    var style = {};

    if(thickness) {
      style.thickness = thickness;
    }

    if(dashLength) {
      style.line = dashLength;
    }

    if(spaceLength) {
      style.space = spaceLength;
    }

    this.lineStyles.push(style);

    Line.super_.prototype.addData.call(this, data, label, color);
  };

  Line.prototype.getLineStyles = function() {
    return this.lineStyles;
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