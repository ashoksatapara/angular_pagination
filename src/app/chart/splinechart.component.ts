import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";


@Component({
  selector: "app-splinechart",
  templateUrl: "./splinechart.component.html"
})
export class SplinechartComponent implements OnInit {
  ngOnInit() {
   
  }


  highcharts = Highcharts;
  chartOptions = {   
     
    chart: {
        type: "spline",
        backgroundColor: "#33B5FF",
     },
     title: {
        text: "Monthly Average Sales"
     },
     subtitle: {
        text: "Source: teledaddy.com"
     },
     xAxis:{
        categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun",
           "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
     },

   
     yAxis: {          
        title:{
          min: 0,
          max: 10000,
          lineWidth: 0,
          text:"Sales In ($)"
        } 
     },
     tooltip: {
        valueSuffix:" $"
     },
     series: [
        {
           name: 'Kit 1',
           data: [100, 200, 400, 900, 400, 500, 600,500, 560, 666, 666, 775]
        },
        {
           name: 'Kit 2',
           data: [1100, 200, 800, 300, 400, 900, 600,700, 560, 666, 666, 775]
        },
        {
           name: 'Kit 3',
           data: [100, 200, 4100, 300, 400, 500, 600,700, 560, 666, 666, 775]
        },
        {
           name: 'Kit 4',
           data: [100, 600, 400, 300, 1400, 300, 600,800, 560, 666, 666, 775]
        }
     ]

   }
 

}
