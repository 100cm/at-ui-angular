import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoBasicCheckboxComponent } from './demo-basic-checkbox.component';

describe('DemoBasicCheckboxComponent', () => {
  let component: DemoBasicCheckboxComponent;
  let fixture: ComponentFixture<DemoBasicCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoBasicCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoBasicCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
