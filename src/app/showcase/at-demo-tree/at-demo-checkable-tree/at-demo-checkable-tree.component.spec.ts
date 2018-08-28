import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoCheckableTreeComponent } from './at-demo-checkable-tree.component';

describe('AtDemoCheckableTreeComponent', () => {
  let component: AtDemoCheckableTreeComponent;
  let fixture: ComponentFixture<AtDemoCheckableTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoCheckableTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoCheckableTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
