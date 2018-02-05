import {Component, ContentChildren, Input, OnInit, QueryList, ViewChildren} from '@angular/core';
import {StepComponent} from "./step/step.component";

@Component({
  selector: 'at-steps',
  template:`
    <div class="at-steps at-steps--{{direction}}">
      <div #steps *ngFor="let step of steps;let i = index"
           class="at-step at-step--{{step.status}}"
           [ngStyle]="{width: stepWidth(i) , 'margin-right':marginPx}">
        <div *ngIf="isLast(i)" class="at-step__line"></div>
        <div class="at-step__head">
          <div class="at-step__label" [ngClass]="{'at-step__icon': step.icon}">
            <div *ngIf="step.status !='finish' && !step.icon" class="at-step__order">
              {{ i+1}}
            </div>
            <div *ngIf="step.icon">
              <i class="icon {{step.icon}}"></i>
            </div>
            <div *ngIf="step.status === 'finish'">
              <i class="icon icon-check"></i>
            </div>
            <div *ngIf="step.status === 'error'">
              <i class="icon icon-x"></i>
            </div>
          </div>
        </div>
        <div class="at-step__main">
          <div class="at-step__title">{{step.title}}</div>
          <div class="at-step__description">{{step.description}}</div>
        </div>
      </div>
    </div>

  `,
})
export class StepsComponent implements OnInit {

  _direction: 'horizontal' | 'vertical' = 'horizontal'

  steps: Array<StepComponent> = []

  margin: number

  _current = 0


  @Input()
  set current(value) {
    if (value < 0) {
      return
    }
    console.log(this._current)
    this._current = value
    this.steps[value].status = 'process'

    //all before success
    this.steps.filter((s, i) => {
      return i < value
    }).forEach((step) => step.status = 'finish')

    //all after wait
    this.steps.filter((s, i) => {
      return i > value
    }).forEach((step) => step.status = 'wait')
  }

  get current() {
    return this._current
  }

  @Input()
  set direction(value) {
    this._direction = value
  }

  @ViewChildren('steps') stepList: QueryList<any>

  get direction() {
    return this._direction
  }

  constructor() {
  }

  ngOnInit() {
    //init status
    this.steps[0].status = 'process'

  }

  addStep(step: StepComponent) {
    this.steps.push(step)
  }

  get marginPx() {
    return -this.margin + 'px'
  }

  stepWidth(i) {
    let width = i == ( this.steps.length - 1) ? '' : (100 / (this.steps.length - 1)) + '%'
    return width
  }

  isLast(i) {
    return i != this.steps.length - 1
  }

  ngAfterViewInit() {
    let array = this.stepList.toArray()
    let last = array[array.length - 1]
    let width = last.nativeElement.offsetWidth
    setTimeout(_ => {
      this.margin = (width + 10) / (this.steps.length - 1)
    })

  }

}
