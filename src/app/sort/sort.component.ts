import { Component } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent {
  items: string[] = ['Banana', 'Apple', 'Orange', 'Mango'];

  sortItems() {
    this.items.sort();
  }
}

