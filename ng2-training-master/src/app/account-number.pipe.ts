import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'accountNumber'
})
export class AccountNumberPipe implements PipeTransform {

//  transform(value: string, character: string = 'x', length: number = 6) : any {
  transform(value: string, args?: any): any {
      const character = args ? args[0] : 'x';
      const count = args && args[1] ? args[1] : 6;
      if (value) {
        return Array(count).join(character).concat(value.substr(-4));
      }
      else {
        return '';
      }
  }

}
