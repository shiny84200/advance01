import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inc, increament } from './action';
import { map, mergeMap, of } from 'rxjs';

@Injectable()
export class effects {               // ✅ Class name PascalCase
  constructor(private actions$: Actions) {}   // ✅ Inject Actions properly

  loadCount$ = createEffect(() =>            // ✅ Wrap logic in arrow function
    this.actions$.pipe(
      ofType(inc),                           // ✅ Listen to inc action
      mergeMap(() =>
        of(1, 2, 3).pipe(                    // ✅ Emit 3 numbers
          map(count => increament({ count }))       // ✅ Dispatch inc action with payload
        )
      )
    )
  );
}
