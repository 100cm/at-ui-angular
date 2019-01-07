export interface AtI18nInterface {
  locale: string;
  DatePicker:
    {
      chooseTime: string, chooseDate: string,
      Monday: string, TuesDay: string, Wednesday: string, ThursDay: string, Friday: string, Saturday: string, Sunday: string,
      MonthName: string,
      YearName: string
    };
  Select: {
    notFoundContent: string
  };
  Page: {
    go: string,
    per: string,
    page: string,
    total: string,
    result: string,
    next: string,
    first: string,
    last: string,
    previous: string,
    back: string,
    to: string
  };
}
