import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Item } from './item.mode';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  formData:Item;

constructor(private http:HttpClient) {}
    saveOrUpdateItem(){
      var body={
        ...this.formData
      }
      return this.http.post('http://localhost:7000' + '/Item',body)
    }

  getItemlist(){
    return this.http.get('http://localhost:7000' + '/Item').toPromise();
  }

  getItemByID(id:number):any{
    return this.http.get('http://localhost:7000' + '/Item/' + id).toPromise();
  }

  deleteItem(id:number) {
    return this.http.delete('http://localhost:7000' + '/Item/' + id).toPromise();
  }


}
