import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApCoursesComponent } from './ap-courses.component';

describe('ApCoursesComponent', () => {
  let component: ApCoursesComponent;
  let fixture: ComponentFixture<ApCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
