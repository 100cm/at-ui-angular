import { Component, Input, OnInit } from '@angular/core';
import { SlideAnimation }           from '../../components/animations/slide-animation';

@Component({
  selector: 'doc-section',
  templateUrl: './at-demo-doc-section.component.html',
  animations: SlideAnimation,
  styleUrls: ['./at-demo-doc-section.component.css']
})
export class AtDemoDocSectionComponent implements OnInit {

  @Input() title: string = '';

  @Input() code: string = '';

  @Input() sample: boolean = true;

  @Input() language = 'html';

  @Input() type = '';

  get tableType(): string {
    return {c: 'Component', d: 'Directive', s: 'Service'}[this.type];
  }

  showCode: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  setShow(): void {
    this.showCode = !this.showCode;
  }

  get expandState(): null | string {
    if (this.showCode) {
      return 'expand';
    }
    return null;
  }

}
