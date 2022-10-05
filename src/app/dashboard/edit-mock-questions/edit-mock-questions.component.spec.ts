import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMockQuestionsComponent } from './edit-mock-questions.component';

describe('EditMockQuestionsComponent', () => {
  let component: EditMockQuestionsComponent;
  let fixture: ComponentFixture<EditMockQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMockQuestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMockQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
