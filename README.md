
# Quiche

  Easy to use Node.js wrapper for [Google Image Charts](http://code.google.com/apis/chart/image).

# Examples

## Pie chart

  ![Look, a pie chart](http://chart.googleapis.com/chart?cht=p&chd=t:3000,2900,1500&chco=FF0000,0000FF,00FF00&chdl=Foo|Bas|Bar&chds=a&chbh=a,4,23&chdlp=|&chdls=,&chs=300x200&chf=bg,s,00000000)

     var Quiche = require('quiche');
     
     var pie = new Quiche('pie');
     pie.setTransparentBackground(); // Make background transparent
     pie.addData(3000, 'Foo', 'FF0000');
     pie.addData(2900, 'Bas', '0000FF');
     pie.addData(1500, 'Bar', '00FF00');

     var imageUrl = bar.getUrl(true); // First param controls http vs. https

## Bar chart
   
  ![Bar charts are so cool](https://chart.googleapis.com/chart?cht=bvs&chtt=Some+title+or+something&chts=,,&chd=t:19,19,21,14,19,11,10,18,19,30|4,3,2,3,0,0,3,4,2,2|10,8,2,1,18,9,20,21,19,11|2,1,1,1,1,7,3,6,2,7|1,0,0,1,2,1,0,0,0,0&chco=FF0000,0000FF,008000,00FF00,307000&chdl=Foo|bar|bin|bash|blah&chds=a&chxt=x,y&chxl=0:|1|2|3|4|5|6|7|8|9|10&chbh=a,6,0&chdlp=b|&chdls=,&chs=400x265&chf=bg,s,00000000)

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

     var chart = quiche('line');
     chart.setTitle('Something with lines');
     chart.addData([3000, 2900, 1500], 'Blah', '008000');
     chart.addData([1000, 1500, 2000], 'Asdf', '0000FF');
     chart.addAxisLabels('x', ['1800', '1900', '2000']);
     chart.setAutoScaling();
     chart.setTransparentBackground();

     var imageUrl = bar.getUrl(true); // First param controls http vs. https     

# Documentation

## Install

     $ npm install quiche

## Chart types
 
  Pie (regular & 3D), and Bar (horizontal, verticle, stacked, grouped, overlapped)

# Features

  * Pie charts
  * Bar charts
  * Auto scaling

# TODO

  * Documentation  
  * More chart types
  * Better confict handling
