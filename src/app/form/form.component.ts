import { Component } from '@angular/core';
import { ValuesDataService } from '../values.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
    distance: string = '';
    age: string = '';
    weight: string = '';
    mainForm = new FormGroup({
      distance: new FormControl(''),
      age: new FormControl(''),
      weight: new FormControl(''),
    });

  constructor(private valuesService: ValuesDataService ) { }

  onSubmit() {
    const newValues = {
      distance: Number(this.distance),
      age: Number(this.age),
      weight: Number(this.weight)
  };

    this.valuesService.addNewValues(newValues)
  }
}
