import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoAlertComponent } from './at-demo-alert.component';

describe('AtDemoAlertComponent', () => {
  let component: AtDemoAlertComponent;
  let fixture: ComponentFixture<AtDemoAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
