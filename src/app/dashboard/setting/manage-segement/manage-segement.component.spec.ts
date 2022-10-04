import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSegementComponent } from './manage-segement.component';

describe('ManageSegementComponent', () => {
  let component: ManageSegementComponent;
  let fixture: ComponentFixture<ManageSegementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageSegementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageSegementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
