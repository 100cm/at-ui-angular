import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPendInputComponent } from './demo-pend-input.component';

describe('DemoPendInputComponent', () => {
  let component: DemoPendInputComponent;
  let fixture: ComponentFixture<DemoPendInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoPendInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoPendInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
