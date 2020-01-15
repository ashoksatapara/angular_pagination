import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: "app-barchart",
  templateUrl: "./barchart.component.html"
})

export class BarchartComponent implements OnInit {
  title = "app";
  chart;
  updateFromInput = false;
  Highcharts = Highcharts;
  chartConstructor = "chart";
  chartCallback;
  chartOptions = {
    series: [],
    exporting: {
      enabled: true
    },
    yAxis: {
      min: 0,
      max: 0,
      lineWidth: 0,
      allowDecimals: false,
      title: {
        text: "Data"
      }
    },
   
  };

  



  
  chartdata;


  constructor(private http:HttpClient) {
    const self = this;
  
    this.getJSON().subscribe(data => {
      console.log(data);
      this.chartdata = data;
     });
    
   
    // saving chart reference using chart callback
    this.chartCallback = chart => {
      self.chart = chart;
    };

   

  }

  ngOnInit() {  }

  onInitChart() {
    const self = this,
      chart = this.chart;
     
     
    
     
      self.chartOptions.series = this.chartdata;

      self.updateFromInput = true;
 
  }

  public getJSON(): Observable<any> {
    return this.http.get('assets/chartdata.json');
  }

     


 
}
