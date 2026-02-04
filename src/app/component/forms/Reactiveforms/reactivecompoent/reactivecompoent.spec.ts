import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reactivecompoent } from './reactivecompoent';

describe('Reactivecompoent', () => {
  let component: Reactivecompoent;
  let fixture: ComponentFixture<Reactivecompoent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reactivecompoent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reactivecompoent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
