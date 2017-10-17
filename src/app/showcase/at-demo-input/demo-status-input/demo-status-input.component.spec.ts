import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoStatusInputComponent } from './demo-status-input.component';

describe('DemoStatusInputComponent', () => {
  let component: DemoStatusInputComponent;
  let fixture: ComponentFixture<DemoStatusInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoStatusInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoStatusInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
