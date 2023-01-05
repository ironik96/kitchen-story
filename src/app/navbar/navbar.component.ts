import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FoodItemState } from '../models/FoodItemsState';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  query!: string;
  constructor(private store: Store<FoodItemState>) {}
  changeState() {
    this.store.dispatch({ type: 'FILTER' });
  }
}
