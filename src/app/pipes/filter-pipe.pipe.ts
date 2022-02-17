import { Pipe, PipeTransform } from '@angular/core';
import { Tasinmaz } from '../models/tasinmaz';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Tasinmaz[], filterText:string): Tasinmaz[] {
    filterText=filterText?filterText.toLocaleLowerCase():null
    return filterText?value.filter((p:Tasinmaz)=>p.tasinmazAdi.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
