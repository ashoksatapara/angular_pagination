import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import { timer } from 'rxjs';


@Component({
  selector: "app-piechart",
  templateUrl: "./piechart.component.html"
})
export class PiechartComponent implements OnInit {
 
 
   title = "app";
   chart;
   updateFromInput = false;
   Highcharts = Highcharts;
   chartConstructor = "chart";
   chartCallback;
   highcharts = Highcharts;
   chartOptions = {   
      
   };
 
   constructor() {
     const self = this;
 
     // saving chart reference using chart callback
     this.chartCallback = chart => {
       self.chart = chart;
     };
   }
 
   ngOnInit() {this.onInitChart()}
 

   onInitChart() {


     const self = this,
       chart = this.chart;
  
       self.chartOptions = {   
         chart : {
            plotBorderWidth: null,
            plotShadow: false
         },
         title : {
            text: 'Browser market shares at a specific website, 2014'   
         },
         tooltip : {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
         },
         plotOptions : {
            pie: {
               allowPointSelect: true,
               cursor: 'pointer',
               dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}%</b>: {point.percentage:.1f} %',
                  style: {
                     color: 'black'
                  }
               }
            }
         },
         series : [{
            type: 'pie',
            name: 'Browser share',
            data: [
               ['Firefox',   45.0],
               ['IE',       26.8],
               {
                  name: 'Chrome',
                  y: 12.8,
                  sliced: true,
                  selected: true
               },
               ['Safari',    8.5],
               ['Opera',     6.2],
               ['Others',      0.7]
            ]
         }]
      }

      
   }
  



}
