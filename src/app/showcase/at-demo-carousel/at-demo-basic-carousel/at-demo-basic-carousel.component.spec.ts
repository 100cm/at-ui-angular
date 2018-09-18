import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoBasicCarouselComponent } from './at-demo-basic-carousel.component';

describe('AtDemoBasicCarouselComponent', () => {
  let component: AtDemoBasicCarouselComponent;
  let fixture: ComponentFixture<AtDemoBasicCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoBasicCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoBasicCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
