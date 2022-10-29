import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolServicesComponent } from './school-services.component';

describe('SchoolServicesComponent', () => {
  let component: SchoolServicesComponent;
  let fixture: ComponentFixture<SchoolServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
