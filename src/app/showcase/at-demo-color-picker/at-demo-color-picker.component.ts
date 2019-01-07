import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-at-demo-color-picker',
  templateUrl: './at-demo-color-picker.component.html',
  styleUrls: ['./at-demo-color-picker.component.css']
})
export class AtDemoColorPickerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  color = '#1890ff';

  code = `<at-color-picker [(ngModel)]="color"></at-color-picker>`;
}
