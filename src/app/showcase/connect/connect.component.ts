import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  active(href) {
    let location = window.location.hash;
    location = location.replace('#', '');
    const bol = location.indexOf(href) != -1;
    return bol;
  }

}
