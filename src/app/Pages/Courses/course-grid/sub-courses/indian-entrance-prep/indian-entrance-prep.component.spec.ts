import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianEntrancePrepComponent } from './indian-entrance-prep.component';

describe('IndianEntrancePrepComponent', () => {
  let component: IndianEntrancePrepComponent;
  let fixture: ComponentFixture<IndianEntrancePrepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndianEntrancePrepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndianEntrancePrepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
