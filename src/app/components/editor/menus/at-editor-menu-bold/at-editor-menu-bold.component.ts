import {Component, HostListener, OnInit} from '@angular/core';
import {AtEditorComponent}               from '../..';

@Component({
  selector: 'at-editor-menu-bold',
  template: `
    <button at-button [atType]="'text'">
      <at-icon [type]="'bold'" [size]="15"></at-icon>
    </button>`,
})
export class AtEditorMenuBoldComponent implements OnInit {

  constructor(private editor: AtEditorComponent) {
  }

  ngOnInit() {
  }

  @HostListener('click')
  clickBold() {
    this.editor.command('styleWithCSS', true)
    this.editor.command('bold', null)
  }

}
