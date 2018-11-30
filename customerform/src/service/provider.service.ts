import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
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
      this.http.get(this.url.cityURL + '/cities')
        .subscribe(response => {
          resolve(response);
        }, (err) => {
          reject(err);
        });
    });
  }

  postCustomerService(creds){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'text/javascript'
    });
    return new Promise((resolve,reject) => {
      this.http.post(this.url.customerURL + '/customer/schedule', JSON.stringify(creds),{headers: headers})
        .subscribe(response => {
          resolve(response);
        }, (err) => {
          reject(err);
        });
    });
  }

}
