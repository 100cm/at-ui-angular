import {Component, ContentChildren, Input, OnInit, QueryList, ViewChildren} from '@angular/core';
import {StepComponent} from "./step/step.component";

@Component({
  selector: 'at-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
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
