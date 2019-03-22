import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDividerComponent } from './at-divider.component';

describe('AtDividerComponent', () => {
  let component: AtDividerComponent;
  let fixture: ComponentFixture<AtDividerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDividerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
