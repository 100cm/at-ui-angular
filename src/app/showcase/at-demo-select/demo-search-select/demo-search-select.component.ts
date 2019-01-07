import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-search-select',
  templateUrl: './demo-search-select.component.html',
  styleUrls: ['./demo-search-select.component.css']
})
export class DemoSearchSelectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  selected = ['first'];

  single = 'first';

  search(text) {
    console.log(text);
  }
}
