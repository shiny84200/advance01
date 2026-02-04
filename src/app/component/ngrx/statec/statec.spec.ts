import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Statec } from './statec';

describe('Statec', () => {
  let component: Statec;
  let fixture: ComponentFixture<Statec>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Statec]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Statec);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
