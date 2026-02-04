import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dynamiccom } from './dynamiccom';

describe('Dynamiccom', () => {
  let component: Dynamiccom;
  let fixture: ComponentFixture<Dynamiccom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dynamiccom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dynamiccom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
