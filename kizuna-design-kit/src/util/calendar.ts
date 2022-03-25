import { CalendarEntry } from './calendar-entry';

export class Calendar {
  readonly year: number;
  readonly month: number;
  readonly daysInCalendarWithFiveRows = 42;
  readonly daysInCalendarWithFourRows = 35;
  readonly daysInCalendarWithThreeRows = 28;

  public daysInCalendar = this.daysInCalendarWithFourRows;

  private startOfMonth = 0;
  private endOfMonth = 0;
  private currentMonthCount: number;
  private fillCount = [6, 0, 1, 2, 3, 4, 5];

  constructor(year: number, month: number) {
    this.year = year;
    this.month = month;
  }

  public getCalendarDays(): number[] {
    const daysOfCurrentMonth = this.getDaysOfCurrentMonth();
    const startOfMonth = this.fillCount[this.getFirstDayOfMonth()];
    const endOfMonth =
      this.daysInCalendarWithFourRows -
      (daysOfCurrentMonth.length + startOfMonth);

    this.currentMonthCount = daysOfCurrentMonth.length;
    this.startOfMonth = startOfMonth;
    this.endOfMonth = endOfMonth;

    const fillStart =
      startOfMonth > 0 ? this.getDaysOfLastMonth(startOfMonth) : [];
    const fillEnd = this.getDaysOfNextMonth(endOfMonth);

    return fillStart.concat(daysOfCurrentMonth).concat(fillEnd);
  }

  private getDaysOfCurrentMonth(): number[] {
    return this.getDaysOfMonth(this.month);
  }

  private getDaysOfLastMonth(startOfMonth: number): number[] {
    const daysOfMonth = this.getDaysOfMonth(this.month - 1);

    return daysOfMonth.slice(-startOfMonth);
  }

  private getDaysOfNextMonth(endCount: number): number[] {
    const daysOfMonth = this.getDaysOfMonth(this.month + 1);

    let slicedDays;
    if (endCount <= -1) {
      endCount =
        this.daysInCalendarWithFiveRows -
        (this.currentMonthCount + this.startOfMonth);
      slicedDays = daysOfMonth.slice(0, endCount);
      this.daysInCalendar = this.daysInCalendarWithFiveRows;
      this.endOfMonth = endCount;
    } else if (
      endCount === 7 &&
      this.currentMonthCount + this.startOfMonth === 28
    ) {
      endCount =
        this.daysInCalendarWithThreeRows -
        (this.currentMonthCount + this.startOfMonth);
      slicedDays = daysOfMonth.slice(0, endCount);
      this.daysInCalendar = this.daysInCalendarWithThreeRows;
      this.endOfMonth = endCount;
    } else {
      slicedDays = daysOfMonth.slice(0, endCount);
    }

    return slicedDays;
  }

  private getDaysOfMonth(month: number): number[] {
    const daysOfMonth = new Date(this.year, month, 0).getDate();

    return Array.from({ length: daysOfMonth }, (_, i) => i + 1);
  }

  public getFirstDayOfMonth(): number {
    return new Date(this.year, this.month - 1, 1).getDay();
  }

  public getStartOfMonth(): number {
    return this.startOfMonth;
  }

  public getEndOfMonth(): number {
    return this.endOfMonth;
  }

  public static getToday(): CalendarEntry {
    return {
      day: new Date().getDate(),
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
    };
  }
}
