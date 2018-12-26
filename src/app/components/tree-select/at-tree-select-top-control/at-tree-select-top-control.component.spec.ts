import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtTreeSelectTopControlComponent } from './at-tree-select-top-control.component';

describe('AtTreeSelectTopControlComponent', () => {
  let component: AtTreeSelectTopControlComponent;
  let fixture: ComponentFixture<AtTreeSelectTopControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtTreeSelectTopControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtTreeSelectTopControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
