import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvyLeagueCourseComponent } from './ivy-league-course.component';

describe('IvyLeagueCourseComponent', () => {
  let component: IvyLeagueCourseComponent;
  let fixture: ComponentFixture<IvyLeagueCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IvyLeagueCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IvyLeagueCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
