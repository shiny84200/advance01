import { TestBed } from '@angular/core/testing';

import { Tableservices } from './tableservices';

describe('Tableservices', () => {
  let service: Tableservices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tableservices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
