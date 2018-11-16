import {Component, HostListener, OnInit} from '@angular/core';
import {AtEditorComponent}               from '../..';

@Component({
  selector: 'at-editor-menu-italic',
  template: `
    <button at-button [atType]="'text'">
      <at-icon [type]="'italic'" [size]="15"></at-icon>
    </button>`,
})
export class AtEditorMenuItalicComponent implements OnInit {

  constructor(private editor: AtEditorComponent) {
  }

  ngOnInit() {
  }

  @HostListener('click')
  clickItalic() {
    this.editor.command('italic')
  }
}
