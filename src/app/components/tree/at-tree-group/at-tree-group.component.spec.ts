import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtTreeGroupComponent } from './at-tree-group.component';

describe('AtTreeGroupComponent', () => {
  let component: AtTreeGroupComponent;
  let fixture: ComponentFixture<AtTreeGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtTreeGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtTreeGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
