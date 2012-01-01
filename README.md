
# Quiche

  Easy to use Node.js wrapper for Google Image Charts.

## Install

     $ npm install quiche

# Usage

## Pie chart

  <img src="http://chart.googleapis.com/chart?cht=p&chd=t:3000,2900,50&chco=FF0000,0000FF,00FF00&chdl=Female|Male|Unknown&chds=a&chbh=a,4,23&chdlp=|&chdls=,&chs=300x200" style="float:right;">

     var Quiche = require('quiche');
     
     var pie = new Quiche('pie');
     pie.addData(3000, 'Female', 'FF0000');
     pie.addData(2900, 'Male', '0000FF');
     pie.addData(50, 'Unknown', '00FF00');

     var imageUrl = pie.getUrl();

## Bar chart
   
  <img src="https://chart.googleapis.com/chart?cht=bvs&chtt=Age+by+race+in+Someplace,+USA&chts=,,&chd=t:19,19,21,14,19,11,10,18,19,18,21,23,26,28,27,9,13,7,11,16,12,9,8|4,3,2,3,0,0,3,4,2,2,3,4,5,6,2,0,3,3,6,2,0,0,1|10,8,2,1,18,9,20,21,19,11,10,8,8,7,10,5,8,2,7,2,4,1,0|2,1,1,1,1,7,3,6,2,7,1,8,11,15,7,4,4,1,1,2,2,2,2|1,0,0,1,2,1,0,0,0,0,0,0,0,1,2,0,0,0,0,0,0,0,0|3,7,4,3,8,2,2,7,5,5,5,3,1,0,0,2,1,0,1,0,0,0,0&chco=76A4FB,0000FF,008000,224499,3072F3,3366CC&chdl=White|AIAN|Asian|AfAm|NHOPN|Other&chds=a&chxt=x,y&chxl=0:|0-5|5-9|10-14|15-17|18-19|20|21|22-24|25-29|30-34|35-39|40-44|45-49|50-54|55-59|60-61|62-64|65-66|67-69|70-74|75-79|80-84|85%20%3E&chbh=a,6,0&chdlp=b|&chdls=,&chs=700x265" style="float:right;">

     var Quiche = require('quiche');
     
     var bar = new Quiche('bar');
     bar.setWidth(700);
     bar.setHeight(265)
     bar.setTitle('Age by race in Someplace, USA');
     bar.setBarStacked();
     bar.setBarWidth(0);
     bar.setBarSpacing(6);
     bar.setLegendBottom();
     bar.setAutoScaling();

     bar.addData([19,19,21,14,19,11,10,18,19,18,21,23,26,28,27,9,13,7,11,16,12,9,8], 'White', '76A4FB');
     bar.addData([4,3,2,3,0,0,3,4,2,2,3,4,5,6,2,0,3,3,6,2,0,0,1], 'AIAN', '0000FF');
     bar.addData([10,8,2,1,18,9,20,21,19,11,10,8,8,7,10,5,8,2,7,2,4,1,0], 'Asian', '008000');
     bar.addData([2,1,1,1,1,7,3,6,2,7,1,8,11,15,7,4,4,1,1,2,2,2,2], 'AfAm', '224499');
     bar.addData([1,0,0,1,2,1,0,0,0,0,0,0,0,1,2,0,0,0,0,0,0,0,0], 'NHOPN', '3072F3');
     bar.addData([3,7,4,3,8,2,2,7,5,5,5,3,1,0,0,2,1,0,1,0,0,0,0], 'Other', '3366CC');

     bar.addAxisLabels('y'); // Needed to show auto-scaled y-axis
     bar.addAxisLabels('x', ['0-5','5-9','10-14','15-17','18-19','20','21','22-24','25-29','30-34','35-39',
                              '40-44','45-49','50-54','55-59','60-61','62-64','65-66','67-69','70-74','75-79',
                              '80-84','85 >']);

     var imageUrl = bar.getUrl();

## Features

  * Pie charts
  * Bar charts
  * Auto scaling

## TODO

  * Documentation  
  * More chart types
  * Better confict handling
