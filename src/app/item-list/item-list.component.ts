import { Component, OnInit } from '@angular/core';
import foodItems from 'src/assets/json/food-items.json';

interface FoodItem {
  id: number;
  name: string;
  image: string;
  price: number;
}

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent {
  foodItems: FoodItem[] = foodItems;
  ngOnInit() {
    console.log(foodItems);
  }
}
