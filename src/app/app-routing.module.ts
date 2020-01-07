import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { ItemsComponent } from './items/items.component';
import { LoginComponent } from './login/login.component';
import { LoginsComponent } from './logins/logins.component';
import { PaginationComponent } from './pagination/pagination.component';
import {CreateUserComponent} from './signup/create-user.component';

const routes: Routes = [
  {path:'',redirectTo:'/',pathMatch:'full'},
  {path:'items', component:ItemsComponent},
  {path:'item', children:[
    {path:'', component:ItemComponent},
    {path:'edit/:id', component:ItemComponent},
  ]},
  {path:'logins', component:LoginsComponent},
  {path:'login', children:[
    {path:'', component:LoginComponent},
    {path:'edit/:id', component:ItemComponent},
  ]},
  {path:'pagination', component:PaginationComponent},
  {path:'signup', component:CreateUserComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
