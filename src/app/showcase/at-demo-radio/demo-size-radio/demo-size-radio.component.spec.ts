import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSizeRadioComponent } from './demo-size-radio.component';

describe('DemoSizeRadioComponent', () => {
  let component: DemoSizeRadioComponent;
  let fixture: ComponentFixture<DemoSizeRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoSizeRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoSizeRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
