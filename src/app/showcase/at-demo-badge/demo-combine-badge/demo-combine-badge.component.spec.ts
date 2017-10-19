import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCombineBadgeComponent } from './demo-combine-badge.component';

describe('DemoCombineBadgeComponent', () => {
  let component: DemoCombineBadgeComponent;
  let fixture: ComponentFixture<DemoCombineBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoCombineBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCombineBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
