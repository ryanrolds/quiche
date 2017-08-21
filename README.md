[![Build Status](https://secure.travis-ci.org/ryanrolds/quiche.png)](http://travis-ci.org/ryanrolds/quiche)

# Quiche

  Easy to use [Node.js](http://nodejs.org) wrapper for [Google Image Charts - Chart Tools](https://developers.google.com/chart/image/) ([deprecated by Google](https://developers.googleblog.com/2012/04/changes-to-deprecation-policies-and-api.html)) that also supports Image-Charts, a drop-in [replacement for Google Image Charts](https://image-charts.com).

# Examples

## Pie chart

  ![Look, a pie chart](https://chart.googleapis.com/chart?cht=p&chd=t%3A3000%2C2900%2C1500&chco=FF0000%2C0000FF%2C00FF00&chdl=Foo%7CBas%7CBar&chds=a&chxt=y&chs=300x200&chf=bg%2Cs%2C00000000&chl=Foo%7CBas%7CBar)
  ![Look, a pie chart](https://image-charts.com/chart?cht=p&chd=t%3A3000%2C2900%2C1500&chco=FF0000%2C0000FF%2C00FF00&chdl=Foo%7CBas%7CBar&chds=a&chxt=y&chs=300x200&chf=bg%2Cs%2C00000000&chl=Foo%7CBas%7CBar)

     var Quiche = require('quiche');

     var pie = new Quiche('pie');
     pie.setTransparentBackground(); // Make background transparent
     pie.addData(3000, 'Foo', 'FF0000');
     pie.addData(2900, 'Bas', '0000FF');
     pie.addData(1500, 'Bar', '00FF00');
     pie.setLabel(['Foo','Bas','Bar']); // Add labels to pie segments
     var imageUrl = pie.getUrl(true); // First param controls http vs. https

## Bar chart

  ![Bar charts are so cool](https://chart.googleapis.com/chart?cht=bvs&chtt=Some+title+or+something&chts=,,&chd=t:19,19,21,14,19,11,10,18,19,30|4,3,2,3,0,0,3,4,2,2|10,8,2,1,18,9,20,21,19,11|2,1,1,1,1,7,3,6,2,7|1,0,0,1,2,1,0,0,0,0&chco=FF0000,0000FF,008000,00FF00,307000&chdl=Foo|bar|bin|bash|blah&chds=a&chxt=x,y&chxl=0:|1|2|3|4|5|6|7|8|9|10&chbh=a,6,0&chdlp=b|&chdls=,&chs=400x265&chf=bg,s,00000000)
  ![Bar charts are so cool](https://image-charts.com/chart?cht=bvs&chtt=Some+title+or+something&chd=t:19,19,21,14,19,11,10,18,19,30|4,3,2,3,0,0,3,4,2,2|10,8,2,1,18,9,20,21,19,11|2,1,1,1,1,7,3,6,2,7|1,0,0,1,2,1,0,0,0,0&chco=FF0000,0000FF,008000,00FF00,307000&chdl=Foo|bar|bin|bash|blah&chds=a&chxt=x,y&chxl=0:|1|2|3|4|5|6|7|8|9|10&chbh=a,6,0&chdlp=b&chs=400x265&chf=bg,s,00000000)

     var Quiche = require('quiche');

     var bar = new Quiche('bar');
     bar.setWidth(400);
     bar.setHeight(265);
     bar.setTitle('Some title or something');
     bar.setBarStacked(); // Stacked chart
     bar.setBarWidth(0);
     bar.setBarSpacing(6); // 6 pixles between bars/groups
     bar.setLegendBottom(); // Put legend at bottom
     bar.setTransparentBackground(); // Make background transparent

     bar.addData([19, 19, 21, 14, 19, 11, 10, 18, 19, 30], 'Foo', 'FF0000');
     bar.addData([4, 3, 2, 3, 0, 0, 3, 4, 2, 2], 'bar', '0000FF');
     bar.addData([10, 8, 2, 1, 18, 9, 20, 21, 19, 11], 'bin', '008000');
     bar.addData([2, 1, 1, 1, 1, 7, 3, 6, 2, 7], 'bash', '00FF00');
     bar.addData([1, 0, 0, 1, 2, 1, 0, 0, 0, 0], 'blah', '307000');     

     bar.setAutoScaling(); // Auto scale y axis
     bar.addAxisLabels('x', ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']);

     var imageUrl = bar.getUrl(true); // First param controls http vs. https

## Line chart

  ![Lines](http://chart.googleapis.com/chart?cht=lc&chtt=Something+with+lines&chts=,,&chd=t:3000,2900,1500|1000,1500,2000&chco=008000,0000FF&chdl=Blah|Asdf&chds=a&chxt=y,x&chxl=1:|1800|1900|2000&chbh=a,,&chdlp=|&chdls=,&chs=300x200&chf=bg,s,00000000)
  ![Lines](https://image-charts.com/chart?cht=lc&chtt=Something+with+lines&chd=t:3000,2900,1500|1000,1500,2000&chco=008000,0000FF&chdl=Blah|Asdf&chds=a&chxt=y,x&chxl=1:|1800|1900|2000&chbh=a,,&chs=300x200&chf=bg,s,00000000)

     var quiche = require('quiche');

     var chart = quiche('line');
     chart.setTitle('Something with lines');
     chart.addData([3000, 2900, 1500], 'Blah', '008000');
     chart.addData([1000, 1500, 2000], 'Asdf', '0000FF');
     chart.addAxisLabels('x', ['1800', '1900', '2000']);
     chart.setAutoScaling();
     chart.setAxixRange('y', 500, 3500, 250);
     chart.setTransparentBackground();

     var imageUrl = chart.getUrl(true); // First param controls http vs. https

## QR Code

  ![QR Code](https://chart.googleapis.com/chart?cht=qr&chs=100x100&chl=https://github.com/ryanrolds/quiche&chld=L|0)

     var quiche = require('quiche');

     var qr = quiche('qr');
     qr.setLabel('https://github.com/ryanrolds/quiche');
     qr.setWidth(100);
     qr.setHeight(100);

     var url = qr.getUrl(true); // First param controls http vs. https

  Note: currently not supported by Image-Charts

# Documentation

## Install

     $ npm install quiche

## API

### Supported charts

  * line
  * pie
  * bar
  * qr

### All charts

  * chart.setWidth(height [number]);
  * chart.setHeight(height [number]);
  * chart.setTitle(title [string]);
  * chart.setTitleColor(color [hex color]);
  * chart.setTitleSize(size [number]);
  * chart.setTitleRight();
  * chart.setTitleLeft();
  * chart.setLegendOrder(order [string])
  * chart.setLegendLeft();
  * chart.setLegendRight();
  * chart.setLegendBottom();
  * chart.setLegendTop();
  * chart.setLegendVertical();
  * chart.setLegendHorizontal();
  * chart.setLegendHidden();
  * chart.setLegendSize([number]);
  * chart.setTransparentBackground();
  * chart.addAxisLabels(axis [x | y | r], labels [array]);
  * chart.addData(data [number | array], label [string], color [hex color]);
  * chart.setAutoScaling();
  * chart.setHostname(hostname [string]); // e.g. 'image-charts.com' to use Image-Charts (default is the deprecated 'chart.googleapis.com')
  * chart.getUrl(https [boolean]); // true = https, false = http
  * chart.getReq(https [boolean], callback [function]);
  * chart.getPostReq(https [boolean], callback [function]);

### Pie

  * pie.set3D();
  * pie.setLabel();
  * pie.addPercent();

### Bar

  * bar.addData();
  * bar.setBarWidth([number]);
  * bar.setBarSpacing([number]);
  * bar.setBarVertical();
  * bar.setBarHorizontal();
  * bar.setBarGrouped();
  * bar.setBarStacked();
  * bar.setBarOverlapped();
  * bar.setAxisRange(axis ["x", "r", "y"], start [number], end [number], step [number]);

### Line

  * line.addData(data [number | array], label [string], color [hex color], thickness [number], line length [number], space length [number]);
  * line.setSparklines();
  * line.setXY();
  * line.setAxisRange(axis ["x", "r", "y"], start [number], end [number], step [number]);

### QR Code

  * qr.setLabel(data [string]);
  * qr.setEncoding(encoding [UTF-8 | Shift_JS | ISO-8859-1]);
  * qr.setErrorCorrectionLevel(level [string]) // https://developers.google.com/chart/infographics/docs/qr_codes
  * qr.setMargin(margin [number]); // Margin around graphic
  * qr.setWidth(width [number]);
  * qr.setHeight(height [number]);
  * qr.getUrl(https [boolean]); // true = https, false = http

# Features

  * Pie charts
  * Bar charts
  * Auto scaling

# TODO

  * Documentation  
  * More chart types
  * Better confict handling
