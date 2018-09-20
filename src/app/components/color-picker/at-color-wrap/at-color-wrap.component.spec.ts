import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtColorWrapComponent } from './at-color-wrap.component';

describe('AtColorWrapComponent', () => {
  let component: AtColorWrapComponent;
  let fixture: ComponentFixture<AtColorWrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtColorWrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtColorWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
