import { Component, OnInit } from '@angular/core';
import { DemoBasicStepsComponent } from '../demo-basic-steps/demo-basic-steps.component';

@Component({
  selector: 'app-demo-size-steps',
  templateUrl: './demo-size-steps.component.html',
  styleUrls: ['./demo-size-steps.component.css']
})
export class DemoSizeStepsComponent extends DemoBasicStepsComponent implements OnInit {

  ngOnInit() {
  }

}
