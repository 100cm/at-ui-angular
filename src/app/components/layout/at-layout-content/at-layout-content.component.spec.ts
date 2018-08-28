import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtLayoutContentComponent } from './at-layout-content.component';

describe('AtLayoutContentComponent', () => {
  let component: AtLayoutContentComponent;
  let fixture: ComponentFixture<AtLayoutContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtLayoutContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtLayoutContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
