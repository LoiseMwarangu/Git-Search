import { Pipe, PipeTransform } from '@angular/core';
import {GitsearchService} from './service/gitsearch.service'
import{ Repository } from './repository';

@Pipe({
  name: 'bolded'
})
export class BoldedPipe implements PipeTransform {

  transform(value: string): any {
    return value.toUpperCase();
  }

}