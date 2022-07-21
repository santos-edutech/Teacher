import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParikshaComponent } from './pariksha.component';

describe('ParikshaComponent', () => {
  let component: ParikshaComponent;
  let fixture: ComponentFixture<ParikshaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParikshaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParikshaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
