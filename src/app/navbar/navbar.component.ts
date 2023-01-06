import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../food-items-store/food-items.state';
import { filterFoodItems } from '../food-items-store/foodItems.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  query!: string;
  constructor(private store: Store<AppState>) {}
  changeState(query: string) {
    this.store.dispatch(filterFoodItems({ query }));
  }
}
