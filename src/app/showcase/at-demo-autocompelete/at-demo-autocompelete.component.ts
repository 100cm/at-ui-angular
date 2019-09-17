import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-at-demo-autocompelete',
  templateUrl: './at-demo-autocompelete.component.html',
  styleUrls: ['./at-demo-autocompelete.component.css']
})
export class AtDemoAutocompeleteComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    setTimeout(_ => {
      this.changeSource();
    }, 5000);
  }

  dataSource = [
    '123', '123123', '123123', '123123', '123123', '123123123'
  ];

  model = '';

  changeSource(): void {
    this.dataSource = ['123', 'sdad'];
  }
}
