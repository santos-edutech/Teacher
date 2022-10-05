import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAssignedTestComponent } from './create-assigned-test.component';

describe('CreateAssignedTestComponent', () => {
  let component: CreateAssignedTestComponent;
  let fixture: ComponentFixture<CreateAssignedTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAssignedTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAssignedTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
