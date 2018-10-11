import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtCheckboxGroupComponent } from './at-checkbox-group.component';

describe('CheckboxGroupComponent', () => {
  let component: AtCheckboxGroupComponent;
  let fixture: ComponentFixture<AtCheckboxGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtCheckboxGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtCheckboxGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
