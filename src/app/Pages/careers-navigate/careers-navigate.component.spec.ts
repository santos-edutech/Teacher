import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersNavigateComponent } from './careers-navigate.component';

describe('CareersNavigateComponent', () => {
  let component: CareersNavigateComponent;
  let fixture: ComponentFixture<CareersNavigateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareersNavigateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareersNavigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
