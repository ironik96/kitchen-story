import { Component } from '@angular/core';
import { AppStateService } from '../services/app-state.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  query!: string;
  cartLength!: number;
  constructor(private stateService: AppStateService) {
    this.stateService.cart.subscribe((cart) => (this.cartLength = cart.length));
  }
  searchFoodItems() {
    this.stateService.searchFoodItems(this.query);
  }
}
