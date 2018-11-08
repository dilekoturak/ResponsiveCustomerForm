import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {
  dateNow : Date = new Date();
  dateNowISO = this.dateNow.toISOString();
  transform(value: any, args?: any): any {
    return this.dateNowISO;
  }

}
