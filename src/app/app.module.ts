import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './item/item.component';
import { ItemService } from './shared/item.service';
import { LoginsComponent } from './logins/logins.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './shared/login.service';
import { PaginationComponent } from './pagination/pagination.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { MustMatchDirective } from './shared/must-match.directive';
import {CreateUserComponent} from './signup/create-user.component';
import { HelloComponent } from './shared/hello.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {MultiselectComponent} from './multiselect/multiselect.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemComponent,
    LoginsComponent,
    LoginComponent,
    PaginationComponent,
    MustMatchDirective,
    CreateUserComponent,
    HelloComponent,
    MultiselectComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot()
  ],
  entryComponents:[],
  providers: [ItemService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
