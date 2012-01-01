
var assert = require('assert');

var Chart = require('../lib/chart');

describe('Pie Chart', function() {
  var pie = new Chart('Pie');
  pie.setTransparentBackground();
  pie.addData(3000, 'Female', 'FF0000');
  pie.addData(2900, 'Male', '0000FF');
  pie.addData(50, 'Unknown', '00FF00');

  describe('#getUrl()', function() {
    it('should return a url', function() {
      var url = pie.getUrl();
      console.log(url);
      assert.equal(typeof url, 'string');
      assert.ok(url.indexOf('http') === 0);
      assert.ok(url.indexOf('cht=p') > 0);
    });
  });
});



