import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoPendingTimelineComponent } from './at-demo-pending-timeline.component';

describe('AtDemoPendingTimelineComponent', () => {
  let component: AtDemoPendingTimelineComponent;
  let fixture: ComponentFixture<AtDemoPendingTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoPendingTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoPendingTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
