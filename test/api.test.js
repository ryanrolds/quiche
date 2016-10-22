
var assert = require('assert');

var quiche = require('../quiche');

describe('API', function() {
  var chart = quiche('bar');

  chart.setTitle('Some title or something');
  chart.setTitleLeft();
  chart.addData(3000, 'Foo', 'FF0000');
  chart.addData(2900, 'Bas', '0000FF');
  chart.addData(1500, 'Bar', '00FF00');
  chart.setBarWidth();
  var url = unescape(chart.getUrl());

  it('chts should only contain one value', function() {
    assert.ok(url.indexOf('chts=l') !== -1, ''); // and not chts=,,,
  });

  it('chbh should only keep valid values', function() {
    assert.ok(url.indexOf('chbh=a,4&') !== -1, ''); // and not chbh=a,4,
  });
});
