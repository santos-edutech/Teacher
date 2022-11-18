import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsRegisterForTestComponent } from './details-register-for-test.component';

describe('DetailsRegisterForTestComponent', () => {
  let component: DetailsRegisterForTestComponent;
  let fixture: ComponentFixture<DetailsRegisterForTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsRegisterForTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsRegisterForTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
