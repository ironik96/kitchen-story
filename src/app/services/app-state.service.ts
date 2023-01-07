import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FoodItem } from '../models/food-item.model';
import foodItemsJson from 'src/assets/json/food-items.json';

const foodItems: FoodItem[] = foodItemsJson;

@Injectable({
  providedIn: 'root',
})
export class AppStateService {
  foodItems: BehaviorSubject<FoodItem[]> = new BehaviorSubject(foodItems);
  constructor() {}

  searchFoodItems(query: string) {
    this.foodItems.next(this.filterFoodItems(query));
  }

  private filterFoodItems(query: string = ''): FoodItem[] {
    return foodItems.filter(({ name }) =>
      name.toLowerCase().includes(query.toLowerCase())
    );
  }
}
