import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import * as HighLight                                    from 'highlight.js'

@Component({
             selector: '[app-high-light]',
             template: `
               <pre style="padding: 0px 12px" [ngClass]="'language-'+atLanguage"><code #code
                                                                                       [innerText]="atCode"></code></pre>
             `,
             styleUrls: ['./high-light.component.css']
           })
export class HighLightComponent implements OnInit {
  _code;
  @ViewChild('code') codeElement: ElementRef;
  @Input() atLanguage: string = 'html';


  get atCode() {
    return this._code || '';
  };

  @Input()
  set atCode(value) {
    this._code = value
  }

  ngAfterViewInit() {
    (<any>HighLight).highlightBlock(this.codeElement.nativeElement);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
