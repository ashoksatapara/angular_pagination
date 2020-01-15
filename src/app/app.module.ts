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
import { RegistrationComponent } from './registration/registration.component';
import { LoginService } from './shared/login.service';
import { PaginationComponent } from './pagination/pagination.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { MustMatchDirective } from './shared/must-match.directive';
import {CreateUserComponent} from './signup/create-user.component';
import { HelloComponent } from './shared/hello.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {MultiselectComponent} from './multiselect/multiselect.component';
import {DaterangepickerComponent} from './daterangepicker/daterangepicker.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DatepickerComponent} from './datepicker/datepicker.component';
import { DateRangePickerModule } from '@uiowa/date-range-picker';
import {FileuploadComponent}  from './fileupload/fileupload.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FiledropComponent } from './Filedrop/filedrop.component';
import { NgxEditorModule } from 'ngx-editor';
import { TexteditorComponent } from './texteditor/texteditor.component';
import { HighchartsChartModule } from "highcharts-angular";
import { BarchartComponent } from "./chart/barchart.component";
import { SplinechartComponent } from "./chart/splinechart.component";
import { PiechartComponent } from "./chart/piechart.component";
import { ColorPickerModule } from 'ngx-color-picker';
import { ColorpickerComponent } from "./colorpicker/colorpicker.component";
import { ArchwizardModule } from 'angular-archwizard';
import { WizardComponent } from './wizard/wizard.component';
import {ProgressBarModule} from "angular-progress-bar";
import {ProgressbarComponent } from './progressbar/progressbar.component';
import { HtmltopdfComponent } from './Htmltopdf/htmltopdf.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemComponent,
    RegistrationComponent,
    PaginationComponent,
    MustMatchDirective,
    CreateUserComponent,
    HelloComponent,
    MultiselectComponent,
    DaterangepickerComponent,
    DatepickerComponent,
    FileuploadComponent,
    FiledropComponent,
    TexteditorComponent,
    BarchartComponent,
    SplinechartComponent, 
    PiechartComponent,
    ColorpickerComponent,
    WizardComponent,
    ProgressbarComponent,
    HtmltopdfComponent
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
    NgMultiSelectDropDownModule.forRoot(),
    NgbModule,
    DateRangePickerModule,
    NgxDropzoneModule,
    NgxEditorModule,
    HighchartsChartModule,
    ColorPickerModule,
    ArchwizardModule,
    ProgressBarModule
  ],
  entryComponents:[],
  providers: [ItemService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
