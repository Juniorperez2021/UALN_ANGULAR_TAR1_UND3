import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFilter'
})
export class CustomFilterPipe implements PipeTransform {
  transform(value: any, arg: string): any {
    // Implementa tu lógica de filtrado personalizada aquí
    // value: el valor al que se aplica el filtro
    // arg: el argumento opcional que puedes pasar al filtro

    // Ejemplo de lógica de filtrado: filtrar los elementos que contienen el argumento en su valor
    return value.filter((item: string) => item.includes(arg));
  }
}
