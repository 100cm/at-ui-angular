import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoNestedCollapseComponent } from './demo-nested-collapse.component';

describe('DemoNestedCollapseComponent', () => {
  let component: DemoNestedCollapseComponent;
  let fixture: ComponentFixture<DemoNestedCollapseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoNestedCollapseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoNestedCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
