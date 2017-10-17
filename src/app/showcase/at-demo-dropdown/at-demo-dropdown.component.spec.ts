import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoDropdownComponent } from './at-demo-dropdown.component';

describe('AtDemoDropdownComponent', () => {
  let component: AtDemoDropdownComponent;
  let fixture: ComponentFixture<AtDemoDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
