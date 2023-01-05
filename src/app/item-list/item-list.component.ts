import { Component } from '@angular/core';
import FoodItem from '../models/FoodItem';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FoodItemState,SELECTOR } from '../models/FoodItemsState';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent {
  foodItems!: FoodItem[];
  message$: Observable<FoodItemState>;
  constructor(private store: Store<FoodItemState>) {
    this.message$ = this.store.select(SELECTOR);
  }
  ngOnInit() {
    // this.foodItems = this.searchService.foodItems;
    this.foodItems = [];
  }
}
