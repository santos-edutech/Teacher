import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbroadPhdProgramComponent } from './abroad-phd-program.component';

describe('AbroadPhdProgramComponent', () => {
  let component: AbroadPhdProgramComponent;
  let fixture: ComponentFixture<AbroadPhdProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbroadPhdProgramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbroadPhdProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
