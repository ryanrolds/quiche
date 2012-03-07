3
var apiUrl = 'chart.googleapis.com/chart?';

module.exports = {
  'createUrl': function(chart, secure) {
    var params = {};

    params = _merge(params, processType(chart));
    params = _merge(params, processTitle(chart));
    params = _merge(params, processData(chart));
    params = _merge(params, processLineStyle(chart));
    params = _merge(params, processAxisLabels(chart));
    params = _merge(params, processBarWidthSpacing(chart));
    params = _merge(params, processLegend(chart));
    params = _merge(params, processSize(chart));
    params = _merge(params, processBackground(chart));
    params = _merge(params, processEncoding(chart));
    params = _merge(params, processLabel(chart));
    params = _merge(params, processLabelData(chart));

    var options = [];
    for(var param in params) {
      options.push([param, params[param]].join('='));
    }

    return ((secure) ? 'https://' : 'http://') + apiUrl + options.join('&');
  }
};

function processSize(chart) {
  return {
    'chs': chart.width + 'x' + chart.height
  };
}

function processType(chart) {
  var cht = '';
  var type = chart.getType();
  if(type === 'bar') {
    cht = 'b';
    cht += (chart.isVerticle()) ? 'v' : 'h';

    if(chart.isOverlapped()) {
      cht += 'o';
    } else if(chart.isStacked()) {
      cht += 's';
    } else if(chart.isGrouped()) {
      cht += 'g';
    }
  } else if(type === 'pie') {
    cht = 'p';
    if(chart.is3D()) {
      cht += '3';
    }
  } else if(type === 'line') {
    cht = 'l';
    if(chart.isSparklines()) {
      cht += 's';
    } else if(chart.isXY()) {
      cht += 'xy';
    } else {
      cht += 'c';
    }
  } else if(type === 'qrcode') {
    cht = 'qr';
  }

  return {
    'cht': cht
  };
}

function processTitle(chart) {
  var params = {};
  
  if(!chart.title.text) {
    return {};
  }

  var title = chart.title;
  params.chtt = title.text.replace(/\s/g, '+');
  params.chts = [title.color, title.size, title.align].join(',');

  return params;
}

function processData(chart) {
  var data = chart.getData();
  if(!data || data.length === 0) {
    return {};
  }

  // chd, chdl, chds
  var params = {};
  var dataSets = [];
  var setColors = [];
  var setLabels = [];
  var setRanges = [];

  for(var i = 0, l = data.length; i < l; i++) {
    var datum = data[i];
    var values = datum.values;
    var valuesTypeof = typeof values;
    if(['string', 'number'].indexOf(valuesTypeof) === -1 && !Array.isArray(values)) {
      continue;
    }

    if(Array.isArray(values)) {
      values = values.join(',');
    }

    dataSets.push(values);
    
    if(datum.range) {
      setRanges.push(datum.range.join(','));
    }

    if(datum.label) {
      setLabels.push(datum.label);
    }

    if(datum.color) {
      setColors.push(datum.color);
    }
  }

  var dataSep = '|';
  if(['pie', '3DPie'].indexOf(chart.type) !== -1) {
    dataSep = ',';
  }

  params.chd = 't:' + dataSets.join(dataSep);
  params.chco = setColors.join(',');

  if(!chart.legend.disabled) {
    params.chdl = setLabels.join('|').replace(/\s/g, '+');
  }
  if(chart.autoScaling) {
    params.chds = 'a';
  } else if(setRanges.length) {
    params.chds = setRanges.join(',');
  }

  return params;
}

function processBarWidthSpacing(chart) {
  if(chart.getType() === 'bar') {
    return {
      'chbh': ['a', chart.barSpacing, chart.barWidth].join(',')
    };
  }

  return {};
}

function processAxisLabels(chart) {
  if(chart.axisLabels.length === 0) {
    return {};
  }

  var params = {
    'chxt': [],
    'chxl': []
  };

  var labels = [];
  chart.axisLabels.forEach(function(item) {
    var pos = params.chxt.push(item.axis) - 1;
    if(item.label) {
      params.chxl.push( pos + ':|' + item.label.join('|'));
    }
  });

  params.chxt = params.chxt.join(',');
  params.chxl = params.chxl.join('|');

  return params;
}

function processLegend(chart) {
  if(chart.legend.disabled) {
    return {};
  }

  var params = {};
  var legend = chart.legend;
  if(legend.position || legend.order) {
    params.chdlp = [legend.position || 'r', legend.order || 'l'].join('|');
  }

  if(legend.color || legend.size) {
    if(legend.size && !legend.color) {
      throw new Error('Legend color must also be set');
    }

    params.chdls = [legend.color, legend.size].join(',');
  }

  return params;
}

function processLabelData(chart) {
  if(chart.getType() === 'qrcode') {
    var ecl = chart.getErrorCorrectionLevel();
    var margin = chart.getMargin();
    if(ecl !== 'L' || margin !== 4) {
      return {
        'chld': [ecl, margin].join('|')
      };
    }
  }

  return {};
}

function processLineStyle(chart) {
  if(['line', 'radar'].indexOf(chart.getType()) === -1) {
    return {};
  }
  
  var processed = [];
  var hasStyle = false;

  var styles = chart.getLineStyles();
  styles.forEach(function(item) {
    var style = [];
    
    if(item.thickness) {
      style.push(item.thickness);
    } 

    if(item.line) {
      style.push(item.line);
    }

    if(item.space) {
      style.push(item.space);
    }

    if(!hasStyle && style.length > 0) {
      hasStyle = true;
    }

    processed.push(style.join(','));
  });

  if(!hasStyle) {
    return {};
  }

  return {
    'chls': processed.join('|')
  };
}

function processLabel(chart) {
  var type = chart.getType();
  if(type === 'qrcode') {
    return {
      'chl': chart.getLabel()
    };
  }

  return {};
}

function processEncoding(chart) {
  if(chart.getType() === 'qrcode') {
    var encoding  = chart.getEncoding();
    if(encoding && encoding !== 'L') {
      return {
        'choe': encoding
      };
    }
  }

  return {};
}

function processBackground(chart) {
  if(!chart.background) {
    return {};
  }

  var bg = chart.background; 
  if(!bg.fill || !bg.color) {
    return {};
  }

  var params = {};
  params.chf = ['bg', bg.fill, bg.color].join(',');

  return params;
}

function _merge() {
  var obj = {};

  for (var i = 0, l = arguments.length; i < l; i++) {
    var rObj = arguments[i];
    for (var attrname in rObj) {
      obj[attrname] = rObj[attrname];
    }
  }

  return obj;
}