import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApCourseDetailsComponent } from './ap-course-details.component';

describe('ApCourseDetailsComponent', () => {
  let component: ApCourseDetailsComponent;
  let fixture: ComponentFixture<ApCourseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApCourseDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApCourseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
