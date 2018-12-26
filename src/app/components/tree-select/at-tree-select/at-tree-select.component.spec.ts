import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtTreeSelectComponent } from './at-tree-select.component';

describe('AtTreeSelectComponent', () => {
  let component: AtTreeSelectComponent;
  let fixture: ComponentFixture<AtTreeSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtTreeSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtTreeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
