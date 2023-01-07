import { Component } from '@angular/core';
import { AppStateService } from '../services/app-state.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  query!: string;
  constructor(private stateService: AppStateService) {}
  searchFoodItems() {
    this.stateService.searchFoodItems(this.query);
  }
}
