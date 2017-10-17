import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPlaceDropdownComponent } from './demo-place-dropdown.component';

describe('DemoPlaceDropdownComponent', () => {
  let component: DemoPlaceDropdownComponent;
  let fixture: ComponentFixture<DemoPlaceDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoPlaceDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoPlaceDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
