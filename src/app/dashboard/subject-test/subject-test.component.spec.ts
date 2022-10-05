import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectTestComponent } from './subject-test.component';

describe('SubjectTestComponent', () => {
  let component: SubjectTestComponent;
  let fixture: ComponentFixture<SubjectTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
