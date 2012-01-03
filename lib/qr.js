
// http://code.google.com/apis/chart/infographics/docs/overview.html

var Chart = require('./chart');

module.exports = (function() {
  var QR = function() {
    this.initialize();
  };

  QR.prototype.initialize = function() {
    Chart.prototype.initialize.call(this);

    this.type = 'qrcode';
    this.encoding = 'UTF-8';
    this.errorCorrection = 'L';
    this.margins = 0;
    this.width = 200;
    this.height = 200;
  };

  QR.prototype.setLabel = function(data) {
    this.labels = [data];
  };

  QR.prototype.getLabel = function() {
    return this.labels;
  };

  QR.prototype.setEncoding = function(encoding) {
    if(['UTF-8', 'Shift_JIS', 'ISO-8859-1'].indexOf(encoding) === -1) {
      throw new Error('Invalid encoding');
    }

    this.encoding = encoding;
  };

  QR.prototype.getEncoding = function() {
    this.encoding;
  };

  QR.prototype.setErrorCorrectionLevel = function(level) {
    if([].indexOf(level) === -1) {
      throw new Error('Invalid error correction level');
    }

    this.errorCorrection = level;
  };

  QR.prototype.getErrorCorrectionLevel = function() {
    return this.errorCorrection;
  };

  QR.prototype.setMargin = function(rows) {
    this.margins = rows;
  };

  QR.prototype.getMargin = function() {
    return this.margins;
  };

  QR.prototype.setWidth = Chart.prototype.setWidth;
  QR.prototype.setHeight = Chart.prototype.setHeight;
  QR.prototype.getType = Chart.prototype.getType;

  QR.prototype.getData = function() {
    return [];
  }

  QR.prototype.getUrl = function() {
    return Chart.prototype.getUrl.call(this, arguments[0]);
  };

  return QR;
}());