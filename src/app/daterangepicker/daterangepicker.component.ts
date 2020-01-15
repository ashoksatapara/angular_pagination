import { Component, OnInit } from '@angular/core';
import { DateRange } from '@uiowa/date-range-picker';


@Component({
    selector: 'app-daterangepicker',
    templateUrl: './daterangepicker.component.html'
  })


export class DaterangepickerComponent implements OnInit {
    dateRange = new DateRange();
 
   
  ngOnInit(): void {
  
  }
      
  onSubmit(){
    console.log(this.dateRange);
}


  }