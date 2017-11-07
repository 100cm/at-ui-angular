import { Moment } from "moment";
export interface AtDate {
    number: number;
    isLastMonth: boolean;
    isNextMonth: boolean;
    isCurrentDay: boolean;
    isSelectedDay: boolean;
    title: string;
    date: Moment;
    disabled: boolean;
    firstDisabled: boolean;
    lastDisabled: boolean;
}
