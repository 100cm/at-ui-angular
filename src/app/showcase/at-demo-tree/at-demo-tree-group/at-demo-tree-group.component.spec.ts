import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoTreeGroupComponent } from './at-demo-tree-group.component';

describe('AtDemoTreeGroupComponent', () => {
  let component: AtDemoTreeGroupComponent;
  let fixture: ComponentFixture<AtDemoTreeGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoTreeGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoTreeGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
