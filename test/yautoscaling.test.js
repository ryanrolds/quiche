
var assert = require('assert');

var quiche = require('../quiche');

describe('Chart.autoScalling() add y axis', function() {
  var chart = quiche('line');
  chart.setAutoScaling();

  it('should have a y axis set', function() {
    assert.ok(!!chart.getAxisLabel('y'));
  });
});