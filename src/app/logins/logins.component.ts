import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-logins',
  templateUrl: './logins.component.html',
  styles: []
})
export class LoginsComponent implements OnInit {
  model: any = {};
  loginList;
  constructor(private service:LoginService,private router:Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    
    this.resfreshList();
  }

  

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }


  resfreshList(){
    this.service.getLoginlist().then(res=>this.loginList=res);

  }
  openForEdit(loginID:number){
    this.router.navigate(['/login/edit/'+loginID]);
  }

  onDeleteLogin(id:number){
    if(confirm('Are you sure to delete this record?'))
    {
      this.service.deleteLogin(id).then(res=>{
      this.resfreshList();
      this.toastr.warning('Deleted Sucessfully','Restaurant App.');
      });
    }
  }

}
