import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AtTreeSelectModule } from '../at-tree-select.module';

import { AtTreeSelectComponent } from './at-tree-select.component';

describe('AtTreeSelectComponent', () => {
  let component: TreeSelectTestComponent;
  let fixture: ComponentFixture<TreeSelectTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeSelectTestComponent ],
      imports: [ AtTreeSelectModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeSelectTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
@Component({
  template: ``
})
export class TreeSelectTestComponent {

}
