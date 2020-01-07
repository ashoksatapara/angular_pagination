import { Component, OnInit } from '@angular/core';
import { ItemService } from '../shared/item.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styles: []
})
export class ItemsComponent implements OnInit {

  itemList;
  constructor(private service:ItemService,private router:Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    
    this.resfreshList();
  }

  resfreshList(){
    this.service.getItemlist().then(res=>this.itemList=res);

  }
  openForEdit(itemID:number){
    this.router.navigate(['/item/edit/'+itemID]);
  }

  onDeleteItem(id:number){
    if(confirm('Are you sure to delete this record?'))
    {
      this.service.deleteItem(id).then(res=>{
      this.resfreshList();
      this.toastr.warning('Deleted Sucessfully','Restaurant App.');
      });
    }
  }

}
