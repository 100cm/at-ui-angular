import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDemoDropdownComponent } from './basic-demo-dropdown.component';

describe('BasicDemoDropdownComponent', () => {
  let component: BasicDemoDropdownComponent;
  let fixture: ComponentFixture<BasicDemoDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicDemoDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicDemoDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
