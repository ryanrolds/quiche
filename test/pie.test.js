
var assert = require('assert');

var Chart = require('../lib/chart');

describe('Pie Chart', function() {
  var chart = new Chart('Pie');
  chart.addData(31086, 'Male', '0000FF');
  chart.addData(31957, 'Female', 'FF0000');

  describe('#getUrl()', function() {
    it('should return a url', function() {
      var url = chart.getUrl();
      assert.equal(typeof url, 'string');
      assert.ok(url.indexOf('http') === 0);
      assert.ok(url.indexOf('cht=p') > 0);
    });
  });
});



