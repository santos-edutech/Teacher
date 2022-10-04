import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentNameComponent } from './assessment-name.component';

describe('AssessmentNameComponent', () => {
  let component: AssessmentNameComponent;
  let fixture: ComponentFixture<AssessmentNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssessmentNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssessmentNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
