import { Action } from '@ngrx/store';
import { FoodItemState } from './models/FoodItemsState';

export const FILTER = 'FILTER';

export function stateReducer(state: string = 'query', action: Action) {
  switch (action.type) {
    case FILTER:
      return (state = 'new query');
    default:
      return state;
  }
}

export class FoodItemsReducer implements Action {
  readonly type = FILTER;
  constructor(public payload: FoodItemState) {}
}
