import { Component, OnInit } from '@angular/core';



@Component({
    selector: 'app-filedrop',
    templateUrl: './filedrop.component.html'
  })


export class FiledropComponent implements OnInit {
  files: File[] = [];
 
  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }
   
  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
 
   
  ngOnInit(): void {
  
  }
      
  onSubmit(){
    console.log(this.files);
}


  }