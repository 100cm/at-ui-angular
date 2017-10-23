import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSeparateBreadcrumbComponent } from './demo-separate-breadcrumb.component';

describe('DemoSeparateBreadcrumbComponent', () => {
  let component: DemoSeparateBreadcrumbComponent;
  let fixture: ComponentFixture<DemoSeparateBreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoSeparateBreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoSeparateBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
