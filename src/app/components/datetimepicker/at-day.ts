import * as MomentI from 'moment';

const Moment = MomentI;

export interface AtDate {
  number: number;
  isLastMonth: boolean;
  isNextMonth: boolean;
  isCurrentDay: boolean;
  isSelectedDay: boolean;
  title: string;
  date: any;
  disabled: boolean;
  firstDisabled: boolean;
  lastDisabled: boolean;
}
