import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoDividerComponent } from './at-demo-divider.component';

describe('AtDemoDividerComponent', () => {
  let component: AtDemoDividerComponent;
  let fixture: ComponentFixture<AtDemoDividerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoDividerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
