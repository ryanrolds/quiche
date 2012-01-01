
# Quiche

  Easy to use wrapper for Google Image Charts.

     var Quiche = require('quiche');
     
     var pie = new Quiche('pie');
     pie.addData(3000, 'Female', 'FF0000');
     pie.addData(2900, 'Male', '0000FF');
     pie.addData(50, 'Unknown', '00FF00');

     var imageUrl = pie.getUrl();

  ![Pie chart](http://chart.googleapis.com/chart?cht=p&chd=t:3000,2900,50&chco=FF0000,0000FF,00FF00&chdl=Female|Male|Unknown&chds=a&chbh=a,4,23&chdlp=|&chdls=,&chs=300x200)

## Install

     $ npm install quiche

## Features

  * Pie charts
  * Bar charts
  * Auto scaling

## TODO

  * Documentation  
  * More chart types
  * Better confict handling
