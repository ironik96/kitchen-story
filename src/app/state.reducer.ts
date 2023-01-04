import { Action } from '@ngrx/store';

export const FILTER = 'FILTER';

export function stateReducer(state: string = 'query', action: Action) {
  switch (action.type) {
    case FILTER:
      return (state = 'new query');
    default:
      return state;
  }
}
