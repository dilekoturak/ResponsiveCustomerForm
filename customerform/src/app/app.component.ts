import { Component } from '@angular/core';
import { DatepickerOptions } from "ng2-datepicker";
import { ProviderService} from "../service/provider.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  date: Date;
  birth: Date;
  data = [];
  cityArr=[];
  selectedCity:string;
  selectedDistrict:string;
  districtsArr = [];
  dis:any;

  customerInfo:any;

  constructor(private service: ProviderService) {
    this.date = new Date();
    this.birth = new Date();
    this.districtsArr = this.districtsArr;
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

  postCity(){
    this.service.postCustomerService(this.customerInfo)
      .then(res =>{
        console.log(res);
      })
  }

}
