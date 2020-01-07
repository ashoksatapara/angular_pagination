import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/shared/item.service';
import { NgForm } from '@angular/forms';
import { Item } from '../shared/item.mode';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: []
})
export class ItemComponent implements OnInit {
  
  isValid:boolean = true;
 constructor(private service:ItemService ,
   private toastr: ToastrService,
   private router:Router,
   private currentRoute:ActivatedRoute) { }


 ngOnInit() { 
   let itemID = this.currentRoute.snapshot.paramMap.get('id');
 console.log("item id:",itemID);
   if (itemID == null)
   this.resetForm();
   else{
     this.service.getItemByID(parseInt(itemID)).then((res:Item)=>{
      console.log(res) ;
      this.service.formData= res;
     
    });
   }   
 }
resetForm(form?:NgForm){
  if (form = null)
  form.resetForm();
  this.service.formData = {
   ItemID:null,
   Name:'',
   Price:null
  };
}


validateForm(){
 this.isValid=true;
 if(this.service.formData.Name.length==0)
 this.isValid=false;
 else if(this.service.formData.Price==0)
 this.isValid=false;
 
 return this.isValid;

}

onSubmit(form:NgForm){
 if(this.validateForm()){
   this.service.saveOrUpdateItem().subscribe(res=>{
     this.resetForm();
     this.toastr.success('Submitted Sucessfully','Restaurant App.');
     this.router.navigate(['/items']);
   })
 }
}
}
