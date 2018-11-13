import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtCollapseItemComponent } from './at-collapse-item.component';

describe('AtCollapseItemComponent', () => {
  let component: AtCollapseItemComponent;
  let fixture: ComponentFixture<AtCollapseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtCollapseItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtCollapseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
