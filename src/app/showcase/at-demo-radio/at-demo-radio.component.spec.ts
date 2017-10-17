import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoRadioComponent } from './at-demo-radio.component';

describe('AtDemoRadioComponent', () => {
  let component: AtDemoRadioComponent;
  let fixture: ComponentFixture<AtDemoRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
