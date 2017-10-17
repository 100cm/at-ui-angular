import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoGroupCheckboxComponent } from './demo-group-checkbox.component';

describe('DemoGroupCheckboxComponent', () => {
  let component: DemoGroupCheckboxComponent;
  let fixture: ComponentFixture<DemoGroupCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoGroupCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoGroupCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
