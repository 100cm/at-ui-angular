import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtEditorComponent } from './at-editor.component';

describe('AtEditorComponent', () => {
  let component: AtEditorComponent;
  let fixture: ComponentFixture<AtEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
