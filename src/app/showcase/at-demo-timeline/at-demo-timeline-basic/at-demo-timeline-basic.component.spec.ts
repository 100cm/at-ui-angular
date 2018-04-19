import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoTimelineBasicComponent } from './at-demo-timeline-basic.component';

describe('AtDemoTimelineBasicComponent', () => {
  let component: AtDemoTimelineBasicComponent;
  let fixture: ComponentFixture<AtDemoTimelineBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoTimelineBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoTimelineBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
