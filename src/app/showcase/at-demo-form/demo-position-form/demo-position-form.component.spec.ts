import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPositionFormComponent } from './demo-position-form.component';

describe('DemoPositionFormComponent', () => {
  let component: DemoPositionFormComponent;
  let fixture: ComponentFixture<DemoPositionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoPositionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoPositionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
