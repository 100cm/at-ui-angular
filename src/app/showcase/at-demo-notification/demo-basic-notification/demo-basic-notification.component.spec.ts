import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoBasicNotificationComponent } from './demo-basic-notification.component';

describe('DemoBasicNotificationComponent', () => {
  let component: DemoBasicNotificationComponent;
  let fixture: ComponentFixture<DemoBasicNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoBasicNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoBasicNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
