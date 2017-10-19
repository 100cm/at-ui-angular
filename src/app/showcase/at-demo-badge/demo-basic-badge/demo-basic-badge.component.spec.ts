import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoBasicBadgeComponent } from './demo-basic-badge.component';

describe('DemoBasicBadgeComponent', () => {
  let component: DemoBasicBadgeComponent;
  let fixture: ComponentFixture<DemoBasicBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoBasicBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoBasicBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
