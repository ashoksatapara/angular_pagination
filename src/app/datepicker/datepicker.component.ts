import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DateRange } from '@uiowa/date-range-picker';


@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html'
 })


export class DatepickerComponent implements OnInit {
    

  date: Date;

   
  ngOnInit(): void {
  
  }
      
  
  onSubmit(){
    console.log(this.date);
}

  }