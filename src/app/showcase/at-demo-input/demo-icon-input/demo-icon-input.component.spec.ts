import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoIconInputComponent } from './demo-icon-input.component';

describe('DemoIconInputComponent', () => {
  let component: DemoIconInputComponent;
  let fixture: ComponentFixture<DemoIconInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoIconInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoIconInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
