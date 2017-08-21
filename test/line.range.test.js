
var assert = require('assert');

var quiche = require('../quiche');

describe('Line Chart w/ set Y axis range', function() {
  var chart = quiche('line');
  chart.setTitle('Something with lines');
  chart.addData([3000, 2900, 1500], 'Blah', '008000');
  chart.addData([1000, 1500, 2000], 'Asdf', '0000FF');
  chart.addAxisLabels('x', ['1800', '1900', '2000']);
  chart.setAutoScaling(); // Left in intentionally
  chart.setAxisRange('y', 500, 3500, 250);
  chart.setTransparentBackground();

  var url = chart.getUrl();

  it('url should be string', function() {
    assert.equal(typeof url, 'string');
  });

  it('should be a normal line chart', function() {
    assert.ok(url.indexOf('cht=lc') > 0);
  });

  it('should have axis label scaling', function() {
    assert.ok(url.indexOf('&chxr=0%2C500%2C3500%2C250') > 0);
  });

  it('should have data scaling', function() {
    assert.ok(url.indexOf('&chds=500%2C3500') > 0);
  });  
});
