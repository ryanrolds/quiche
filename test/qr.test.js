var assert = require('assert');

var quiche = require('../quiche');

describe('QR Infograph', function() {
  var qr = quiche('qr');
  qr.setLabel('https://github.com/ryanrolds/quiche');
  qr.setWidth(100);
  qr.setHeight(100);

  var url = qr.getUrl();

  it('should return a url', function() {
    assert.equal(typeof url, 'string');
  });

  it('should be a qr', function() {
    assert.ok(url.indexOf('cht=qr') > 0);
  });
});