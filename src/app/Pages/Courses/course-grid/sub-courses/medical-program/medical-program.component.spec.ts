import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalProgramComponent } from './medical-program.component';

describe('MedicalProgramComponent', () => {
  let component: MedicalProgramComponent;
  let fixture: ComponentFixture<MedicalProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalProgramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
