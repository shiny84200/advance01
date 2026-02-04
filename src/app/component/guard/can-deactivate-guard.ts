import { CanDeactivateFn, Router } from '@angular/router';
import { Tablecomponent } from '../Table/tablecomponent/tablecomponent';
import { inject } from '@angular/core';

export const canDeactivateGuard: CanDeactivateFn<Tablecomponent> = (component, currentRoute, currentState, nextState) => {
  let router =inject(Router)
    if(component.canleave()){
     return confirm('You have unsaved changes. Leave page?')
     
  }
  return false;
};
