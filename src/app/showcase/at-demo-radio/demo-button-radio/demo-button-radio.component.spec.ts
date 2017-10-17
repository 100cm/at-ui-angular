import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoButtonRadioComponent } from './demo-button-radio.component';

describe('DemoButtonRadioComponent', () => {
  let component: DemoButtonRadioComponent;
  let fixture: ComponentFixture<DemoButtonRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoButtonRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoButtonRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
