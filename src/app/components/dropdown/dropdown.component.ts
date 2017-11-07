import {Component, ElementRef, HostListener, Input, OnInit, Output, ViewChild, EventEmitter} from '@angular/core';
import {DropDownAnimation} from "../animations/drop-down-animation";
import {style, animate, state, transition, trigger} from '@angular/animations';

@Component({
  selector: 'atDropdown',
  template: `
    <div (mouseenter)="mouseEnter($event)" (mouseleave)="mouseLeave($event)" class="at-dropdown">
      <div #trigger (click)="setdropDown()" class="at-dropdown__trigger">
        <ng-content></ng-content>
      </div>
      <div #popover
           class="at-dropdown__popover">
        <ul *ngIf="dropDown" atDropMenuList [@dropDownAnimation]="dropDownPosition">
          <ng-content select="[atDropMenuItem]"></ng-content>
        </ul>
      </div>
    </div>
  `,
  animations: [DropDownAnimation, trigger('fadeAnimation', [
    state('*', style({opacity: 1})),
    transition('* => void', [
      animate(150, style({opacity: 0, display: 'none'}))
    ]),
    transition('void => *', [
      style({opacity: '0'}),
      animate(150, style({opacity: 1}))
    ])
  ]),],
})

export class DropdownComponent implements OnInit {

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
  }

  _placement: string = 'bottom'

  dropDown: boolean = false
  position: any = {}
  time: any
  private _dropDownPosition: 'bottom' | 'top' = 'bottom'

  @Input()
  trigger: 'click' | 'hover' = 'click'

  @Input() autoClose: boolean = false

  @Output() dropDownChange: EventEmitter<boolean> = new EventEmitter()

  get dropDownPosition() {
    return this._dropDownPosition;
  }


  get placement(): string {
    return this._placement;
  }

  emitDropDown() {
    this.dropDownChange.emit(this.dropDown)
  }

  @Input()
  set placement(value: string) {
    this._placement = value;
    value == ('top' || 'bottom') ? this._dropDownPosition = value : this._dropDownPosition = 'top'
  }

  @Input()
  set dropDownPosition(value) {
    this._dropDownPosition = value;
  }

  @ViewChild('trigger') triggerRef: ElementRef
  @ViewChild('popover') popoverRef: ElementRef

  ngAfterContentInit() {

  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event) {
    if (this.el.nativeElement.contains(event.target)) {
      if (this.autoClose) {
        this.dropDown = false
      }
    } else {
      this.dropDown = false
      this.emitDropDown()
    }
  }

  hide(e) {
    e.stopPropagation()
    clearTimeout(this.time)
    this.time = setTimeout(_ => {
      this.dropDown = !this.dropDown
      this.emitDropDown()
    }, 100)
  }

  show(e) {
    e.stopPropagation()
    clearTimeout(this.time)
    this.time = setTimeout(_ => {
      this.dropDown = true
      this.emitDropDown()
    }, 100)
  }

  setdropDown() {
    clearTimeout(this.time)
    this.time = setTimeout(_ => {
      this.dropDown = !this.dropDown
      this.emitDropDown()
    }, 100)

  }

  mouseEnter(e) {
    if (this.trigger == 'hover') {
      this.show(e)
    }
  }

  mouseLeave(e) {
    if (this.trigger == 'hover') {
      this.hide(e)
    }
  }


  ngAfterViewChecked() {
    this.changePosition()
  }


  changePosition() {
    let trigger = this.triggerRef.nativeElement
    let popover = this.popoverRef.nativeElement
    switch (this._placement) {
      case 'top' :
        this.position.left = trigger.offsetLeft - (popover.offsetWidth / 2) + (trigger.offsetWidth / 2)
        this.position.top = trigger.offsetTop - popover.offsetHeight
        break
      case 'top-left':
        this.position.left = trigger.offsetLeft
        this.position.top = trigger.offsetTop - popover.offsetHeight
        break
      case 'top-right':
        this.position.left = trigger.offsetLeft + trigger.offsetWidth - popover.offsetWidth
        this.position.top = trigger.offsetTop - popover.offsetHeight
        break
      case 'left':
        this.position.left = trigger.offsetLeft - popover.offsetWidth
        this.position.top = trigger.offsetTop + (trigger.offsetHeight / 2) - (popover.offsetHeight / 2)
        break
      case 'left-top':
        this.position.left = trigger.offsetLeft - popover.offsetWidth
        this.position.top = trigger.offsetTop
        break
      case 'left-bottom':
        this.position.left = trigger.offsetLeft - popover.offsetWidth
        this.position.top = trigger.offsetTop + trigger.offsetHeight - popover.offsetHeight
        break
      case 'right':
        this.position.left = trigger.offsetLeft + trigger.offsetWidth
        this.position.top = trigger.offsetTop + (trigger.offsetHeight / 2) - (popover.offsetHeight / 2)
        break
      case 'right-top':
        this.position.left = trigger.offsetLeft + trigger.offsetWidth
        this.position.top = trigger.offsetTop
        break
      case 'right-bottom':
        this.position.left = trigger.offsetLeft + trigger.offsetWidth
        this.position.top = trigger.offsetTop + trigger.offsetHeight - popover.offsetHeight
        break
      case 'bottom':
        this.position.left = trigger.offsetLeft - (popover.offsetWidth / 2) + (trigger.offsetWidth / 2)
        this.position.top = trigger.offsetTop + trigger.offsetHeight
        break
      case 'bottom-left':
        this.position.left = trigger.offsetLeft
        this.position.top = trigger.offsetTop + trigger.offsetHeight
        break
      case 'bottom-right':
        this.position.left = trigger.offsetLeft + trigger.offsetWidth - popover.offsetWidth
        this.position.top = trigger.offsetTop + trigger.offsetHeight
        break
      default:
        // if user set wrong placement, then use default 'top'
        this.position.left = trigger.offsetLeft - (popover.offsetWidth / 2) + (trigger.offsetWidth / 2)
        this.position.top = trigger.offsetTop - popover.offsetHeight
        break
    }
    popover.style.top = `${this.position.top}px`
    popover.style.left = `${this.position.left}px`
  }

}
