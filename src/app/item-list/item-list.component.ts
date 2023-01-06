import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../food-items-store/food-items.state';
import FoodItem from '../models/FoodItem';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent {
  foodItems$: Observable<FoodItem[]> = this.store.select('foodItems');
  foodItems!: any;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.foodItems$.subscribe((foodItems) => (this.foodItems = foodItems));
  }
}
