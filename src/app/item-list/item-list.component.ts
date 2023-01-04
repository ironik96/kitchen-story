import { Component } from '@angular/core';
import { FilterItemsService } from '../filter-items.service';
import FoodItem from '../models/FoodItem';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent {
  foodItems!: FoodItem[];
  constructor(private searchService: FilterItemsService) {}
  ngOnInit() {
    this.foodItems = this.searchService.foodItems;
  }
}
