import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'at-editor',
  templateUrl: './at-editor.component.html',
  styleUrls: ['./at-editor.component.css']
})
export class AtEditorComponent implements OnInit {

  editor_ele: HTMLElement

  constructor(private el: ElementRef) {
    this.editor_ele = el.nativeElement
  }

  @ViewChild('ele_text') editor_area: ElementRef

  private menus: Array<string> = ['bold', 'italic', 'underline', 'font-size']

  ngOnInit() {

  }

  restoreSelection() {
    const selection = window.getSelection()
    selection.removeAllRanges()
    selection.addRange(this.currentRange)
  }

  saveRange(_range?: Range) {
    if (_range) {
      // 保存已有选区
      this.currentRange = _range
      return
    }

    // 获取当前的选区
    const selection = window.getSelection()
    if (selection.rangeCount === 0) {
      return
    }
    const range = selection.getRangeAt(0)

    // 判断选区内容是否在编辑内容之内
    const containerElem: Node | void = this.getSelectionContainerElem(range)
    if (!containerElem) {
      return
    }

    // // 判断选区内容是否在不可编辑区域之内
    if ((containerElem as any).getAttribute('contenteditable') === 'false') {
      return
    }

    // console.log(this.editor_ele.contains(child))
    if (this.editor_ele.contains(containerElem)) {
      // 是编辑内容之内的
      this.currentRange = range
    }
  }


  command(name, value?) {
    this.restoreSelection()
    if (value) {
      document.execCommand(name, false, value)
    } else {
      document.execCommand(name)
    }
    this.saveRange()
    this.restoreSelection()
  }

  getSelectionText() {
    const range = this.currentRange
    if (range) {
      return this.currentRange.toString()
    } else {
      return ''
    }
  }

  currentRange: Range

  currentSelection: Selection


  getSelectionContainerElem(range: Range): Node | void {
    range = range || this.currentRange
    let elem
    if (range) {
      elem = range.commonAncestorContainer;
      return elem.nodeType === 1 ? elem : elem.parentNode
    }
  }


  ngAfterViewInit() {
    this.editor_area.nativeElement.addEventListener('focus', () => {
      console.log('focus')
      this.initLastP()
    })

    let events = ['mousedown', 'mouseup', 'keyup']
    events.forEach(e => {
      this.editor_area.nativeElement.addEventListener(e, () => {
        this.saveRange()
      })
    })
  }


  insertLastP() {
    let INIT_P = document.createElement('p')
    INIT_P.innerHTML = '<br>'
    this.editor_area.nativeElement.append(INIT_P)
    let range = document.createRange()
    range.selectNode(this.editor_area.nativeElement.children[this.editor_area.nativeElement.children.length - 1])
  }


  initLastP() {
    let last = this.editor_area.nativeElement.children[this.editor_area.nativeElement.children.length - 1]
    if (!last) {
      this.insertLastP()
      return
    }
    let html = last.innerHTML
    let nodeName = last.nodeName
    if ((html !== '<br>' && html !== '<br\/>') || nodeName !== 'P') {
      this.insertLastP()
      return
    }
  }

}
