import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoBasicTooltipComponent } from './demo-basic-tooltip.component';

describe('DemoBasicTooltipComponent', () => {
  let component: DemoBasicTooltipComponent;
  let fixture: ComponentFixture<DemoBasicTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoBasicTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoBasicTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
