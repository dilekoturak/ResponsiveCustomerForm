import { Component } from '@angular/core';
import { DatepickerOptions } from "ng2-datepicker";
import { ProviderService} from "../service/provider.service";
import {Customer} from "../model/customer";
import {NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
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
              private customer: Customer,
              private formatter: NgbDateParserFormatter) {

    this.districtsArr = this.districtsArr;
    this.minDate = { year: this.now.getFullYear(), month: this.now.getMonth() + 1, day: this.now.getDate() };

  }

  onOpen(event: any) {
    console.log(event);
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
    let birthDay = this.formatter.format(birth);
    let scheduleDay = this.formatter.format(sch);
    this.customer.DateOfBirth = birthDay + 'T00:00:00';
    this.customer.ScheduleTime = scheduleDay +'T00:00:00';

    this.customer.DistrictId = Number(dId);

    console.log(this.customer.DateOfBirth);
    console.log(this.customer.ScheduleTime);
    this.customerInfo = this.customer;
    console.log(this.customerInfo);


    this.service.postCustomerService(this.customerInfo)
      .then(res =>{
        this.data = [res];
      })
  }

}
