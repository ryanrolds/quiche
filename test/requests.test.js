
var assert = require('assert');

var quiche = require('../quiche');

describe('HTTP(S) request functions', function() {
  var pie = quiche('pie');
  pie.setTransparentBackground();
  pie.addData(3000, 'Female', 'FF0000');
  pie.addData(2900, 'Male', '0000FF');
  pie.addData(50, 'Unknown', '00FF00');

  it('should return GET request', function(done) {
    var bytes = 0;
    var get = pie.getReq(true, function(res) {
      assert.notEqual(res, undefined);
      assert.strictEqual(res.statusCode, 200);
      assert.strictEqual(res.headers['content-type'], 'image/png');

      var contentLength = parseInt(res.headers['content-length'], 10);
      assert.strictEqual(contentLength > 0, true)

      res.on('data', function(data) {
	bytes += data.length;
      });

      res.on('end', function() {
	assert.strictEqual(contentLength, bytes);
	done();
      });     
    })

    get.on('error', function(err) {
      assert.equal(err, undefined)
    });

    get.end();
  });

  it('should return POST request', function(done) {
    var bytes = 0;
    var post = pie.getPostReq(true, function(res) {
      assert.notEqual(res, undefined);
      assert.strictEqual(res.statusCode, 200);
      assert.strictEqual(res.headers['content-type'], 'image/png');

      var contentLength = parseInt(res.headers['content-length'], 10);
      assert.strictEqual(contentLength > 0, true)

      res.on('data', function(data) {
	bytes += data.length;
      });

      res.on('end', function() {
	assert.strictEqual(contentLength, bytes);
	done();
      });     
    })

    post.on('error', function(err) {
      assert.equal(err, undefined)
    });

    post.end();
  });
});
