
var chartApiUrl = 'https://chart.googleapis.com/chart?';

module.exports = {
  'createUrl': function(chart) {
    var params = {};

    params = _merge(params, processSize(chart));
    params = _merge(params, processType(chart));
    params = _merge(params, processTitle(chart));
    params = _merge(params, processData(chart));
    params = _merge(params, processAxisLabels(chart));
    params = _merge(params, processBarWidthSpacing(chart));
    params = _merge(params, processLegend(chart));

    var options = [];
    for(var param in params) {
      options.push([param, params[param]].join('='));
    }   

    return chartApiUrl + options.join('&');
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
  var setScales = [];

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

  params.chd = 't:' + dataSets.join('|');
  params.chco = setColors.join(',');
  params.chdl = setLabels.join('|').replace(/\s/g, '+');
  if(chart.autoScaling) {
    params.chds = 'a';
  } else {
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

/*
?chxl=1:|0-5|5-9|10-14|15-17|18-19|20|21|22-24|25-29|30-34|35-39|40-44|45-49|50-54|55-59|60-61|62-64|65-66|67-69|70-74|75-79|80-84|85%2B
&chxr=0,0,7.5
&chxt=y,x
&chbh=a,6,0
&chs=740x265
&cht=bvs
&chco=49188F,3D7930,FF9900,3072F3,AA0033
&chds=0,3000,0,3000,0,3000,0,3000,0,3000
&chd=t:4,3,2,3,0,0,3,4,2,2,3,4,5,6,2,0,3,3,6,2,0,0,1|1967,1941,2166,1429,1948,1157,1029,1831,1979,1827,2133,2362,2679,2875,2749,957,1337,744,1116,1611,1216,967,853|45,38,33,19,21,14,16,24,10,7,17,15,10,9,10,2,5,5,4,3,2,2,4|23,13,16,13,143,71,36,64,26,7,13,8,11,15,7,4,4,1,1,2,2,2,2|10,8,2,1,18,9,20,21,19,11,10,8,8,7,10,5,8,2,7,2,4,1,0
&chdl=AIANA|White|Two+or+more|Black|Asian+alone
&chdlp=b
&chma=|0,5
# &chtt=Clarion+County+Pennsylvania+Census+2010+Race+by+Age
*/