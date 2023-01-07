import { Component, OnInit } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { AppStateService } from '../services/app-state.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  cart!: CartItem[];
  constructor(private stateService: AppStateService) {}
  ngOnInit(): void {
    this.stateService.cart.subscribe((cart) => (this.cart = cart));
  }

  get totalPrice(): string {
    return this.cart
      .reduce((sum, cartItem) => sum + cartItem.item.price * cartItem.qty, 0)
      .toPrecision(3);
  }
}
