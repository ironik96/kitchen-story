import { createAction, props } from '@ngrx/store';

export const filterFoodItems = createAction(
  '[Food Item List] Filter Food Items',
  props<{ query: string }>()
);
