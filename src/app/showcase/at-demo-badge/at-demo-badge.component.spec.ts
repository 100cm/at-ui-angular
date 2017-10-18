import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoBadgeComponent } from './at-demo-badge.component';

describe('AtDemoBadgeComponent', () => {
  let component: AtDemoBadgeComponent;
  let fixture: ComponentFixture<AtDemoBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
