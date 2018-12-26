import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTreeSelectComponent } from './demo-tree-select.component';

describe('DemoTreeSelectComponent', () => {
  let component: DemoTreeSelectComponent;
  let fixture: ComponentFixture<DemoTreeSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTreeSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTreeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
