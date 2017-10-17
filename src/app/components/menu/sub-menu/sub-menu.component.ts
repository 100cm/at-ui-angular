import {
  Component, ElementRef, HostBinding, HostListener, Inject, Input, OnInit, Renderer2, ViewChild,
  ViewContainerRef
} from '@angular/core';
import {MenuComponent} from "../menu.component";
import {style, animate, state, transition, trigger} from '@angular/animations';

@Component({
  selector: '[atSubMenu]',
  template:`<div class="at-menu__submenu-title"
                 (mouseenter)="onMouseEnterEvent($event)"
                 (mouseleave)="onMouseLeaveEvent($event)"
                 (click)="show()"
  >
    <ng-content select="[title]"></ng-content>
  </div>
  <div
    *ngIf="isOpen && parent.atType != 'inline'"
    [ngStyle]="{'left': _popoverCss.left ,'right': _popoverCss.right,'top': _popoverCss.top}"
    (mouseenter)="onMouseEnterEvent($event)"
    (mouseleave)="onMouseLeaveEvent($event)"
    class="at-dropdown__popover">
    <ng-content></ng-content>
  </div>
  <!--<ng-content [@slide-up] *ngIf="isOpen" select="[inlineMenu]"></ng-content>-->

  <div
    [@fadeAnimation]
    [@expandAnimation]="expandState"
    *ngIf="isOpen">
    <ng-content select="[inlineMenu]"></ng-content>
  </div>
  `,
  animations: [
    trigger('fadeAnimation', [
      state('*', style({opacity: 1})),
      transition('* => void', [
        animate(150, style({opacity: 0, display: 'none'}))
      ]),
      transition('void => *', [
        style({opacity: '0'}),
        animate(150, style({opacity: 1}))
      ])
    ]),
    trigger('expandAnimation', [
      transition('expand => void', [
        style({height: '*', overflow: 'hidden'}),
        animate(150, style({height: 0}))
      ]),
      transition('void => expand', [
        style({height: 0, overflow: 'hidden'}),
        animate(150, style({height: '*'}))
      ])
    ])
  ],
})
export class SubMenuComponent implements OnInit {

  ngOnInit() {
  }

  _el: any
  nativeElement: any
  _active = false
  _isOpen = false
  _popoverCss = {left: '0px', right: '0px', top: '0px'}
  timeout: any


  get expandState() {
    if (this.isOpen && this.parent.atType == 'inline') {
      return 'expand';
    }
    return null;
  }


  get isOpen(): boolean {
    return this._isOpen;
  }

  @Input()
  set isOpen(value: boolean) {
    this._isOpen = value;
  }

  constructor(private _elementRef: ElementRef,
              @Inject(MenuComponent) public parent: MenuComponent, private _renderer: Renderer2) {
    this._el = this._elementRef.nativeElement;
    this.nativeElement = this._elementRef.nativeElement;
  }

  @HostBinding(`class.at-menu__submenu`) item_class = true


  @HostListener('click')
  setActive() {

  }

  @HostBinding('class.at-menu__item--active')
  get activeCls() {
    return this.active
  }

  @HostBinding('class.at-menu__submenu--opened')
  get OpenCls() {
    return this.isOpen
  }


  @Input('active')
  set active(active: boolean) {
    this._active = true
  }


  onMouseEnterEvent(e) {
    if (this.parent._atType === 'inline') return
    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      this.resetDropDownPosition(e)
      this.isOpen = true
    }, 200)
  }

  onMouseLeaveEvent(e) {
    if (this.parent._atType === 'inline') return
    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      this.isOpen = false
    }, 200)
  }


  get active(): boolean {
    return this._active;
  }

  @ViewChild('popover') popover: ViewContainerRef


  resetDropDownPosition(e) {
    let left = 'initial'
    let right = '0'
    let attributes = Array.from(this._elementRef.nativeElement.parentNode.attributes).map(a => {
      return a['name']
    })

    if (this.parent.atType == 'horizontal') {
      let height = this._elementRef.nativeElement.offsetHeight

      //子级情况
      if (!attributes.includes('atmenu')) {
        right = (-this._elementRef.nativeElement.offsetWidth).toString() + 'px'
        height = '0'
      }
      this._popoverCss = {left: left, right: right, top: height + 'px'}
    } else if (this.parent.atType == 'vertical') {

      right = (-this._elementRef.nativeElement.offsetWidth).toString() + 'px'
      this._popoverCss = {left: left, right: right, top: '0' + 'px'}
    }

  }

  show() {
    this._isOpen = !this._isOpen
  }

}
