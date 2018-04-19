import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineItemComponent } from './timeline-item.component';

describe('TimelineItemComponent', () => {
  let component: TimelineItemComponent;
  let fixture: ComponentFixture<TimelineItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
