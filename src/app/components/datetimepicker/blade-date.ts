import {
  addMonths,
  addWeeks,
  addYears,
  endOfMonth,
  format as fnsFormat,
  setDay,
  setHours,
  setMinutes,
  setMonth,
  setSeconds
} from 'date-fns';
export interface IndexableObject {
  [key: string]: any; // tslint:disable-line:no-any
}

export class BladeDate implements IndexableObject {
  nativeDate: Date;

  // locale: string; // Custom specified locale ID

  constructor(date?: Date | string | BladeDate) {

    if (date) {
      if (date instanceof Date) {
        this.nativeDate = date;
      } else if (typeof date === 'string') {
        this.nativeDate = new Date(date);
      } else {
        this.nativeDate = date.nativeDate;
      }
    } else {
      this.nativeDate = new Date();
    }
  }

  // getLocale(): string {
  //   return this.locale;
  // }

  // setLocale(locale: string): BladeDate {
  //   this.locale = locale;
  //   return this;
  // }

  // ---------------------------------------------------------------------
  // | Native shortcuts
  // ---------------------------------------------------------------------

  getYear(): number {
    return this.nativeDate.getFullYear();
  }

  getMonth(): number {
    return this.nativeDate.getMonth();
  }

  getDay(): number {
    return this.nativeDate.getDay();
  }

  getTime(): number {
    return this.nativeDate.getTime();
  }

  getDate(): number {
    return this.nativeDate.getDate();
  }

  getHours(): number {
    return this.nativeDate.getHours();
  }

  getMinutes(): number {
    return this.nativeDate.getMinutes();
  }

  getSeconds(): number {
    return this.nativeDate.getSeconds();
  }

  getMilliseconds(): number {
    return this.nativeDate.getMilliseconds();
  }

  format(formatStr: string): string {
    return fnsFormat(this.nativeDate, formatStr);
  }

  // ---------------------------------------------------------------------
  // | New implementing APIs
  // ---------------------------------------------------------------------

  clone(): BladeDate {
    return new BladeDate(new Date(this.nativeDate));
  }

  setHms(hour: number, minute: number, second: number): BladeDate {
    const date = new Date(this.nativeDate);
    date.setHours(hour, minute, second);
    return new BladeDate(date);
  }

  setYear(year: number): BladeDate {
    // return new BladeDate(setYear(this.date, year));
    const date = new Date(this.nativeDate);
    date.setFullYear(year);
    return new BladeDate(date);
  }

  addYears(amount: number): BladeDate {
    return new BladeDate(addYears(this.nativeDate, amount));
  }

  // NOTE: month starts from 0
  // NOTE: Don't use the native API for month manipulation as it not restrict the date when it overflows, eg. (new Date('2018-7-31')).setMonth(1) will be date of 2018-3-03 instead of 2018-2-28
  setMonth(month: number): BladeDate {
    // const date = new Date(this.nativeDate);
    // date.setMonth(month);
    // return new BladeDate(date);
    return new BladeDate(setMonth(this.nativeDate, month));
  }

  addMonths(amount: number): BladeDate {
    return new BladeDate(addMonths(this.nativeDate, amount));
  }

  addWeeks(amount: number): BladeDate {
    return new BladeDate(addWeeks(this.nativeDate, amount));
  }

  setDay(day: number, options?: { weekStartsOn: number }): BladeDate {
    return new BladeDate(setDay(this.nativeDate, day, options));
  }

  setSeconds(second: number): BladeDate {
    return new BladeDate(setSeconds(this.nativeDate, second));
  }

  setMinutes(minutes: number): BladeDate {
    return new BladeDate(setMinutes(this.nativeDate, minutes));
  }

  setHours(hour: number): BladeDate {
    return new BladeDate(setHours(this.nativeDate, hour));
  }

  setDate(amount: number): BladeDate {
    const date = new Date(this.nativeDate);
    date.setDate(amount);
    return new BladeDate(date);
  }

  addDays(amount: number): BladeDate {
    return this.setDate(this.getDate() + amount);
  }

  endOf(grain: 'month'): BladeDate | null {
    switch (grain) {
      case 'month':
        return new BladeDate(endOfMonth(this.nativeDate));
    }
    return null;
  }

