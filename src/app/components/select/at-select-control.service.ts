import { Injectable }               from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { AtOptionComponent }        from './at-option.component';

@Injectable()
export class AtSelectControlService {

  options: AtOptionComponent[] = [];

  selected_value = [];

  $writeValueChange = new BehaviorSubject([]);

  constructor() {
    this.$writeValueChange.asObservable().pipe().subscribe((value: any[]) => {
      this.selected_value = value;
      // console.log(this.selected_value)
      this.options.forEach(option => {
          if (value.indexOf(option.atValue) > -1) {
            option.selected = true;
          } else {
            option.selected = false;
          }
        }
      );
      // console.log('select value changes')
      // console.log(this.options)
      this.$optionsChange.next(this.options);
    });
  }

  $openStatus = new BehaviorSubject<boolean>(false);

  $optionsChange = new BehaviorSubject([]);

  $selectOptionChange = new BehaviorSubject([null]);

  $searchValueChange = new BehaviorSubject<string>('');

  pushOptions(option: AtOptionComponent) {
    this.options.push(option);
    this.options.forEach(option => {
        if (this.selected_value.indexOf(option.atValue) > -1) {
          option.selected = true;
        } else {
          option.selected = false;
        }
        // console.log('check option status by current selected value',option.atValue)
      }
    );
    this.$optionsChange.next(this.options);
    // console.log('push options', this.options)
    // console.log('current write value', this.selected_value)
  }

  removeOption(option) {
    this.options = this.options.filter(_ => _ !== option);
  }

  removeValue(value) {
    const selected_value = this.selected_value.filter(_ => _ !== value);
    this.$selectOptionChange.next(selected_value);
  }

}
