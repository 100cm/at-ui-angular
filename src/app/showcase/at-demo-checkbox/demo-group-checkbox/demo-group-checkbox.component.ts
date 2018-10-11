import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo-group-checkbox',
  template: '<at-checkbox-group [(ngModel)]="list" ></at-checkbox-group>',
  styleUrls: ['./demo-group-checkbox.component.css']
})
export class DemoGroupCheckboxComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  list = [
    {label: 'Apple', value: 'Apple', checked: true},
    {label: 'Pear', value: 'Pear', checked: false},
    {label: 'Orange', value: 'Orange'},
  ];

}
