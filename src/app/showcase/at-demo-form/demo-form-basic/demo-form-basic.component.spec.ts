import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormBasicComponent } from './demo-form-basic.component';

describe('DemoFormBasicComponent', () => {
  let component: DemoFormBasicComponent;
  let fixture: ComponentFixture<DemoFormBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFormBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
