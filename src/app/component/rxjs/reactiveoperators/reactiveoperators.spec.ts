import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reactiveoperators } from './reactiveoperators';

describe('Reactiveoperators', () => {
  let component: Reactiveoperators;
  let fixture: ComponentFixture<Reactiveoperators>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reactiveoperators]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reactiveoperators);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
