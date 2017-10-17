import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoColorRadioComponent } from './demo-color-radio.component';

describe('DemoColorRadioComponent', () => {
  let component: DemoColorRadioComponent;
  let fixture: ComponentFixture<DemoColorRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoColorRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoColorRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
