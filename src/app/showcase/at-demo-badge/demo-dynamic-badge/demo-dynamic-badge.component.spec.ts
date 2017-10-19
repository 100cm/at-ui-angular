import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDynamicBadgeComponent } from './demo-dynamic-badge.component';

describe('DemoDynamicBadgeComponent', () => {
  let component: DemoDynamicBadgeComponent;
  let fixture: ComponentFixture<DemoDynamicBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoDynamicBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoDynamicBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
