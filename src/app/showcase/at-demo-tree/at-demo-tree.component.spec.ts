import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoTreeComponent } from './at-demo-tree.component';

describe('AtDemoTreeComponent', () => {
  let component: AtDemoTreeComponent;
  let fixture: ComponentFixture<AtDemoTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
