
var assert = require('assert');

var quiche = require('../quiche');

describe('Line with styles chart', function() {
  var chart = quiche('line');
  chart.addData([3000, 2900, 1500], 'Blah', '008000', 5, 5, 5);
  chart.addData([1000, 1500, 2000], 'Asdf', '0000FF', 3);
  chart.addData([2000, 500, 3000], 'Asdf', '0000FF', 5, 10);

  var url = chart.getUrl();

  it('url should be string', function() {
    assert.equal(typeof url, 'string');
  });

  it('url has stylings', function() {
    assert.ok(url.indexOf('chls=5,5,5|3|5,10') !== -1);
  });
});