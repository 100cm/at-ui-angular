import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoButtonComponent } from './at-demo-button.component';

describe('AtDemoButtonComponent', () => {
  let component: AtDemoButtonComponent;
  let fixture: ComponentFixture<AtDemoButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
