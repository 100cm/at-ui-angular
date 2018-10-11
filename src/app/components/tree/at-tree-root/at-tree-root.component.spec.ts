import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtTreeRootComponent } from './at-tree-root.component';

describe('AtTreeRootComponent', () => {
  let component: AtTreeRootComponent;
  let fixture: ComponentFixture<AtTreeRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtTreeRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtTreeRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
