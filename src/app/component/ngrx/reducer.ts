// counter.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { increament, decreamnent } from './action';
import {initialState} from'./state'
export const counterReducer = createReducer(
  initialState,
  on(increament, state => ({ ...state, count: state.count + 1 })),
  on(decreamnent, state => ({ ...state, count: state.count - 1 }))
);
