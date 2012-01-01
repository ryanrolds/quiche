
var apiUrl = 'chart.googleapis.com/chart?';

module.exports = {
  'createUrl': function(chart, secure) {
    var params = {};

    params = _merge(params, processType(chart));
    params = _merge(params, processTitle(chart));
    params = _merge(params, processData(chart));
    params = _merge(params, processAxisLabels(chart));
    params = _merge(params, processBarWidthSpacing(chart));
    params = _merge(params, processLegend(chart));
    params = _merge(params, processSize(chart));
    params = _merge(params, processBackground(chart));

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
  var params = {
    'cht': ''
  };

  switch(chart.type) {
  case 'bar': 
    params.cht = 'b';
    params.cht += (chart.barOrientation === 'vertical') ? 'v' : 'h';
    switch(chart.barMultiSeries) {
    case 'overlapped':
      params.cht += 'o';
      break;
    case 'stacked':
      params.cht += 's';
      break;
    default:
      params.cht += 'g';
    }
    break;
  case 'pie':
    params.cht = 'p';
    break;
  case '3dpie':
    params.cht = 'p3';
    break;
  }

  return params;
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
  if(!chart.data || chart.data.length === 0) {
    return {};
  }

  // chd, chdl, chds
  var params = {};
  var dataSets = [];
  var setColors = [];
  var setLabels = [];
  var setRanges = [];

  for(var i = 0, l = chart.data.length; i < l; i++) {
    var data = chart.data[i];
    var values = data.values;
    var valuesTypeof = typeof values;
    if(['string', 'number'].indexOf(valuesTypeof) === -1 && !Array.isArray(values)) {
      continue;
    }

    if(Array.isArray(values)) {
      values = values.join(',');
    }

    dataSets.push(values);
    
    if(data.range) {
      setRanges.push(data.range.join(','));
    }

    if(data.label) {
      setLabels.push(data.label);
    }

    if(data.color) {
      setColors.push(data.color);
    }
  }

  var dataSep = '|';
  if(['pie', '3DPie'].indexOf(chart.type) !== -1) {
    dataSep = ',';
  }

  params.chd = 't:' + dataSets.join(dataSep);
  params.chco = setColors.join(',');
  params.chdl = setLabels.join('|').replace(/\s/g, '+');
  if(chart.autoScaling) {
    params.chds = 'a';
  } else if(setRanges.length) {
    params.chds = setRanges.join(',');
  }

  return params;
}

function processBarWidthSpacing(chart) {
  var params = {};
  
  params.chbh = ['a', chart.barSpacing, chart.barWidth].join(','); 

  return params;
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
  var params = {};
  
  params.chdlp = [chart.legend.position, chart.legend.order].join('|');
  params.chdls = [chart.legend.color, chart.legend.size].join(',');

  return params;
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