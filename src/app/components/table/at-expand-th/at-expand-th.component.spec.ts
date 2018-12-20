import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtExpandThComponent } from './at-expand-th.component';

describe('AtExpandThComponent', () => {
  let component: AtExpandThComponent;
  let fixture: ComponentFixture<AtExpandThComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtExpandThComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtExpandThComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
