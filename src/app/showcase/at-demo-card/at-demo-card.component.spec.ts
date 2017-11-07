import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoCardComponent } from './at-demo-card.component';

describe('AtDemoCardComponent', () => {
  let component: AtDemoCardComponent;
  let fixture: ComponentFixture<AtDemoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
