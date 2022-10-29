import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbroadEducationComponent } from './abroad-education.component';

describe('AbroadEducationComponent', () => {
  let component: AbroadEducationComponent;
  let fixture: ComponentFixture<AbroadEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbroadEducationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbroadEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
