import { createReducer, on } from '@ngrx/store';
import foodItemsData from 'src/assets/json/food-items.json';
import { filterFoodItems } from './foodItems.actions';
import { AppState } from './food-items.state';

const initialState: AppState = { foodItems: foodItemsData };
export const foodItemsReducer = createReducer(
  initialState,
  on(filterFoodItems, (_, { query }) => ({
    foodItems: initialState.foodItems.filter(({ name }) =>
      name.includes(query ?? '')
    ),
  }))
);
