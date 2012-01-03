
var assert = require('assert');

var quiche = require('../quiche');

describe('Pie Chart', function() {
  var pie = quiche('pie');
  pie.setTransparentBackground();
  pie.addData(3000, 'Foo', 'FF0000');
  pie.addData(2900, 'Bas', '0000FF');
  pie.addData(1500, 'Bar', '00FF00');

  var url = pie.getUrl();

  it('should return a url', function() {
    assert.equal(typeof url, 'string');
  });

  it('should be a pie chart', function() {
    assert.ok(url.indexOf('cht=p') > 0);
  });
});