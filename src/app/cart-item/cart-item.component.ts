import { Component, Input } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { AppStateService } from '../services/app-state.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent {
  @Input() cartItem!: CartItem;
  get id(): number {
    return this.cartItem.item.id;
  }
  get name(): string {
    return this.cartItem.item.name;
  }
  get image(): string {
    return this.cartItem.item.image;
  }
  get price(): string {
    return (this.cartItem.item.price * this.cartItem.qty).toPrecision(3);
  }

  get qty(): number {
    return this.cartItem.qty;
  }

  constructor(private stateService: AppStateService) {}

  incrementQty() {
    this.stateService.editQty(this.id, 'Increment');
  }
  decrementQty() {
    this.stateService.editQty(this.id, 'decrement');
  }
}
