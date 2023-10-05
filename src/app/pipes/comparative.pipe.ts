import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'comparative'
})
export class ComparativePipe implements PipeTransform {
  a: string = ''
  b: string = ''
  transform(ageComparative: number): string {
    if (ageComparative >= 18) {
      return this.a = 'Es mayor';
    } else {
      return this.b = 'Es menor';
    }
  }
}
