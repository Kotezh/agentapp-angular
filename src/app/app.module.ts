import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ResultsComponent } from './results/results.component';
import { ValuesDataService } from './values.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ResultsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ValuesDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
