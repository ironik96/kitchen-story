import { FoodItem } from './food-item.model';

export interface CartItem {
  item: FoodItem;
  qty: number;
}
