import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbroadMastersPlacementComponent } from './abroad-masters-placement.component';

describe('AbroadMastersPlacementComponent', () => {
  let component: AbroadMastersPlacementComponent;
  let fixture: ComponentFixture<AbroadMastersPlacementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbroadMastersPlacementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbroadMastersPlacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
