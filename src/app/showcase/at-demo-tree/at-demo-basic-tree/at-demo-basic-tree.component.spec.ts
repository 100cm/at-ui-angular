import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoBasicTreeComponent } from './at-demo-basic-tree.component';

describe('AtDemoBasicTreeComponent', () => {
  let component: AtDemoBasicTreeComponent;
  let fixture: ComponentFixture<AtDemoBasicTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoBasicTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoBasicTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
