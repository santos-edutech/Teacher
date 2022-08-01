import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StemLabsComponent } from './stem-labs.component';

describe('StemLabsComponent', () => {
  let component: StemLabsComponent;
  let fixture: ComponentFixture<StemLabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StemLabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StemLabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
