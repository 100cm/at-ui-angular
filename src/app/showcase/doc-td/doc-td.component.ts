import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[doc-td]',
  templateUrl: './doc-tr.component.html',
  styleUrls: ['./doc-tr.component.css']
})
export class DocTdComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  @Input() o = false;

}
