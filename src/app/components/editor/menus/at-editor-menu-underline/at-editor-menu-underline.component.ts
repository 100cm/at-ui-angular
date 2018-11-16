import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'at-editor-menu-underline',
  template: `
    <button at-button [atType]="'text'">
      <at-icon [type]="'underline'" [size]="15"></at-icon>
    </button>`,
})
export class AtEditorMenuUnderlineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @HostListener('click')
  clickUnderline() {
    document.execCommand('underline')
  }
}
