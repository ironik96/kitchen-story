import { Component, Input } from '@angular/core';
import { AppStateService } from '../services/app-state.service';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css'],
})
export class FoodItemComponent {
  @Input() id!: number;
  @Input() image = '';
  @Input() name = '';
  @Input() price!: number;

  constructor(private stateService: AppStateService) {}

  addItemToCart() {
    this.stateService.addToCart(this.id);
  }
}
