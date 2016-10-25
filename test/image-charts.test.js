var assert = require('assert');

var quiche = require('../quiche');

describe('Image-Charts', function() {
  var chart;

  beforeEach(function() {
    chart = quiche('line');
    chart.setHostname('image-charts.com');
    chart.setTitle('Something with lines');
    chart.addData([
      3000, 2900, 1500
    ], 'Blah', '008000');
    chart.addData([
      1000, 1500, 2000
    ], 'Asdf', '0000FF');
    chart.addAxisLabels('x', ['1800', '1900', '2000']);
    chart.setAutoScaling();
    chart.setTransparentBackground();
  });

  afterEach(function() {
    chart.setHostname('chart.googleapis.com');
  });

  it('url should contains image-charts.com', function() {
    assert.ok(chart.getUrl().indexOf('image-charts.com') > 0);
  });

  it('should return GET request', function(done) {
    var bytes = 0;
    chart.getReq(true, function(res) {
      assert.notEqual(res, undefined);
      assert.strictEqual(res.statusCode, 200);
      assert.ok(res.headers['content-type'], 'image/png');
      assert.strictEqual(res.req.socket._host, 'image-charts.com');
      var contentLength = parseInt(res.headers['content-length'], 10);
      assert.strictEqual(contentLength > 0, true)

      res.on('data', function(data) {
        bytes += data.length;
      }).on('end', function() {
        assert.strictEqual(contentLength, bytes);
        done();
      });
    }).on('error', function(err) {
      assert.equal(err, undefined)
    }).end();
  });

  it('should return POST request', function(done) {
    var bytes = 0;
    chart.getPostReq(true, function(res) {
      assert.notEqual(res, undefined);
      assert.strictEqual(res.statusCode, 200);
      assert.strictEqual(res.headers['content-type'], 'image/png');
      assert.strictEqual(res.req.socket._host, 'image-charts.com');

      var contentLength = parseInt(res.headers['content-length'], 10);
      assert.strictEqual(contentLength > 0, true)

      res.on('data', function(data) {
        bytes += data.length;
      });

      res.on('end', function() {
        assert.strictEqual(contentLength, bytes);
        done();
      });
    }).on('error', function(err) {
      assert.equal(err, undefined)
    }).end();
  });
});
