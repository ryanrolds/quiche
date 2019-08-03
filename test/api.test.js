
var assert = require('assert');
var quiche = require('../quiche');

describe('API', function() {
  var chart, url;

  beforeEach(function(){
    chart = quiche('bar');
    chart.setTitle('Some title or something');
    chart.addData(3000, 'Foo', 'FF0000');
    chart.addData(2900, 'Bas', '0000FF');
    chart.addData(1500, 'Bar', '00FF00');
    chart.setBarWidth();
    url = unescape(chart.getUrl());
  })

  it('url should contains image-charts.com', function() {
    assert.ok(chart.getUrl().indexOf('image-charts.com') > 0);
  });

  it('chts should only contain one value', function() {
    chart.setTitleLeft();
    url = unescape(chart.getUrl());
    assert.ok(url.indexOf('chts=l') !== -1, ''); // and not chts=,,,
  });

  it('chts should not be present if empty', function(){
    assert.ok(url.indexOf('chts=&') === -1); // and not &chts=&
  });

  it('chbh should only keep valid values', function() {
    assert.ok(url.indexOf('chbh=a,4&') !== -1, ''); // and not chbh=a,4,
  });


});
