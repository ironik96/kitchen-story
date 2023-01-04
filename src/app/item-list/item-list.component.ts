import { Component } from '@angular/core';
import { FilterItemsService } from '../filter-items.service';
import FoodItem from '../models/FoodItem';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

interface AppState {
  message: string;
}

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent {
  foodItems!: FoodItem[];
  message$: Observable<string>;
  constructor(
    private searchService: FilterItemsService,
    private store: Store<AppState>
  ) {
    this.message$ = this.store.select('message');
  }
  ngOnInit() {
    this.foodItems = this.searchService.foodItems;
  }
}
