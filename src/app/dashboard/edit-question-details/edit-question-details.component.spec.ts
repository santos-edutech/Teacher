import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQuestionDetailsComponent } from './edit-question-details.component';

describe('EditQuestionDetailsComponent', () => {
  let component: EditQuestionDetailsComponent;
  let fixture: ComponentFixture<EditQuestionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditQuestionDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditQuestionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
