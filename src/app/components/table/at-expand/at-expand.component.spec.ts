import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtExpandComponent } from './at-expand.component';

describe('AtExpandComponent', () => {
  let component: AtExpandComponent;
  let fixture: ComponentFixture<AtExpandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtExpandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtExpandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
