import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtEditorMenuUnderlineComponent } from './at-editor-menu-underline.component';

describe('AtEditorMenuUnderlineComponent', () => {
  let component: AtEditorMenuUnderlineComponent;
  let fixture: ComponentFixture<AtEditorMenuUnderlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtEditorMenuUnderlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtEditorMenuUnderlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
