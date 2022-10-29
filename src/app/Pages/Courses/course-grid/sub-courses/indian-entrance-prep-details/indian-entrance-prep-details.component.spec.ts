import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianEntrancePrepDetailsComponent } from './indian-entrance-prep-details.component';

describe('IndianEntrancePrepDetailsComponent', () => {
  let component: IndianEntrancePrepDetailsComponent;
  let fixture: ComponentFixture<IndianEntrancePrepDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndianEntrancePrepDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndianEntrancePrepDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
