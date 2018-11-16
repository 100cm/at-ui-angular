import {Component, OnInit} from '@angular/core';
import {AtEditorComponent} from '../..';
import {Element}           from '@angular/compiler';

@Component({
  selector: 'at-editor-menu-font-size',
  template: `
    <at-dropdown>
      <button at-dropdown at-button style="font-size: 15px" [atType]="'text'">
        Aa
      </button>
      <ul at-drop-menu-list>
        <li at-drop-menu-item (click)="chooseFontSize($event,item)" *ngFor="let item of fontSizes">{{item}}</li>
      </ul>
    </at-dropdown>
  `,
})
export class AtEditorMenuFontSizeComponent implements OnInit {

  constructor(private editor: AtEditorComponent) {
  }

  fontSizes = [14, 16, 18, 20, 22, 24, 26]

  ngOnInit() {
  }

  chooseFontSize(event, item) {
    event.preventDefault()
    this.editor.command('fontSize', 7)
    this.updateTags(item)
  }

  updateTags(size) {
    let fontElements = this.editor.editor_area.nativeElement.getElementsByTagName('font');
    let spanElements = this.editor.editor_area.nativeElement.getElementsByTagName('span')
    for (let i = 0, len = fontElements.length; i < len; ++i) {
      console.log(fontElements[i].style.fontSize);
      if (fontElements[i].size == '7') {
        fontElements[i].removeAttribute('size');
        fontElements[i].style.fontSize = size + 'px';
      }
    }
    //兼容webkit
    for (let i = 0, len = spanElements.length; i < len; ++i) {
      if (spanElements[i].style.fontSize.includes('large') || spanElements[i].style.fontSize.includes('-large') ||
        spanElements[i].style.fontSize.includes('medium')) {
        spanElements[i].style.fontSize = size + 'px';
      }
    }
  }

  replaceSelectionWithHtml(value) {
    let node = document.createElement('span')
    node.style.fontSize = value + 'px'
    let text = document.createTextNode(this.editor.currentRange.toString())
    node.appendChild(text)
    this.editor.currentRange.deleteContents()
    this.editor.currentRange.insertNode(node)

  }

}
