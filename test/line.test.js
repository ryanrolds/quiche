
var assert = require('assert');

var quiche = require('../quiche');

describe('Line Chart', function() {
  var chart = quiche('line');
  chart.setTitle('Something with lines');
  chart.addData([3000, 2900, 1500], 'Blah', '008000');
  chart.addData([1000, 1500, 2000], 'Asdf', '0000FF');
  chart.addAxisLabels('x', ['1800', '1900', '2000']);
  chart.setAutoScaling();
  chart.setTransparentBackground();

  var url = chart.getUrl();

  it('url should be string', function() {
    assert.equal(typeof url, 'string');
  });

  it('should be a normal line chart', function() {
    assert.ok(url.indexOf('cht=lc') > 0);
  });
});