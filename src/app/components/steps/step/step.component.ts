import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {StepsComponent} from "../steps.component";

@Component({
  selector: 'at-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {

  constructor(private parent: StepsComponent, public el: ElementRef) {
    this.parent.addStep(this)
  }

  ngOnInit() {

  }

  @Input() icon

  status: 'finish' | 'process' | 'wait' | 'success' | 'error' = 'wait'

  @Input() title: string = ''

  @Input() description: string = ''

  get finnalStatus() {
    return ''
  }


}
