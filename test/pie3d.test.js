
var assert = require('assert');

var quiche = require('../quiche');

describe('3D Pie Chart', function() {
  var chart = quiche('pie');
  chart.set3D();
  chart.addData(31086, 'Male', '0000FF');
  chart.addData(31957, 'Female', 'FF0000');

  var url = chart.getUrl();

  it('url should be string', function() {
    assert.equal(typeof url, 'string');
  });

  it('should be a 3d pie', function() {
    assert.ok(url.indexOf('cht=p3') > 0);
  });
});