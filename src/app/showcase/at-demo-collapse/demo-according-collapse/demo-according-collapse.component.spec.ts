import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoAccordingCollapseComponent } from './demo-according-collapse.component';

describe('DemoAccordingCollapseComponent', () => {
  let component: DemoAccordingCollapseComponent;
  let fixture: ComponentFixture<DemoAccordingCollapseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoAccordingCollapseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoAccordingCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
