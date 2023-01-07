import { Component } from '@angular/core';
import { FoodItem } from '../models/food-item.model';
import { AppStateService } from '../services/app-state.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent {
  foodItems!: FoodItem[];
  constructor(private stateService: AppStateService) {
    stateService.foodItems.subscribe(
      (foodItems) => (this.foodItems = foodItems)
    );
  }
}
