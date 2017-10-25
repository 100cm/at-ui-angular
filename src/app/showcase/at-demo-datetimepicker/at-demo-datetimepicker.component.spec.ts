import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoDatetimepickerComponent } from './at-demo-datetimepicker.component';

describe('AtDemoDatetimepickerComponent', () => {
  let component: AtDemoDatetimepickerComponent;
  let fixture: ComponentFixture<AtDemoDatetimepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoDatetimepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoDatetimepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
