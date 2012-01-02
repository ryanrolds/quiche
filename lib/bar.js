
// http://code.google.com/apis/chart/image/docs/gallery/bar_charts.html

var util = require('util');

var Chart = require('./chart');

module.exports = (function() {
  var Bar = function() {
    this.initialize();
  };

  util.inherits(Bar, Chart);

  Bar.prototype.initialize = function() {
    Bar.super_.prototype.initialize.call(this);

    this.barWidth = 23;
    this.barSpacing = 4;

    this.type = 'bar';
    this.setBarVerticle();
    this.setBarGrouped();
  };

  Bar.prototype.addData = function(data, label, color, max, min) {
    var extras = {};

    if(max && !min) {
      min = 0;
    }

    if(typeof max === 'number' && typeof min === 'number') {
      extras.range = [min, max];
    }
    
    Bar.super_.prototype.addData.call(this, data, label, color, extras);
  };

  Bar.prototype.setBarWidth = function(width) {
    this.barWidth = width;
  };

  Bar.prototype.setBarSpacing = function(spacing) {
    this.barSpacing = spacing;
  };

  Bar.prototype.setBarVerticle = function() {
    this.barOrientation = 'vertical';
  };

  Bar.prototype.setBarHorizontal = function() {
    this.barOrientation = 'horizontal';
  };

  Bar.prototype.isVerticle = function() {
    return (this.barOrientation === 'vertical') ? true : false;
  };

  Bar.prototype.setBarGrouped = function() {
    this.barMultiSeries = 'grouped';
  };

  Bar.prototype.isGrouped = function() {
    return (this.barMultiSeries === 'grouped') ? true : false;
  };

  Bar.prototype.setBarStacked = function() {
    this.barMultiSeries = 'stacked';
  };

  Bar.prototype.isStacked = function() {
    return (this.barMultiSeries === 'stacked') ? true : false;
  };

  Bar.prototype.setBarOverlapped = function() {
    this.barMultiSeries = 'overlapped';
  };

  Bar.prototype.isOverlapped = function() {
    return (this.barMultiSeries === 'overlapped') ? true : false;
  };

  return Bar;
}());