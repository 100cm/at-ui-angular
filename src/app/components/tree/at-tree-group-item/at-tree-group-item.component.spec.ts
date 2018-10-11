import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtTreeGroupItemComponent } from './at-tree-group-item.component';

describe('AtTreeGroupItemComponent', () => {
  let component: AtTreeGroupItemComponent;
  let fixture: ComponentFixture<AtTreeGroupItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtTreeGroupItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtTreeGroupItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
