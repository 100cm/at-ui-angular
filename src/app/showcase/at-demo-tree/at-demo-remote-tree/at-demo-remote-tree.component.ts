import { Component, OnInit } from '@angular/core';
import { AtFormatEmitEvent } from '../../../components/tree';

@Component({
  selector: 'app-at-demo-remote-tree',
  templateUrl: './at-demo-remote-tree.component.html',
  styleUrls: ['./at-demo-remote-tree.component.css']
})
export class AtDemoRemoteTreeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

  }

  nodes = [
    {title: 'Expand to load', key: '0'},
    {title: 'Expand to load', key: '1'},
    {title: 'Tree Node', key: '2', isLeaf: true}
  ];

  atEvent(event: AtFormatEmitEvent): void {
    console.log(event);
    // load child async
    if (event.eventName === 'expand') {
      setTimeout(_ => {
        if (event.node.getChildren().length === 0 && event.node.isExpanded) {
          event.node.addChildren([
            {title: 'Child Node', key: `${event.node.key}-0`},
            {title: 'Child Node', key: `${event.node.key}-1`}]);
        }
      }, 1000);
    } else {
      event.node.remove();
    }
  }

  tree = [];

}
