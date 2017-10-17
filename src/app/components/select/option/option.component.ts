import {Component, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import {SelectComponent} from "../select.component";

@Component({
  selector: 'atOption',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {


  constructor(public _selectComponent: SelectComponent) {
    this._selectComponent.addOption(this)
  }

  ngOnInit() {
  }

  _atLabel: string
  _selected: boolean = false
  _atValue: any
  private _isTag:boolean = false


  get isTag(): boolean {
    return this._isTag;
  }

  set isTag(value: boolean) {
    this._isTag = value;
  }

  private _disabled: boolean = false


  get disabled(): boolean {
    return this._disabled;
  }

  @Input()
  set disabled(value: boolean) {
    this._disabled = value;
  }

  get atValue(): any {
    return this._atValue;
  }

  @Input()
  set atValue(value: any) {
    this._atValue = value;
  }

  get atLabel(): string {
    return this._atLabel;
  }

  @Input()
  set atLabel(value: string) {
    this._atLabel = value;
  }


}
