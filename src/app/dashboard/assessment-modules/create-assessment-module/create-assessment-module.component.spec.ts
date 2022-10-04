import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAssessmentModuleComponent } from './create-assessment-module.component';

describe('CreateAssessmentModuleComponent', () => {
  let component: CreateAssessmentModuleComponent;
  let fixture: ComponentFixture<CreateAssessmentModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAssessmentModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAssessmentModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
