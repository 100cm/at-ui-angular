import {Pipe, PipeTransform} from '@angular/core';
import {OptionComponent} from "../option/option.component";

export type TFilterOption = (input?: string, option?: OptionComponent) => boolean;

@Pipe({
  name: 'atOptionFilter'
})
export class OptionPipe implements PipeTransform {

  transform(options: OptionComponent[], input: string, filterOption: TFilterOption, serverSearch: boolean = false): OptionComponent[] {
    if (serverSearch || !input) {
      return options;
    } else {
      return options.filter(o => filterOption(input, o));
    }
  }

}
export function defaultFilterOption(input: string, option: OptionComponent): boolean {
  if (option && option.atLabel) {
    return option.atLabel.toLowerCase().indexOf(input.toLowerCase()) > -1;
  } else {
    return false;
  }
}
