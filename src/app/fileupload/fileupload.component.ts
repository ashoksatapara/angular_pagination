import { Component, OnInit } from '@angular/core';
import { DateRange } from '@uiowa/date-range-picker';


@Component({
    selector: 'app-fileupload',
    templateUrl: './fileupload.component.html'
  })


export class FileuploadComponent implements OnInit {
   
    selectedFiles = [];
    url="";

  ngOnInit() {
  
  }
      
  urls = new Array<string>();

  detectFiles(event) {
    this.urls = [];
    let files = event.target.files;
    if (files) {
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.urls.push(e.target.result);
        }
        reader.readAsDataURL(file);
      }
    }
  }

    onSubmit(){
        console.log( this.url);
    }

  }