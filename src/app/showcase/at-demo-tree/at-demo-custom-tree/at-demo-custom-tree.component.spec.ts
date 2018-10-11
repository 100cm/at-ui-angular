import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoCustomTreeComponent } from './at-demo-custom-tree.component';

describe('AtDemoCustomTreeComponent', () => {
  let component: AtDemoCustomTreeComponent;
  let fixture: ComponentFixture<AtDemoCustomTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoCustomTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoCustomTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
