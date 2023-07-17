import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-currency',
  templateUrl: './currency-component.component.html',
  styleUrls: ['./currency-component.component.css']
})
export class CurrencyComponentComponent {
  amount: number = 1000.5;
}

@NgModule({
  imports: [CommonModule]
})
export class CurrencyModule { }
