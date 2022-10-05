import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMockTestComponent } from './create-mock-test.component';

describe('CreateMockTestComponent', () => {
  let component: CreateMockTestComponent;
  let fixture: ComponentFixture<CreateMockTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMockTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMockTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