  isSame(date: BladeDate | Date, grain: BladeDateCompareGrain): boolean {
    // TODO: Precipitate into a function "compare()"
    if (date) {
      const left = this.toNativeDate();
      const right = this.toNativeDate(date);
      switch (grain) {
        case 'year':
          return left.getFullYear() === right.getFullYear();
        case 'month':
          return left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth();
        case 'day':
          return (
            left.getFullYear() === right.getFullYear() &&
            left.getMonth() === right.getMonth() &&
            left.getDate() === right.getDate()
          );
        case 'hour':
          return (
            left.getFullYear() === right.getFullYear() &&
            left.getMonth() === right.getMonth() &&
            left.getDate() === right.getDate() &&
            left.getHours() === right.getHours()
          );
        case 'minute':
          return (
            left.getFullYear() === right.getFullYear() &&
            left.getMonth() === right.getMonth() &&
            left.getDate() === right.getDate() &&
            left.getHours() === right.getHours() &&
            left.getMinutes() === right.getMinutes()
          );
        case 'second':
          return (
            left.getFullYear() === right.getFullYear() &&
            left.getMonth() === right.getMonth() &&
            left.getDate() === right.getDate() &&
            left.getHours() === right.getHours() &&
            left.getMinutes() === right.getMinutes() &&
            left.getSeconds() === right.getSeconds()
          );
      }
    }
    return false;
  }

  isAfter(date: BladeDate | Date | null, grain: BladeDateCompareGrain): boolean {
    // TODO: Precipitate into a function "compare()"
    if (date) {
      const left = this.toNativeDate();
      const right = this.toNativeDate(date);
      switch (grain) {
        case 'year':
          return left.getFullYear() > right.getFullYear();
        case 'month':
          return (
            left.getFullYear() > right.getFullYear() ||
            (left.getFullYear() === right.getFullYear() && left.getMonth() > right.getMonth())
          );
        case 'day':
          return (
            left.getFullYear() > right.getFullYear() ||
            (left.getFullYear() === right.getFullYear() && left.getMonth() > right.getMonth()) ||
            (left.getFullYear() === right.getFullYear() &&
              left.getMonth() === right.getMonth() &&
              left.getDate() > right.getDate())
          );
        case 'hour':
          return (
            left.getFullYear() > right.getFullYear() ||
            (left.getFullYear() === right.getFullYear() && left.getMonth() > right.getMonth()) ||
            (left.getFullYear() === right.getFullYear() &&
              left.getMonth() === right.getMonth() &&
              left.getDate() > right.getDate()) ||
            (left.getFullYear() === right.getFullYear() &&
              left.getMonth() === right.getMonth() &&
              left.getDate() === right.getDate() &&
              left.getHours() > right.getHours())
          );
        case 'minute':
          return (
            left.getFullYear() > right.getFullYear() ||
            (left.getFullYear() === right.getFullYear() && left.getMonth() > right.getMonth()) ||
            (left.getFullYear() === right.getFullYear() &&
              left.getMonth() === right.getMonth() &&
              left.getDate() > right.getDate()) ||
            (left.getFullYear() === right.getFullYear() &&
              left.getMonth() === right.getMonth() &&
              left.getDate() === right.getDate() &&
              left.getHours() > right.getHours()) ||
            (left.getFullYear() === right.getFullYear() &&
              left.getMonth() === right.getMonth() &&
              left.getDate() === right.getDate() &&
              left.getHours() === right.getHours() &&
              left.getMinutes() > right.getMinutes())
          );
        case 'second':
          return (
            left.getFullYear() > right.getFullYear() ||
            (left.getFullYear() === right.getFullYear() && left.getMonth() > right.getMonth()) ||
            (left.getFullYear() === right.getFullYear() &&
              left.getMonth() === right.getMonth() &&
              left.getDate() > right.getDate()) ||
            (left.getFullYear() === right.getFullYear() &&
              left.getMonth() === right.getMonth() &&
              left.getDate() === right.getDate() &&
              left.getHours() > right.getHours()) ||
            (left.getFullYear() === right.getFullYear() &&
              left.getMonth() === right.getMonth() &&
              left.getDate() === right.getDate() &&
              left.getHours() === right.getHours() &&
              left.getMinutes() > right.getMinutes()) ||
            (left.getFullYear() === right.getFullYear() &&
              left.getMonth() === right.getMonth() &&
              left.getDate() === right.getDate() &&
              left.getHours() === right.getHours() &&
              left.getMinutes() === right.getMinutes() &&
              left.getSeconds() > right.getSeconds())
          );
      }
    }
    return false;
  }

