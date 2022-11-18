import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterForTestComponent } from './register-for-test.component';

describe('RegisterForTestComponent', () => {
  let component: RegisterForTestComponent;
  let fixture: ComponentFixture<RegisterForTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterForTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterForTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
