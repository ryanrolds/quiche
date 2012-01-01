
var assert = require('assert');

var quiche = require('../quiche');
var Chart = require('../lib/chart');
var Pie = require('../lib/pie');
var Bar = require('../lib/bar');

describe('Pie Chart Initialization', function() {
  var chart = quiche('pie');
  
  it('should be a Chart', function() {
    assert.ok(chart instanceof Chart);
  });

  it('should be a Pie', function() {
    assert.ok(chart instanceof Pie);
  });
});

describe('Bar Chart Initialization', function() {
  var chart = quiche('bar');
  
  it('should be a Chart', function() {
    assert.ok(chart instanceof Chart);
  });

  it('should be a Bar', function() {
    assert.ok(chart instanceof Bar);
  });
});