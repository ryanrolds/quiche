
var assert = require('assert');

var Chart = require('../lib/chart');

describe('Pie Chart', function() {
  var pie = new Chart('Pie');
  pie.setTransparentBackground();
  pie.addData(3000, 'Foo', 'FF0000');
  pie.addData(2900, 'Bas', '0000FF');
  pie.addData(1500, 'Bar', '00FF00');

  describe('#getUrl()', function() {
    it('should return a url', function() {
      var url = pie.getUrl();
      assert.equal(typeof url, 'string');
      assert.ok(url.indexOf('http://') === 0);
      assert.ok(url.indexOf('cht=p') > 0);
    });
  });
});



