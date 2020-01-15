import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { ItemsComponent } from './items/items.component';
import { RegistrationComponent } from './registration/registration.component';
import { PaginationComponent } from './pagination/pagination.component';
import {CreateUserComponent} from './signup/create-user.component';
import {MultiselectComponent} from './multiselect/multiselect.component';
import {DaterangepickerComponent} from './daterangepicker/daterangepicker.component';
import {DatepickerComponent} from './datepicker/datepicker.component';
import {FileuploadComponent}  from './fileupload/fileupload.component';
import { FiledropComponent } from './Filedrop/filedrop.component';
import { TexteditorComponent } from './texteditor/texteditor.component';
import { BarchartComponent } from "./chart/barchart.component";
import { SplinechartComponent } from "./chart/splinechart.component";
import { PiechartComponent } from "./chart/piechart.component";
import { ColorpickerComponent } from "./colorpicker/colorpicker.component";
import {  WizardComponent } from './wizard/wizard.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { HtmltopdfComponent } from './Htmltopdf/htmltopdf.component';

const routes: Routes = [

  {path:'',redirectTo:'/items',pathMatch:'full'},
  {path:'items', component:ItemsComponent},
  {path:'item', children:[
    {path:'', component:ItemComponent},
    {path:'edit/:id', component:ItemComponent},
  ]},
  {path:'registrations', component:RegistrationComponent},
  {path:'registration', children:[
    {path:'', component:RegistrationComponent},
    {path:'edit/:id', component:RegistrationComponent},
  ]},
  {path:'pagination', component:PaginationComponent},
  {path:'signup', component:CreateUserComponent},
  {path:'multiselect', component:MultiselectComponent},
  {path:'daterangepicker', component:DaterangepickerComponent},
  {path:'datepicker', component:DatepickerComponent},
  {path:'fileupload', component:FileuploadComponent},
  {path:'filedrop', component:FiledropComponent},
  {path:'texteditor', component:TexteditorComponent},
  {path:'barchart', component:BarchartComponent},
  {path:'splinechart', component:SplinechartComponent},
  {path:'piechart', component:PiechartComponent},
  {path:'colorpicker', component:ColorpickerComponent},
  {path:'wizard', component:WizardComponent},
  {path:'progressbar', component:ProgressbarComponent},
  {path:'htmltopdf', component:HtmltopdfComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
