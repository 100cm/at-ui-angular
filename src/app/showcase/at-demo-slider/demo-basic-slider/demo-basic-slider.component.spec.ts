import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoBasicSliderComponent } from './demo-basic-slider.component';

describe('DemoBasicSliderComponent', () => {
  let component: DemoBasicSliderComponent;
  let fixture: ComponentFixture<DemoBasicSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoBasicSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoBasicSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
