import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoSliderComponent } from './at-demo-slider.component';

describe('AtDemoSliderComponent', () => {
  let component: AtDemoSliderComponent;
  let fixture: ComponentFixture<AtDemoSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
