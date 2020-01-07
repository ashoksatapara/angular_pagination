import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styles: []
})
export class PaginationComponent implements OnInit {
  total= 0;
  per_page= 1;
  StartPage=1;
  data:any[];
  config: any;
  collection = { count: 60, data: [] };
  SearchType=["car","woman","desert"];
  PerPageRec=[1,2,3,4,5,6,7,8,9,10];
  selectedOption:string ="car";
  isValid:boolean = true;
 constructor(private toastr: ToastrService,
   private router:Router,
   private currentRoute:ActivatedRoute,private http:HttpClient) {
    this.config = {
      itemsPerPage: this.per_page,
      currentPage: 1,
      totalItems: this.collection.count
    };

  }

 

ngOnInit() { 

      this.GetData(this.selectedOption,this.per_page,this.StartPage);
    
  }

  GetData(Type:string,PerPage:number,CurPage:number){
  let headers = new HttpHeaders();
  headers = headers.set('Authorization', '563492ad6f91700001000001599057e9d03a4a12bd3e489128e0c82a');
  const url =  `https://api.pexels.com/v1/search?query=${Type}&per_page=${PerPage}&page=${CurPage}`;
  this.http.get(url, { headers: headers }).subscribe(
    (res: any) => {
      
      console.log(res);
      this.total= res.total_results;
      console.log(this.total);
      this.per_page= res.per_page;
     
      this.collection.count = this.total;
      console.log(res.photos);
    
      console.log('this.collection.data ==',this.collection.data);
      
      //if(CurPage>1 ){
        this.collection.data=[];
     // }
      Array.prototype.push.apply(this.collection.data,res.photos); 

      console.log(this.collection.data);

      this.config.itemsPerPage =  this.per_page;
   
      this.config.totalItems = this.collection.count;


    },
    err => {
      console.log(err);
    });
    
  }

  pageChanged(event){
    this.config.currentPage = event;
  
    this.GetData(this.selectedOption,this.per_page,this.config.currentPage);
  }


  navSelected(navName) {
    this.config.currentPage = this.StartPage;
    this.selectedOption = navName;
    
    this.GetData(this.selectedOption,this.per_page,this.config.currentPage);
  }

  navperpageSelected(navName) {
    this.config.currentPage = this.StartPage;
    this.per_page = navName;
   
    this.GetData(this.selectedOption,this.per_page,this.config.currentPage);
  }
 
} 
