import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoTreeSelectComponent } from './at-demo-tree-select.component';

describe('AtDemoTreeSelectComponent', () => {
  let component: AtDemoTreeSelectComponent;
  let fixture: ComponentFixture<AtDemoTreeSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoTreeSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoTreeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
