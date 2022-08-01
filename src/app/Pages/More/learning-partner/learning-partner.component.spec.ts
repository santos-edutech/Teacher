import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningPartnerComponent } from './learning-partner.component';

describe('LearningPartnerComponent', () => {
  let component: LearningPartnerComponent;
  let fixture: ComponentFixture<LearningPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningPartnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearningPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
