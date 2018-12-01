import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgDatepickerModule } from 'ng2-datepicker';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ApiConfig} from "../service/apiConfig";
import {ProviderService} from "../service/provider.service";
import {Customer} from "../model/customer";
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgDatepickerModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [
    ApiConfig,
    ProviderService,
    Customer,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
