
// http://code.google.com/apis/chart/image/

var chartOptions = require('./types');
var url = require('./url');

module.exports = (function() {
  var Chart = function(type) {
    this.height = 200;
    this.width = 300;
    this.title = {
      'color': '',
      'size': null,
      'align': ''
    };
    this.data = [];
    this.autoScaling = false;
    this.axisLabels = [];
    this.barWidth = 23;
    this.barSpacing = 4;
    this.legend = {
      'position': '',
      'orientation': '',
      'order': '',
      'color': '',
      'size': null
    };

    type = type.toLowerCase();
    if(!chartOptions.charts[type]) {
      throw new Error('Invalid chart type');
    }
    
    this[chartOptions.charts[type]]();
  };

  Chart.prototype.setWidth = function(width) {
    width = parseInt(width, 10);
    this.width = width;
  };

  Chart.prototype.setHeight = function(height) {
    height = parseInt(height, 10);
    this.height = height;
  };
  
  Chart.prototype.setChartBar = function() {
    this.type = 'bar';
    this.setBarVerticle();
    this.setBarGrouped();
  };

  Chart.prototype.setChartPie = function() {
    this.type = 'pie';
    this.setAutoScaling();
  };

  Chart.prototype.setChart3DPie = function() {
    this.type = '3dpie';
    this.setAutoScaling();
  };

  Chart.prototype.setBarWidth = function(width) {
    this.barWidth = width;
  };

  Chart.prototype.setBarSpacing = function(spacing) {
    this.barSpacing = spacing;
  };

  Chart.prototype.setBarVerticle = function() {
    this.barOrientation = 'vertical';
  };

  Chart.prototype.setBarHorizontal = function() {
    this.barOrientation = 'horizontal';
  };

  Chart.prototype.setBarGrouped = function() {
    this.barMultiSeries = 'grouped';
  };

  Chart.prototype.setBarStacked = function() {
    this.barMultiSeries = 'stacked';
  };

  Chart.prototype.setBarOverlapped = function() {
    this.barMultiSeries = 'overlapped';
  };

  Chart.prototype.setTitle = function(title) {
    this.title.text = title;
  };

  Chart.prototype.setTitleColor = function(color) {
    this.title.color = color || '000000';    
  };

  Chart.prototype.setTitleSize = function(size) {
    this.title.size = size || 12;    
  };

  Chart.prototype.setTitleAlign = function(align) {
    this.title.align = align || 'c';    
  };

  Chart.prototype.setLegendSize = function(size) {
    this.legend.size = size;
  };

  Chart.prototype.setLegendColor = function(color) {
    this.legend.color = color;
  };

  Chart.prototype.setLegendBottom = function(position) {
    this.legend.position = 'b';
  };

  Chart.prototype.setLegendTop = function(position) {
    this.legend.position = 't';
  };

  Chart.prototype.setLegendLeft = function(position) {
    this.legend.position = 'l';
    this.legend.orientation = '';
  };

  Chart.prototype.setLegendRight = function(position) {
    this.legend.position = 'r';
    this.legend.orientation = '';
  };

  Chart.prototype.setLegendVertical = function(position) {
    if(['r', 'l'].indexOf(this.legend.position) === -1) {
      this.legend.orientation = 'v';
    }
  };

  Chart.prototype.setLegendHorizontal = function(position) {
    this.legend.orientation = '';
  };

  Chart.prototype.setLegendOrder = function(order) {
    this.legend.order = order;
  };

  Chart.prototype.addAxisLabels = function(axis, label) {
    this.axisLabels.push({
      'axis': axis,
      'label': label
    });
  };

  Chart.prototype.addData = function(data, label, color, max, min) {
    var dataItem = {
      'values': data,
      'label': label,
      'color': color
    };

    if(max && !min) {
      min = 0;
    }

    if(typeof max === 'number' && typeof min === 'number') {
      dataItem.range = [min, max];
    }

    return this.data.push(dataItem);    
  };

  Chart.prototype.setAutoScaling = function() {
    this.autoScaling = true;
  }

  Chart.prototype.getUrl = function() {
    return url.createUrl(this);
  };

  return Chart;
}());

