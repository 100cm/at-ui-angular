import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoCheckboxComponent } from './at-demo-checkbox.component';

describe('AtDemoCheckboxComponent', () => {
  let component: AtDemoCheckboxComponent;
  let fixture: ComponentFixture<AtDemoCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
