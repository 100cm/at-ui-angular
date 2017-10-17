import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSizeInputComponent } from './demo-size-input.component';

describe('DemoSizeInputComponent', () => {
  let component: DemoSizeInputComponent;
  let fixture: ComponentFixture<DemoSizeInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoSizeInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoSizeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
