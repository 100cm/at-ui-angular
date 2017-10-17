import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoTextareaComponent } from './at-demo-textarea.component';

describe('AtDemoTextareaComponent', () => {
  let component: AtDemoTextareaComponent;
  let fixture: ComponentFixture<AtDemoTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoTextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
