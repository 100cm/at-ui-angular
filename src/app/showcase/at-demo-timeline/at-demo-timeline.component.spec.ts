import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoTimelineComponent } from './at-demo-timeline.component';

describe('AtDemoTimelineComponent', () => {
  let component: AtDemoTimelineComponent;
  let fixture: ComponentFixture<AtDemoTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
