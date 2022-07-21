import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningCentreComponent } from './learning-centre.component';

describe('LearningCentreComponent', () => {
  let component: LearningCentreComponent;
  let fixture: ComponentFixture<LearningCentreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningCentreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearningCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
