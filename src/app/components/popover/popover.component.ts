import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {FadeAnimation} from "../animations/fade-animation";

@Component({
  selector: 'atPopover',
  animations: [FadeAnimation],
  template: `
    <div class="at-popover">
  <span (mouseenter)="mouseOver()" (mouseleave)="mouseOut()" (click)="activePop()" class="at-popover__trigger" #trigger>
  <ng-content select="[popTrigger]">
  </ng-content>
</span>
      <div #popover [@fadeAnimation] (mouseenter)="mouseOver()" (mouseleave)="mouseOut()"
           [ngStyle]="{'display': pop ? '' :'none'}"
           class="at-popover__popper at-popover--{{placement}}">
        <div class="at-popover__arrow"></div>
        <div *ngIf="title" class="at-popover__title">
          <ng-content select="[popTitle]"></ng-content>
        </div>
        <div class="at-popover__content">
          <ng-content select="[popContent]"></ng-content>
        </div>
      </div>
    </div>

  `
})
export class PopoverComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

  }

  _placement = 'top'
  private _trigger = 'click'
  position: any = {}
  timer
  private _title: any


  get title(): any {
    return this._title;
  }

  @Input()
  set title(value: any) {
    this._title = value;
  }

  get trigger(): string {
    return this._trigger;
  }

  @Input()
  set trigger(value: string) {
    this._trigger = value;
  }

  get placement(): string {
    return this._placement;
  }

  private _pop = false


  get pop(): boolean {
    return this._pop;
  }

  @Input()
  set pop(value: boolean) {
    this._pop = value;
  }

  @Input()
  set placement(value: string) {
    this._placement = value;
  }

  @ViewChild('trigger') triggerEle: ElementRef
  @ViewChild('popover') popover: ElementRef

  setPopPosition() {
    let trigger = this.triggerEle.nativeElement
    let popover = this.popover.nativeElement
    switch (this.placement) {
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

  activePop() {
    if (this.trigger == 'click') {
      this.pop = !this.pop
    }
  }

  mouseOver() {
    if (this.trigger == 'hover') {
      clearTimeout(this.timer)
      this.timer = setTimeout(_ => {
        this.pop = true
      }, 300)
    }
  }

  mouseOut() {
    if (this.trigger == 'hover') {
      clearTimeout(this.timer)
      this.timer = setTimeout(_ => {
        this.pop = false
      }, 300)

    }
  }

  ngAfterViewChecked() {
    this.setPopPosition()
  }
}
