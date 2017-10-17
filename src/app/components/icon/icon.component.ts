import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'atIcon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {

  constructor() {
  }

  @Input()
  type: string

  ngOnInit() {
  }

}
