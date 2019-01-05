import {Component, Input, OnInit} from '@angular/core';
import {CdkOverlayOrigin}         from '@angular/cdk/overlay';
import {DropDownAnimation}        from '../animations/drop-down-animation';

@Component({
  selector: 'at-auto-complete',
  template: `

    <ng-template
      cdkConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="true"
      [cdkConnectedOverlayOrigin]="cdkOverlayOrigin"
      (backdropClick)="close()"
      [cdkConnectedOverlayWidth]="overlayWidth"
      [cdkConnectedOverlayMinWidth]="overlayMinWidth"
      [cdkConnectedOverlayOpen]="atOpen">
      <div [@dropDownAnimation]="dropDownPosition ">
        <div class="at-select__dropdown at-select__dropdown--bottom">
          <ul
            #dropdownUl
            class="at-select__list"
            role="menu"
            tabindex="0">
            <ng-container *ngFor="let item of atDataSource">
              <li *ngIf="highlight(item).length" (click)="changeAuto(item)" class="at-select__option">
                {{highlight(item)[0]}}
                <span style="color:#6190E8">{{ highlight(item).length ? searchValue : ''}}</span>{{highlight(item)[1]}}
              </li>
              <li *ngIf="!highlight(item).length" (click)="changeAuto(item)" class="at-select__option">
                {{item}}
              </li>
            </ng-container>
          </ul>
        </div>

      </div>
    </ng-template>

  `,
  animations: [DropDownAnimation]
})
export class AutoCompleteComponent implements OnInit {


  public cdkOverlayOrigin: CdkOverlayOrigin

  constructor() {
  }

  ngOnInit() {
  }

  close() {
    this.atOpen = false
  }

  @Input() atDataSource = []

  overlayMinWidth
  overlayWidth

  dropDownPosition: 'top' | 'center' | 'bottom' | 'hidden' = 'bottom';

  atOpen = false

  bindComponent

  searchValue = ''


  changeValue(value, origin, component) {
    this.bindComponent = component
    if (value) {
      this.cdkOverlayOrigin = {elementRef: origin}
      const width = origin.nativeElement.offsetWidth
      this.overlayMinWidth = width
      this.overlayWidth = width
      this.atOpen = true
      this.searchValue = value
    } else {
      this.atOpen = false
    }
  }

  highlight(item) {
    let highlightKeys = []
    if (this.searchValue && item.includes(this.searchValue)) {
      const index = item.indexOf(this.searchValue);
      highlightKeys.push(item.slice(0, index));
      highlightKeys.push(item.slice(index + this.searchValue.length, item.length));
    }
    return highlightKeys
  }

  changeAuto(value) {
    this.cdkOverlayOrigin.elementRef.nativeElement.value = value
    this.bindComponent._value = value
    this.bindComponent.onChange(value)
    this.searchValue = value
    this.atOpen = false
  }

}
