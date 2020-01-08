import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html'
})


export class MultiselectComponent implements OnInit {
    
    dropdownList = [];
    selectedItems = [];
    dropdownSettings:IDropdownSettings = {};
   

    ngOnInit() {
      this.dropdownList = [
        { item_id: 1, item_text: 'Mumbai' },
        { item_id: 2, item_text: 'Bangaluru' },
        { item_id: 3, item_text: 'Pune' },
        { item_id: 4, item_text: 'Navsari' },
        { item_id: 5, item_text: 'New Delhi' }
      ];
      this.selectedItems = [];
      this.dropdownSettings = {
        singleSelection: false,
        idField: 'item_id',
        textField: 'item_text',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        itemsShowLimit: 5,
        allowSearchFilter: true
      };

    }

    
    onItemSelect(item: any) {
        let allItems=   this.selectedItems;
        if(allItems.filter(allItem=>allItem.id ==item.id).length==0){
            this.selectedItems.push(item);
        }
     
     
        
        
    }

  
    onSelectAll(items: any) {

    this.selectedItems.push(items);
    console.log(this.selectedItems);
   
    }

    onItemDeSelect(item: any) {

      this.selectedItems.filter(allItem=>allItem.id !=item.id);
      console.log(this.selectedItems);
      }

     

    onItemDeSelectAll(items: any) {

        this.selectedItems.reduce(items);
        console.log(this.selectedItems);
       
        }

        
    onSubmit(form:NgForm){
            console.log(this.selectedItems);
        }
       
  }