import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoAlertBasicComponent } from './demo-alert-basic.component';

describe('DemoAlertBasicComponent', () => {
  let component: DemoAlertBasicComponent;
  let fixture: ComponentFixture<DemoAlertBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoAlertBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoAlertBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
