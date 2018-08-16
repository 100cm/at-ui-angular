import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtFormControlComponent } from './at-form-control.component';

describe('AtFormControlComponent', () => {
  let component: AtFormControlComponent;
  let fixture: ComponentFixture<AtFormControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtFormControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
