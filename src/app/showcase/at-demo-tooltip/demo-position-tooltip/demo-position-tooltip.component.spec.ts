import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPositionTooltipComponent } from './demo-position-tooltip.component';

describe('DemoPositionTooltipComponent', () => {
  let component: DemoPositionTooltipComponent;
  let fixture: ComponentFixture<DemoPositionTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoPositionTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoPositionTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
