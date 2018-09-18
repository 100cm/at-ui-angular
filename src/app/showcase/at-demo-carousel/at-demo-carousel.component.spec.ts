import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoCarouselComponent } from './at-demo-carousel.component';

describe('AtDemoCarouselComponent', () => {
  let component: AtDemoCarouselComponent;
  let fixture: ComponentFixture<AtDemoCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