  // TODO: Precipitate into a function "compare()"
  isBefore(date: BladeDate | Date | null, grain: BladeDateCompareGrain): boolean {
    if (date) {
      const left = this.toNativeDate();
      const right = this.toNativeDate(date);
      switch (grain) {
        case 'year':
          return left.getFullYear() < right.getFullYear();
        case 'month':
          return (
            left.getFullYear() < right.getFullYear() ||
            (left.getFullYear() === right.getFullYear() && left.getMonth() < right.getMonth())
          );
        case 'day':
          return (
            left.getFullYear() < right.getFullYear() ||
            (left.getFullYear() === right.getFullYear() && left.getMonth() < right.getMonth()) ||
            (left.getFullYear() === right.getFullYear() &&
              left.getMonth() === right.getMonth() &&
              left.getDate() < right.getDate())
          );
        case 'hour':
          return (
            left.getFullYear() < right.getFullYear() ||
            (left.getFullYear() === right.getFullYear() && left.getMonth() < right.getMonth()) ||
            (left.getFullYear() === right.getFullYear() &&
              left.getMonth() === right.getMonth() &&
              left.getDate() < right.getDate()) ||
            (left.getFullYear() === right.getFullYear() &&
              left.getMonth() === right.getMonth() &&
              left.getDate() === right.getDate() &&
              left.getHours() < right.getHours())
          );
        case 'minute':
          return (
            left.getFullYear() < right.getFullYear() ||
            (left.getFullYear() === right.getFullYear() && left.getMonth() < right.getMonth()) ||
            (left.getFullYear() === right.getFullYear() &&
              left.getMonth() === right.getMonth() &&
              left.getDate() < right.getDate()) ||
            (left.getFullYear() === right.getFullYear() &&
              left.getMonth() === right.getMonth() &&
              left.getDate() === right.getDate() &&
              left.getHours() < right.getHours()) ||
            (left.getFullYear() === right.getFullYear() &&
              left.getMonth() === right.getMonth() &&
              left.getDate() === right.getDate() &&
              left.getHours() === right.getHours() &&
              left.getMinutes() < right.getMinutes())
          );
        case 'second':
          return (
            left.getFullYear() < right.getFullYear() ||
            (left.getFullYear() === right.getFullYear() && left.getMonth() < right.getMonth()) ||
            (left.getFullYear() === right.getFullYear() &&
              left.getMonth() === right.getMonth() &&
              left.getDate() < right.getDate()) ||
            (left.getFullYear() === right.getFullYear() &&
              left.getMonth() === right.getMonth() &&
              left.getDate() === right.getDate() &&
              left.getHours() < right.getHours()) ||
            (left.getFullYear() === right.getFullYear() &&
              left.getMonth() === right.getMonth() &&
              left.getDate() === right.getDate() &&
              left.getHours() === right.getHours() &&
              left.getMinutes() < right.getMinutes()) ||
            (left.getFullYear() === right.getFullYear() &&
              left.getMonth() === right.getMonth() &&
              left.getDate() === right.getDate() &&
              left.getHours() === right.getHours() &&
              left.getMinutes() === right.getMinutes() &&
              left.getSeconds() < right.getSeconds())
          );
      }
    }
    return false;
  }

  // Equal to today accurate to "day"
  isToday(): boolean {
    return this.isSame(new Date(), 'day');
  }

  isInvalid(): boolean {
    return isNaN(this.nativeDate.valueOf());
  }

  private toNativeDate(date: BladeDate | Date = this): Date {
    return date instanceof BladeDate ? date.nativeDate : date;
  }

  // compare(date: BladeDate, Date, grain: BladeDateCompareGrain = 'millisecond'): number {
  //   const level = { 'millisecond': 1, 'second': 1000, 'minute': 1000 * 60, 'hour': 1000 * 60 * 60, 'day': 1000 * 60 * 60 * 24 }[ grain ];
  //   const left = this.nativeDate.getTime() / level;
  //   const right = (date instanceof BladeDate ? date.nativeDate : date).getTime() / level;
  //   return Math.floor(left) - Math.floor(right);
  // }
}

export type BladeDateCompareGrain = 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second';

export type BladeDateCompareType = 'eq' | 'gt' | 'lt';
