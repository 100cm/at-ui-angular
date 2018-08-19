import {Component, ContentChild, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'at-badge',
  template: `<span class="at-badge at-badge--{{atType}}">
  <span #content>
  <ng-content>

  </ng-content>
  </span>
  <span *ngIf="!dot && show" class="at-badge"
        [ngClass]="{'at-badge--corner':(content.innerText.length > 0 || content.children.length >0),
        'at-badge--alone':(content.innerText.length == 0 && content.children.length == 0 )}">
  <sup class="at-badge__content" [ngClass]="{'at-badge--dot':dot}">{{dot ? '' : atValue}}</sup>
  </span>
    <sup *ngIf="dot && show" class="at-badge__content" [ngClass]="{'at-badge--dot':dot,'at-badge--corner':(content.innerText.length > 0 || content.children.length >0),
        'at-badge--alone':(content.innerText.length == 0 && content.children.length == 0 )}">{{dot ? '' : atValue}}</sup>
</span>
`
})
export class BadgeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  private _atValue: any

  @Input() atType: 'info' | 'warning' | 'error' | 'success' = 'info'
  @Input() max
  @Input() dot: boolean = false
  @Input() show: boolean = true


  get atValue(): any {
    if (this.max && this._atValue > this.max) {
      return this.max + '+'
    }
    return this._atValue;
  }

  @Input()
  set atValue(value: any) {
    this._atValue = value;
  }

  ngAfterViewInit() {

  }

}
