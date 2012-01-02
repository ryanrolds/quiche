
var assert = require('assert');

var quiche = require('../quiche');

describe('Multiple x axis labels', function() {
  var chart = quiche('line');
  chart.setAutoScaling();
  chart.addData([3000, 2900, 1500], 'Foo', '800000');
  chart.addData([1000, 1500, 3500], 'Foo', '008000');

  chart.addAxisLabels('x', ['1800', '1900', '2000']);
  chart.addAxisLabels('x', ['Earlier', 'Later']);

  var url = chart.getUrl();

  it('should have two x asix', function() {
    assert.ok(url.indexOf('2:|Earlier|Later') !== -1);
    assert.ok(url.indexOf('chxt=y,x,x') !== -1);
  });
});