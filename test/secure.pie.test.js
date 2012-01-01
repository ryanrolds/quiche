
var assert = require('assert');

var quiche = require('../quiche');

describe('Secure Pie Chart', function() {
  var pie = quiche('pie');
  pie.setTransparentBackground();
  pie.addData(3000, 'Female', 'FF0000');
  pie.addData(2900, 'Male', '0000FF');
  pie.addData(50, 'Unknown', '00FF00');

  var url = pie.getUrl(true);

  it('should return an https url', function() {
    assert.equal(typeof url, 'string');
    assert.ok(url.indexOf('https://') === 0);
  });
});