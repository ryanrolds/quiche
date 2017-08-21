
// http://code.google.com/apis/chart/image/docs/gallery/pie_charts.html

var util = require('util');

var Chart = require('./chart');

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

Pie.prototype.setLabel = function(data) {
  this.labels = data;
};

Pie.prototype.addPercent = function () {
  var sum = 0;
  this.data.forEach( function(s) {
    sum = sum + s.values;
  });
  var percent = [];
  this.data.forEach( function(s){
    var value = (Math.round((s.values/sum)*10000)/100);
    percent.push(value + "%");
  });
  this.setLabel(percent);
};

Pie.prototype.getLabel = function() {
  return this.labels;
};

Pie.prototype.is3D = function() {
  return this.moreDs;
};

module.exports = Pie;
