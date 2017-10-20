import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo-custom-modal',
  templateUrl: './demo-custom-modal.component.html',
  styleUrls: ['./demo-custom-modal.component.css']
})
export class DemoCustomModalComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  header = false
  footer = false
  closer = false;
  confirmer = false;

}
