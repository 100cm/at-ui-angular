import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtTreeNodeComponent } from './at-tree-node.component';

describe('AtTreeNodeComponent', () => {
  let component: AtTreeNodeComponent;
  let fixture: ComponentFixture<AtTreeNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtTreeNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtTreeNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
