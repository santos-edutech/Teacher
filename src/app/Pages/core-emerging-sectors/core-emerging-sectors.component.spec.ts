import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreEmergingSectorsComponent } from './core-emerging-sectors.component';

describe('CoreEmergingSectorsComponent', () => {
  let component: CoreEmergingSectorsComponent;
  let fixture: ComponentFixture<CoreEmergingSectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreEmergingSectorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreEmergingSectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
