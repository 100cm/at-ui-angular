import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoBreadcrumbComponent } from './at-demo-breadcrumb.component';

describe('AtDemoBreadcrumbComponent', () => {
  let component: AtDemoBreadcrumbComponent;
  let fixture: ComponentFixture<AtDemoBreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoBreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
