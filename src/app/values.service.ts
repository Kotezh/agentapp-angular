import { Injectable } from '@angular/core';
import { ValueData } from './value.interface';

@Injectable()

export class ValuesDataService {
  valuesData?: ValueData;

  getValues() {
    return this.valuesData;
  }

  addNewValues(newValuesData: ValueData) {
    this.valuesData = newValuesData;
  };
}
