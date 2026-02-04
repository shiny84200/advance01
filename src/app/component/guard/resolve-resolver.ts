import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Tableservices } from '../services/tableservices';

export const resolveResolver: ResolveFn<any> = (route, state) => {
  let service = inject(Tableservices)
  return service.getUsers()
};
