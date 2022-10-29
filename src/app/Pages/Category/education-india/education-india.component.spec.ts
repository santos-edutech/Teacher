import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationIndiaComponent } from './education-india.component';

describe('EducationIndiaComponent', () => {
  let component: EducationIndiaComponent;
  let fixture: ComponentFixture<EducationIndiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationIndiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationIndiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
