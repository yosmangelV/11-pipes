import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activado = true ): any {
    let trans  = '';

    if ( activado ) {
      for (let i = 0; i < (value.split('')).length; i++) {
        trans += '*';
      }
    } else {
      trans = value;
    }
    return trans;
  }

}
