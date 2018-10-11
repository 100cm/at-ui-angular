import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoColorPickerComponent } from './at-demo-color-picker.component';

describe('AtDemoColorPickerComponent', () => {
  let component: AtDemoColorPickerComponent;
  let fixture: ComponentFixture<AtDemoColorPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoColorPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
