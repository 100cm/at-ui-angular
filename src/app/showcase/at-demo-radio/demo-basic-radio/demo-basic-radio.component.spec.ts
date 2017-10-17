import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoBasicRadioComponent } from './demo-basic-radio.component';

describe('DemoBasicRadioComponent', () => {
  let component: DemoBasicRadioComponent;
  let fixture: ComponentFixture<DemoBasicRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoBasicRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoBasicRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
