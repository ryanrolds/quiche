
# Quiche

  Easy to use Node.js wrapper for [Google Image Charts](http://code.google.com/apis/chart/image).

## Install

     $ npm install quiche

# Usage

## Pie chart

  <img src="http://chart.googleapis.com/chart?cht=p&chd=t:3000,2900,1500&chco=FF0000,0000FF,00FF00&chdl=Foo|Bas|Bar&chds=a&chbh=a,4,23&chdlp=|&chdls=,&chs=300x200&chf=bg,s,00000000"/>

     var Quiche = require('quiche');
     
     var pie = new Quiche('pie');
     pie.setTransparentBackground();
     pie.addData(3000, 'Foo', 'FF0000');
     pie.addData(2900, 'Bas', '0000FF');
     pie.addData(1500, 'Bar', '00FF00');

     var imageUrl = pie.getUrl(true);

## Bar chart
   
  <img src="https://chart.googleapis.com/chart?cht=bvs&chtt=Some+title+or+something&chts=,,&chd=t:19,19,21,14,19,11,10,18,19,30|4,3,2,3,0,0,3,4,2,2|10,8,2,1,18,9,20,21,19,11|2,1,1,1,1,7,3,6,2,7|1,0,0,1,2,1,0,0,0,0&chco=FF0000,0000FF,008000,00FF00,307000&chdl=Foo|bar|bin|bash|blah&chds=a&chxt=x,y&chxl=0:|1|2|3|4|5|6|7|8|9|10&chbh=a,6,0&chdlp=b|&chdls=,&chs=400x265&chf=bg,s,00000000"/>

     var Quiche = require('quiche');
     
     var bar = new Quiche('bar');
     bar.setWidth(400);
     bar.setHeight(265)
     bar.setTitle('Some title or something');
     bar.setTitle('Age by race in Someplace, USA');
     bar.setBarStacked();
     bar.setBarWidth(0);
     bar.setBarSpacing(6);
     bar.setLegendBottom();
     bar.setAutoScaling();
     bar.setTransparentBackground();

     bar.addData([19, 19, 21, 14, 19, 11, 10, 18, 19, 30], 'Foo', 'FF0000');
     bar.addData([4, 3, 2, 3, 0, 0, 3, 4, 2, 2], 'bar', '0000FF');
     bar.addData([10, 8, 2, 1, 18, 9, 20, 21, 19, 11], 'bin', '008000');
     bar.addData([2, 1, 1, 1, 1, 7, 3, 6, 2, 7], 'bash', '00FF00');
     bar.addData([1, 0, 0, 1, 2, 1, 0, 0, 0, 0], 'blah', '307000');     

     bar.addAxisLabels('x', ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']);
     bar.addAxisLabels('y'); // Needed to show auto-scaled y-axis

     var imageUrl = bar.getUrl(true);

## Features

  * Pie charts
  * Bar charts
  * Auto scaling

## TODO

  * Documentation  
  * More chart types
  * Better confict handling
