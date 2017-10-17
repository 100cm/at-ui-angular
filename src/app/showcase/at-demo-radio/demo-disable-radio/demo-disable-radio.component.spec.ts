import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDisableRadioComponent } from './demo-disable-radio.component';

describe('DemoDisableRadioComponent', () => {
  let component: DemoDisableRadioComponent;
  let fixture: ComponentFixture<DemoDisableRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoDisableRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoDisableRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
