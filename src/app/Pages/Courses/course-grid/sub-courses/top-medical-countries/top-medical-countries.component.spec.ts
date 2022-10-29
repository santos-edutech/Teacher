import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMedicalCountriesComponent } from './top-medical-countries.component';

describe('TopMedicalCountriesComponent', () => {
  let component: TopMedicalCountriesComponent;
  let fixture: ComponentFixture<TopMedicalCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopMedicalCountriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopMedicalCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
