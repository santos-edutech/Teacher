import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicWiseTestComponent } from './topic-wise-test.component';

describe('TopicWiseTestComponent', () => {
  let component: TopicWiseTestComponent;
  let fixture: ComponentFixture<TopicWiseTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicWiseTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicWiseTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
