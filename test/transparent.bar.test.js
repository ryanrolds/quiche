
var assert = require('assert');

var Chart = require('../lib/chart');

describe('Transparent BHS Chart', function() {
  var chart = new Chart('Bar');
  chart.setWidth(400);
  chart.setHeight(265)
  chart.setTitle('Some title or something');
  chart.setBarStacked();
  chart.setBarWidth(0);
  chart.setBarSpacing(6);
  chart.setLegendBottom();
  chart.setAutoScaling();
  chart.setTransparentBackground();

  chart.addData([19, 19, 21, 14, 19, 11, 10, 18, 19, 30], 'Foo', 'FF0000');
  chart.addData([4, 3, 2, 3, 0, 0, 3, 4, 2, 2], 'bar', '0000FF');
  chart.addData([10, 8, 2, 1, 18, 9, 20, 21, 19, 11], 'bin', '008000');
  chart.addData([2, 1, 1, 1, 1, 7, 3, 6, 2, 7], 'bash', '00FF00');
  chart.addData([1, 0, 0, 1, 2, 1, 0, 0, 0, 0], 'blah', '307000');

  chart.addAxisLabels('x', ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']);
  chart.addAxisLabels('y');

  describe('#getUrl()', function() {
    it('should return a url', function() {
      var url = chart.getUrl();
      assert.equal(typeof url, 'string');
      assert.ok(url.indexOf('http://') === 0);
      assert.ok(url.indexOf('cht=bvs') > 0);
    });
  });
});