import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtDemoEditorComponent } from './at-demo-editor.component';

describe('AtDemoEditorComponent', () => {
  let component: AtDemoEditorComponent;
  let fixture: ComponentFixture<AtDemoEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtDemoEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtDemoEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
