import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoTimelineDotComponent } from './at-demo-timeline-dot.component';

describe('AtDemoTimelineDotComponent', () => {
  let component: AtDemoTimelineDotComponent;
  let fixture: ComponentFixture<AtDemoTimelineDotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoTimelineDotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoTimelineDotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
