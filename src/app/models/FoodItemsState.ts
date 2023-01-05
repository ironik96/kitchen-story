import FoodItem from './FoodItem';

export interface FoodItemState {
  readonly items: FoodItem[];
  readonly query: string;
}

export const SELECTOR = 'items';
