import { createFeatureSelector, createSelector } from "@ngrx/store";
import { state } from "./state";
export const selectors = createFeatureSelector<state>('counter')
export const selectCount = createSelector(
  selectors,  
  (state: state) => state.count 
);
    
