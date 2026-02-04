import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tablecomponent } from './tablecomponent';

describe('Tablecomponent', () => {
  let component: Tablecomponent;
  let fixture: ComponentFixture<Tablecomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tablecomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tablecomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
