import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { CurrencyComponentComponent } from './currency-component/currency-component.component';
import { CaseComponent } from './case/case.component';
import { NumberComponent } from './number/number.component';
import { DateComponent } from './date/date.component';
import { SortComponent } from './sort/sort.component';

import { CustomFilterPipe } from 'src/app/case/custom-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyComponentComponent,
    CaseComponent,
    NumberComponent,
    DateComponent,
    SortComponent,
    CustomFilterPipe
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

