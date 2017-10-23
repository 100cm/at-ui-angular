import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoBasicBreadcrumbComponent } from './demo-basic-breadcrumb.component';

describe('DemoBasicBreadcrumbComponent', () => {
  let component: DemoBasicBreadcrumbComponent;
  let fixture: ComponentFixture<DemoBasicBreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoBasicBreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoBasicBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
