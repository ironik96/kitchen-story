import { Component } from '@angular/core';
import { FilterItemsService } from '../filter-items.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  query!: string;
  constructor(private searchService: FilterItemsService) {}
  filterFoodItems() {
    this.searchService.filterFoodItems(this.query);
  }
}
