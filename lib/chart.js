
// http://code.google.com/apis/chart/image/
// http://code.google.com/apis/chart/image/docs/chart_params.html

var url = require('./url');

module.exports = (function() {
  var Chart = function() {};

  Chart.prototype.initialize = function() {
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
    this.legend = {
      'position': '',
      'orientation': '',
      'order': '',
      'color': '',
      'size': null,
      'disabled': false
    };
  };

  Chart.prototype.getType = function() {
    return this.type;
  };

  Chart.prototype.getData = function() {
    return this.data;
  };

  Chart.prototype.setWidth = function(width) {
    width = parseInt(width, 10);
    this.width = width;
  };

  Chart.prototype.setHeight = function(height) {
    height = parseInt(height, 10);
    this.height = height;
  };
  
  Chart.prototype.setTransparentBackground = function() {
    this.background = {};
    this.background.fill = 's'
    this.background.color = '00000000';
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

  Chart.prototype.setTitleLeft = function(align) {
    this.title.align = 'l';
  };

  Chart.prototype.setTitleRight = function(align) {
    this.title.align = 'r';
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

  Chart.prototype.setLegendHidden = function(position) {
    this.legend.disabled = true;
    if(['r', 'l'].indexOf(this.legend.position) === -1) {
      this.legend.orientation = 'v';
    }
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

  Chart.prototype.addData = function(data, label, color, extras) {
    var dataItem = {
      'values': data,
      'label': label,
      'color': color
    };

    if(typeof extras === 'object') {
      Object.keys(extras).forEach(function(item) {
        dataItem[item] = extras[item];
      });
    }

    return this.data.push(dataItem);    
  };

  Chart.prototype.setAutoScaling = function() {
    this.autoScaling = true;

    if(!this.getAxisLabel('y')) {
      this.addAxisLabels('y');
    }
  }

  Chart.prototype.getAxisLabel = function(name) {
    var axis;
    var labels = this.axisLabels;
    
    for(var i = 0, l = labels.length; i < l; i++) {
      var item = labels[i];
      if(item.axis === name) {
        axis = item;
        break;
      }
    }
      
    return axis;
  }

  Chart.prototype.getUrl = function(secure) {
    return url.createUrl(this, secure);
  };

  return Chart;
}());

