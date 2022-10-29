import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolServicesDetailsComponent } from './school-services-details.component';

describe('SchoolServicesDetailsComponent', () => {
  let component: SchoolServicesDetailsComponent;
  let fixture: ComponentFixture<SchoolServicesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolServicesDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolServicesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
