import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, timer } from 'rxjs';

@Component({
  selector: "app-progressbar",
  templateUrl: "./progressbar.component.html"
})

export class ProgressbarComponent implements OnInit {
    time: number = 0;
    interval;
progressvalue;

    constructor(private http:HttpClient) {
       
  }

  ngOnInit() {   
      
        setInterval(() => {
        this.time++;
       
      },1000)
        

  }




 
}
