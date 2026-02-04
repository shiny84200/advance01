import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Guardservices } from './guardservices';

export const canactivateGuard: CanActivateFn = (route, state) => {
  let service = inject(Guardservices)
  let router = inject(Router)

  if(service.isLogin()){
    return true
    
  }
  return false;
};
