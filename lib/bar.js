
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

  Bar.prototype.setBarGrouped = function() {
    this.barMultiSeries = 'grouped';
  };

  Bar.prototype.setBarStacked = function() {
    this.barMultiSeries = 'stacked';
  };

  Bar.prototype.setBarOverlapped = function() {
    this.barMultiSeries = 'overlapped';
  };

  return Bar;
}());