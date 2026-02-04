import { createAction, props } from "@ngrx/store";
export const inc = createAction('[increament] decreament the count')
export const increament = createAction(
  '[Counter] Load Count Success',
  props<{ count: number }>()
);
export const decreamnent = createAction('[increament] decreament the count')