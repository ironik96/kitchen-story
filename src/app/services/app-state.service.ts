import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FoodItem } from '../models/food-item.model';
import foodItemsJson from 'src/assets/json/food-items.json';
import { CartItem } from '../models/cart-item.model';

type QtyAction = 'Increment' | 'decrement';
const FOOD_ITEMS: FoodItem[] = foodItemsJson;
@Injectable({
  providedIn: 'root',
})
export class AppStateService {
  foodItems: BehaviorSubject<FoodItem[]> = new BehaviorSubject(FOOD_ITEMS);
  cart: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>(
    this._cartCache
  );
  constructor() {}

  searchFoodItems(query: string) {
    this.foodItems.next(this._filterFoodItems(query));
  }

  addToCart(id: number): void {
    if (this._itemInCart(id)) this._setCart(this._incrementCartItemQty(id));
    else this._setCart([...this._currentCart, this._newCartItem(id)]);
  }

  editQty(itemId: number, editType: QtyAction) {
    if (editType === 'Increment')
      this._setCart(this._incrementCartItemQty(itemId));
    else this._setCart(this._decrementCartItemQty(itemId));
  }

  private _incrementCartItemQty(itemId: number): CartItem[] {
    return this._currentCart.map((cartItem) => {
      if (cartItem.item.id === itemId) cartItem.qty++;
      return cartItem;
    });
  }

  private _decrementCartItemQty(itemId: number): CartItem[] {
    return this._currentCart
      .filter((cartItem) => {
        if (cartItem.item.id === itemId) return cartItem.qty !== 1;
        return true;
      })
      .map((cartItem) => {
        if (cartItem.item.id === itemId) cartItem.qty--;
        return cartItem;
      });
  }

  private get _cartCache(): CartItem[] {
    const cart = sessionStorage.getItem('cart');
    if (cart) return JSON.parse(cart);
    return [];
  }

  private _setCart(state: CartItem[]): void {
    sessionStorage.setItem('cart', JSON.stringify(state));
    this.cart.next(state);
  }

  private get _currentCart(): CartItem[] {
    return this.cart.value;
  }

  private _newCartItem(itemId: number): CartItem {
    return { item: this._getFoodItem(itemId), qty: 1 };
  }

  private _getFoodItem(itemId: number): FoodItem {
    return FOOD_ITEMS.find(({ id }) => id === itemId)!;
  }

  private _itemInCart(id: number): boolean {
    return this._currentCart.some(({ item }) => item.id === id);
  }

  private _filterFoodItems(query: string = ''): FoodItem[] {
    return FOOD_ITEMS.filter(({ name }) =>
      name.toLowerCase().includes(query.toLowerCase())
    );
  }
}
