import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoCollapseComponent } from './at-demo-collapse.component';

describe('AtDemoCollapseComponent', () => {
  let component: AtDemoCollapseComponent;
  let fixture: ComponentFixture<AtDemoCollapseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoCollapseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
