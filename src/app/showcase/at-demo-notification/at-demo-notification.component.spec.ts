import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoNotificationComponent } from './at-demo-notification.component';

describe('AtDemoNotificationComponent', () => {
  let component: AtDemoNotificationComponent;
  let fixture: ComponentFixture<AtDemoNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
