import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtFormLabelComponent } from './at-form-label.component';

describe('AtFormLabelComponent', () => {
  let component: AtFormLabelComponent;
  let fixture: ComponentFixture<AtFormLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtFormLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtFormLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
