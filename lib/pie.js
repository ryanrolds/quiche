
// http://code.google.com/apis/chart/image/docs/gallery/pie_charts.html

var util = require('util');

var Chart = require('./chart');

module.exports = (function() {
  var Pie = function() {
    this.initialize();
  };

  util.inherits(Pie, Chart);

  Pie.prototype.initialize = function() {
    Pie.super_.prototype.initialize.call(this);

    this.type = 'pie';
    this.moreDs = false;
    this.setAutoScaling();
  };

  Pie.prototype.set3D = function() {
    this.moreDs = true;
  };
  
  Pie.prototype.is3D = function() {
    return this.moreDs;
  }

  return Pie;
}());