import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtLayoutHeaderComponent } from './at-layout-header.component';

describe('AtLayoutHeaderComponent', () => {
  let component: AtLayoutHeaderComponent;
  let fixture: ComponentFixture<AtLayoutHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtLayoutHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtLayoutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
