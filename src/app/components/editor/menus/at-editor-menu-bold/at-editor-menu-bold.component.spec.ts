import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtEditorMenuBoldComponent } from './at-editor-menu-bold.component';

describe('AtEditorMenuBoldComponent', () => {
  let component: AtEditorMenuBoldComponent;
  let fixture: ComponentFixture<AtEditorMenuBoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtEditorMenuBoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtEditorMenuBoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
