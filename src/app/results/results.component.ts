import { Component, OnInit } from '@angular/core';
import { ValuesDataService } from '../values.service';
import { ValueData } from '../value.interface';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  values?: ValueData;
  planeEconom?: number;
  planeAdvance?: number;
  planeLux?: number;
  trainEconom?: number;
  trainAdvance?: number;
  trainLux?: number;

  constructor(private valuesService: ValuesDataService) {}

  getTariffPlaneEconom(values: ValueData) {
    const { distance, weight } = values;
    let price = 0;
    if (weight > 20) {
      console.log(
        'Аэрофлот, тариф Эконом: Превышен максимально допустимый вес багажа'
      );
      this.planeEconom = undefined;
      return;
    } else {
      if (weight <= 5) {
        price = distance * 4;
      } else {
        price = distance * 4 + 4000;
      }
      this.planeEconom = Math.round(price);
    }
  }

  getTariffPlaneAdvance(values: ValueData) {
    const { distance, age, weight } = values;
    let price = 0;
    let discountPrice = 0;
    if (weight > 50) {
      console.log(
        'Аэрофлот, тариф Продвинутый: Превышен максимально допустимый вес багажа'
      );
      this.planeAdvance = undefined;
      return;
    } else {
      if (age < 7) {
        discountPrice = distance * 8 * 0.7;
      } else {
        discountPrice = distance * 8;
      }
      if (weight > 20) {
        price = discountPrice + 5000;
      } else {
        price = discountPrice;
      }
      this.planeAdvance = Math.round(price);
    }
  }

  getTariffPlaneLux(values: ValueData) {
    const { distance, age, weight } = values;
    let price = 0;
    let discountPrice = 0;
    if (weight > 60) {
      console.log(
        'Аэрофлот, тариф Люкс: Превышен максимально допустимый вес багажа'
      );
      this.planeLux = undefined;
      return;
    } else {
      if (age < 16) {
        discountPrice = (distance * 15) * 0.7;
      } else {
        discountPrice = distance * 15;
      }
      price = discountPrice;
      this.planeLux = Math.round(price);
    }
  }

  getTariffTrainEconom(values: ValueData) {
    const { distance, age, weight } = values;
    let price = 0;
    let discountPrice = 0;
    if (weight > 50) {
      console.log(
        'РЖД, тариф Эконом: Превышен максимально допустимый вес багажа'
      );
      this.trainEconom = undefined;
      return;
    } else {
      if (age < 5) {
        discountPrice = (distance * 0.5) * 0.5;
      } else {
        discountPrice = (distance * 0.5)
      }
      if (weight > 15) {
        price = (weight - 15) * 50 + discountPrice;
      } else {
        price = discountPrice;
      }
      this.trainEconom = Math.round(price);
    }
  }

  getTariffTrainAdvance(values: ValueData) {
    const { distance, age, weight } = values;
    let price = 0;
    let discountPrice = 0;
    if (weight > 60) {
      console.log(
        'РЖД, тариф Продвинутый: Превышен максимально допустимый вес багажа'
      );
      this.trainAdvance = undefined;
      return;
    } else {
      if (age < 8) {
        discountPrice = (distance * 2) * 0.7;
      } else {
        discountPrice = distance * 2;
      }
      if (weight > 20) {
        price = (weight - 20) * 50 + discountPrice;
      }
      else {
        price = discountPrice;
      }
      this.trainAdvance = Math.round(price);
    }
  }

  getTariffTrainLux(values: ValueData) {
    const { distance, age, weight } = values;
    let price = 0;
    let discountPrice = 0;
    if (weight > 60) {
      console.log(
        'РЖД, тариф Люкс: Превышен максимально допустимый вес багажа'
      );
      this.trainLux = undefined;
      return;
    } else {
      if(age < 16) {
        discountPrice = distance * 4 * 0.8;
      } else {
        discountPrice = distance * 4
      }
      price = discountPrice;
      this.trainLux = Math.round(price);
    }
  }

  ngDoCheck() {
    this.values = this.valuesService.getValues();
    if (this.values) {
      this.getTariffPlaneEconom(this.values);
      this.getTariffPlaneAdvance(this.values);
      this.getTariffPlaneLux(this.values);
      this.getTariffTrainEconom(this.values);
      this.getTariffTrainAdvance(this.values);
      this.getTariffTrainLux(this.values);
    }
  }
  ngOnInit(): void {}
}
