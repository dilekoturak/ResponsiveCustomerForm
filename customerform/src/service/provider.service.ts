import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiConfig} from "./apiConfig";

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private http: HttpClient,
              private url: ApiConfig) {

      this.url = this.url;

  }

  getCityService(){
    return new Promise((resolve,reject) => {
      this.http.get(this.url.cityURL + '/city')
        .subscribe(response => {
          resolve(response);
        }, (err) => {
          reject(err);
        });
    });
  }

  postCustomerService(creds){
    return new Promise((resolve,reject) => {
      this.http.post(this.url.customerURL + '/customer', JSON.stringify(creds))
        .subscribe(response => {
          resolve(response);
        }, (err) => {
          reject(err);
        });
    });
  }

}
