import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerNavigationDetailsComponent } from './career-navigation-details.component';

describe('CareerNavigationDetailsComponent', () => {
  let component: CareerNavigationDetailsComponent;
  let fixture: ComponentFixture<CareerNavigationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareerNavigationDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareerNavigationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
