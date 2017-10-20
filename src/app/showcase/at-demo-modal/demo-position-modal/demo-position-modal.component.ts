import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo-position-modal',
  templateUrl: './demo-position-modal.component.html',
  styleUrls: ['./demo-position-modal.component.css']
})
export class DemoPositionModalComponent implements OnInit {
  position = false;
  width: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

}
