import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkuploadimageComponent } from './bulkuploadimage.component';

describe('BulkuploadimageComponent', () => {
  let component: BulkuploadimageComponent;
  let fixture: ComponentFixture<BulkuploadimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkuploadimageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BulkuploadimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
