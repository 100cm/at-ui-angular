import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { AtTreeNode } from '../tree/at-tree-node';
import { AtOptionComponent } from './at-option.component';

@Injectable()
export class AtSelectControlService {

  options: AtOptionComponent[] | AtTreeNode[] = [];

  selected_value = [];

  $writeValueChange = new BehaviorSubject([]);

  constructor() {
    this.$writeValueChange.asObservable().pipe().subscribe((value: any[]) => {
      this.selected_value = value;
      // console.log(this.selected_value)
      (this.options as AtOptionComponent[]).forEach(option => {
          if (value.indexOf(option.atValue) > -1) {
            option.selected = true;
          } else {
            option.selected = false;
          }
        }
      );
      // console.log(this.options)
      this.$optionsChange.next(this.options);
    });
  }

  $openStatus = new BehaviorSubject<boolean>(false);

  $optionsChange = new BehaviorSubject([]);

  $selectOptionChange = new BehaviorSubject([null]);

  $searchValueChange = new BehaviorSubject<string>('');

  pushOptions(option: AtOptionComponent): void {
    (this.options as AtOptionComponent[]).push(option);
    this.changeOptionStatus();
  }

  changeOptionStatus(value?: string[]): void {
    (this.options as AtOptionComponent[]).forEach(opt => {
        if ((value || this.selected_value).indexOf(opt.atValue) > -1) {
          opt.selected = true;
        } else {
          opt.selected = false;
        }
      }
    );
    this.$optionsChange.next(this.options);
  }

  removeOption(option: AtOptionComponent): void {
    this.options = (this.options as AtOptionComponent[]).filter(_ => _ !== option);
    this.$optionsChange.next(this.options);
  }

  removeValue(selectedValue: [], value: string | number): void {
    const selected_value = selectedValue.filter(_ => _ !== value);
    this.$selectOptionChange.next(selected_value);
    this.changeOptionStatus(selected_value);
  }

  removeTreeValue(options: AtTreeNode[], value: string | number): void {
    this.options = options.filter(op => op.key !== value);
    this.$optionsChange.next(this.options);
    this.$selectOptionChange.next(this.options);
  }

  removeAll(): void {
    this.changeOptionStatus([]);
  }

  removeAllTree() {
    this.$optionsChange.next([]);
    this.$selectOptionChange.next([]);
  }
}
