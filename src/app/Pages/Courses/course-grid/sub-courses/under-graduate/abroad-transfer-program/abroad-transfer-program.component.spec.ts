import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbroadTransferProgramComponent } from './abroad-transfer-program.component';

describe('AbroadTransferProgramComponent', () => {
  let component: AbroadTransferProgramComponent;
  let fixture: ComponentFixture<AbroadTransferProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbroadTransferProgramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbroadTransferProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
