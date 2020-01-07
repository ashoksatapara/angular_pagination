import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Login } from './login.mode';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  formData:Login ;

constructor(private http:HttpClient) {}
    saveOrUpdateLogin(){
      var body={
        ...this.formData
      }
      return this.http.post('http://localhost:7000' + '/Login',body)
    }

  getLoginlist(){
    return this.http.get('http://localhost:7000' + '/Login').toPromise();
  }

  getLoginByID(id:number):any{
    return this.http.get('http://localhost:7000' + '/Login/' + id).toPromise();
  }

  deleteLogin(id:number) {
    return this.http.delete('http://localhost:7000' + '/Login/' + id).toPromise();
  }

}
