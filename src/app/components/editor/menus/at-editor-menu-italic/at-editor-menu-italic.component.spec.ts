import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtEditorMenuItalicComponent } from './at-editor-menu-italic.component';

describe('AtEditorMenuItalicComponent', () => {
  let component: AtEditorMenuItalicComponent;
  let fixture: ComponentFixture<AtEditorMenuItalicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtEditorMenuItalicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtEditorMenuItalicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
