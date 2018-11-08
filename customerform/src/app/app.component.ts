import { Component } from '@angular/core';
import { DatepickerOptions } from "ng2-datepicker";
import { ProviderService} from "../service/provider.service";
import {Customer} from "../model/customer";
import { DatePipe } from "@angular/common";
import * as moment from 'moment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  now: Date = new Date();
  minDate: any;
  data = [];
  cityArr=[];
  selectedCity:string;
  districtsArr = [];
  dis:any;
  customerInfo:any;

  constructor(private service: ProviderService,
              private customer: Customer) {

    this.districtsArr = this.districtsArr;
    this.minDate = { year: this.now.getFullYear(), month: this.now.getMonth() + 1, day: this.now.getDate() };

  }


  ngOnInit(){
    this.getCity();
  }

  getCity() {
    this.service.getCityService()
      .then(res =>{
        this.data = [res];
        for(let cities of this.data){
          for(let city of cities){
            this.cityArr.push(city);
          }
        }
        console.log(this.cityArr);

      }, (err) => {
        console.log(err);
      })
  }

  onChange(id) {
    console.log(id);
    for(let city of this.cityArr){
        if(city.id == id){
          this.dis = [];
          for(var i=0; i<city.districts.length; i++){
            let num = city.districts[i];
            this.dis.push(num);
          }
          console.log(this.dis);
        }
    }
  }

  postCustomer(sch,birth,dId){

    this.customer.DateOfBirth = birth;
    this.customer.ScheduleTime = sch;

    this.customer.DateOfBirth =  moment().format('YYYY-MM-DDThh:mm:ss');
    this.customer.ScheduleTime =  moment().format('YYYY-MM-DDThh:mm:ss');

    this.customer.DistrictId = Number(dId);

    this.customerInfo = this.customer;
    console.log(this.customer.DateOfBirth);


    this.service.postCustomerService(this.customerInfo)
      .then(res =>{
        this.data = [res];
      })
  }

}
