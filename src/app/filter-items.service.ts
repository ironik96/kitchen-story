import { Injectable } from '@angular/core';
import foodItems from 'src/assets/json/food-items.json';
import FoodItem from './models/FoodItem';

@Injectable({
  providedIn: 'root',
})
export class FilterItemsService {
  allFoodItems: FoodItem[] = foodItems;
  foodItems: FoodItem[] = this.allFoodItems;
  constructor() {}

  filterFoodItems = (query: string): void => {
    this.foodItems = this.allFoodItems.filter((foodItems) =>
      foodItems.name.includes(query)
    );
  };
}
