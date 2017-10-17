import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoInputComponent } from './at-demo-input.component';

describe('AtDemoInputComponent', () => {
  let component: AtDemoInputComponent;
  let fixture: ComponentFixture<AtDemoInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
