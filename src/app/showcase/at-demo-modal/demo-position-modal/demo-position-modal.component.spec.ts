import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPositionModalComponent } from './demo-position-modal.component';

describe('DemoPositionModalComponent', () => {
  let component: DemoPositionModalComponent;
  let fixture: ComponentFixture<DemoPositionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoPositionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoPositionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
