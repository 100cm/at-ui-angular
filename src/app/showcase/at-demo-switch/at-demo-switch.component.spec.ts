import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoSwitchComponent } from './at-demo-switch.component';

describe('AtDemoSwitchComponent', () => {
  let component: AtDemoSwitchComponent;
  let fixture: ComponentFixture<AtDemoSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
