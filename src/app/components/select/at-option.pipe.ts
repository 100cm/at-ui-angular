/* tslint:disable:no-any */
import { Pipe, PipeTransform }    from '@angular/core';
import { AtOptionGroupComponent } from './at-option-group.component';
import { AtOptionComponent }      from './at-option.component';

export type TFilterOption = (input?: string, option?: AtOptionComponent) => boolean;

// TODO: can not dynamic change pipe pure yet
@Pipe({name: 'atFilterOptionPipe'})
export class AtOptionPipe implements PipeTransform {
  transform(options: AtOptionComponent[], input: string, filterOption: TFilterOption, serverSearch: boolean): AtOptionComponent[] {
    if (serverSearch || !input) {
      return options;
    } else {
      return options.filter(o => filterOption(input, o));
    }
  }
}

@Pipe({name: 'atSubFilterOptionPipe'})
export class atSubOptionPipe implements PipeTransform {
  transform(groups: AtOptionGroupComponent[], input: string, filterOption: TFilterOption, serverSearch: boolean): AtOptionGroupComponent[] {
    if (serverSearch || !input) {
      return groups;
    } else {
      return groups.filter(g => {
        return g.listOfatOptionComponent.some(o => filterOption(input, o));
      });
    }
  }
}

export function defaultFilterOption(input: string, option: AtOptionComponent): boolean {
  if (option && option.atLabel) {
    return option.atLabel.toString().toLowerCase().indexOf(input.toLowerCase()) > -1;
  } else {
    return false;
  }
}
