import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtLayoutBodyComponent } from './at-layout-body.component';

describe('AtLayoutBodyComponent', () => {
  let component: AtLayoutBodyComponent;
  let fixture: ComponentFixture<AtLayoutBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtLayoutBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtLayoutBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
