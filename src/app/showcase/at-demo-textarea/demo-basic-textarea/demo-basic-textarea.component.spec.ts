import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoBasicTextareaComponent } from './demo-basic-textarea.component';

describe('DemoBasicTextareaComponent', () => {
  let component: DemoBasicTextareaComponent;
  let fixture: ComponentFixture<DemoBasicTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoBasicTextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoBasicTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
