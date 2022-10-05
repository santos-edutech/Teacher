import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubjectTestComponent } from './create-subject-test.component';

describe('CreateSubjectTestComponent', () => {
  let component: CreateSubjectTestComponent;
  let fixture: ComponentFixture<CreateSubjectTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSubjectTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSubjectTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
