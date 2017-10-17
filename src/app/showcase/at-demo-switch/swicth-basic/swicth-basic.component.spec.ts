import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwicthBasicComponent } from './swicth-basic.component';

describe('SwicthBasicComponent', () => {
  let component: SwicthBasicComponent;
  let fixture: ComponentFixture<SwicthBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwicthBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwicthBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
