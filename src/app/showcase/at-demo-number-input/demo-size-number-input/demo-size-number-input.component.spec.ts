import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSizeNumberInputComponent } from './demo-size-number-input.component';

describe('DemoSizeNumberInputComponent', () => {
  let component: DemoSizeNumberInputComponent;
  let fixture: ComponentFixture<DemoSizeNumberInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoSizeNumberInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoSizeNumberInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
