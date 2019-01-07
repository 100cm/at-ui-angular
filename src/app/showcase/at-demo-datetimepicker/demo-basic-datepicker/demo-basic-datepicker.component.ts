import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-basic-datepicker',
  templateUrl: './demo-basic-datepicker.component.html',
  styleUrls: ['./demo-basic-datepicker.component.css']
})
export class DemoBasicDatepickerComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  current_date = '2018-03-27 19:00:00';

}
