import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtEditorMenuFontSizeComponent } from './at-editor-menu-font-size.component';

describe('AtEditorMenuFontSizeComponent', () => {
  let component: AtEditorMenuFontSizeComponent;
  let fixture: ComponentFixture<AtEditorMenuFontSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtEditorMenuFontSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtEditorMenuFontSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
