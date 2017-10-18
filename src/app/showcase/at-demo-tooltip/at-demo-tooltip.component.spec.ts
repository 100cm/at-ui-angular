import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoTooltipComponent } from './at-demo-tooltip.component';

describe('AtDemoTooltipComponent', () => {
  let component: AtDemoTooltipComponent;
  let fixture: ComponentFixture<AtDemoTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
