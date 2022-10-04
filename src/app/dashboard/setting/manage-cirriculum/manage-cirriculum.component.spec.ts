import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCirriculumComponent } from './manage-cirriculum.component';

describe('ManageCirriculumComponent', () => {
  let component: ManageCirriculumComponent;
  let fixture: ComponentFixture<ManageCirriculumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageCirriculumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageCirriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
