import {
  Component,
  Prop,
  h,
  Watch,
  EventEmitter,
  State,
  Event,
} from '@stencil/core';
import { CalendarEntry } from '../../util/calendar-entry';
import { Calendar } from '../../util/calendar';

@Component({
  tag: 'kizuna-calendar',
  styleUrl: 'kizuna-calendar.css',
})
export class KizunaPopover {
  @Prop() dayNames = ['M', 'T', 'W', 'Th', 'F', 'Sa', 'Su'];
  @Prop() monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  @Prop() showFillDays = true;
  @Prop() darkmode: boolean = false;
  @Prop() onChange: Function;
  @Prop() position: string;
  @Prop() value: string;
  @Prop() classes: { [key: string]: any };

  @State() date = Calendar.getToday();
  @State() daysInMonth: number[];
  @State() selectedDate: CalendarEntry;
  @State() open: boolean = false;

  @Event({
    eventName: 'dayChanged',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  dayChanged: EventEmitter<CalendarEntry>;
  @Event({
    eventName: 'monthChanged',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  monthChanged: EventEmitter<CalendarEntry>;

  private startOfMonth: number;
  private endOfMonth: number;
  readonly today: CalendarEntry;

  constructor() {
    this.today = Calendar.getToday();
  }

  @Watch('date')
  watchDate(date: CalendarEntry): void {
    if ('month' in date && 'year' in date) {
      this.selectedDate = date;
    }
  }

  componentWillLoad() {
    this._initCalendar();
  }

  _initCalendar = () => {
    this.setCalendarDetails();
    this.setInitialSelectedDate();
  };

  setCalendarDetails(): void {
    const date = this.getValidDate();
    const calendar = new Calendar(date.year, date.month);
    this.daysInMonth = calendar.getCalendarDays();

    this.selectedDate = { ...this.selectedDate };

    this.startOfMonth = calendar.getStartOfMonth();
    this.endOfMonth = calendar.daysInCalendar - calendar.getEndOfMonth();
  }

  getValidDate(): CalendarEntry {
    let date = this.date;
    if (!('month' in this.date && 'year' in this.date)) {
      date = this.today;
    }

    return date;
  }

  dayChangedHandler(calendarEntry: CalendarEntry): void {
    this.dayChanged.emit(calendarEntry);
    this.onChange(this.selectedDate);
  }

  daySelectedHandler = (day, isPreviousDate, isNextMonthDate): void => {
    if (isPreviousDate) {
      if (this.selectedDate.month !== 1) {
        this.selectedDate = {
          day,
          month: this.date.month - 1,
          year: this.date.year,
        };
      } else {
        this.selectedDate = {
          day,
          month: 12,
          year: this.date.year - 1,
        };
      }

      this.switchToPreviousMonth();
    } else if (isNextMonthDate) {
      this.selectedDate = {
        day,
        month: this.date.month,
        year: this.date.year,
      };

      if (this.selectedDate.month !== 12) {
        this.selectedDate.month += 1;
      } else {
        this.selectedDate.month = 1;
        this.selectedDate.year += 1;
      }

      this.switchToNextMonth();
    }
    this.selectedDate = {
      day,
      month: this.date.month,
      year: this.date.year,
    };

    this.date = { ...this.selectedDate };
    this.dayChangedHandler(this.selectedDate);
  };

  monthChangedHandler(calendarEntry: CalendarEntry): void {
    this.monthChanged.emit(calendarEntry);
  }

  switchToPreviousMonth = (): void => {
    if (this.date.month !== 1) {
      this.date.month -= 1;
    } else {
      this.date.month = 12;
      this.date.year -= 1;
    }

    if (typeof this.date !== 'undefined') {
      delete this.date.day;
    }

    this.setCalendarDetails();
    this.monthChangedHandler(this.date);
  };

  switchToNextMonth = (): void => {
    if (this.date.month !== 12) {
      this.date.month += 1;
    } else {
      this.date.month = 1;
      this.date.year += 1;
    }

    delete this.date.day;

    this.setCalendarDetails();
    this.monthChangedHandler(this.date);
  };

  getDateClassNames = (
    day: number,
    month: number,
    year: number,
    index: number,
  ): string => {
    let classNameDigit = [];

    if (this.isToday(day, month, year, index)) {
      classNameDigit.push('active');
    }

    if (this.isSelectedDay(day, index)) {
      classNameDigit.push('selected');
    }

    return classNameDigit.join(' ');
  };

  isToday(day: number, month: number, year: number, index: number): boolean {
    return (
      this.today.day === day &&
      this.today.month === month &&
      this.today.year === year &&
      this.today.year === year &&
      !(index < this.startOfMonth || index >= this.endOfMonth)
    );
  }

  isSelectedDay(day: number, index: number) {
    return (
      typeof this.selectedDate !== 'undefined' &&
      this.selectedDate.day === day &&
      this.selectedDate.month === this.date.month &&
      this.selectedDate.year === this.date.year &&
      !(index < this.startOfMonth || index >= this.endOfMonth)
    );
  }

  _renderDaysInMonth = () => {
    return this.daysInMonth.map((day, index) => {
      const classNameDigit = this.getDateClassNames(
        day,
        this.date.month,
        this.date.year,
        index,
      );

      const isPreviousDate = index < this.startOfMonth;
      const isNextMonthDate = index >= this.endOfMonth;
      const isDateDisabled = isPreviousDate || isNextMonthDate;

      return (
        <span
          class={`date-container`}
          onClick={() =>
            this.daySelectedHandler(day, isPreviousDate, isNextMonthDate)
          }
        >
          <i class={`${classNameDigit} ${isDateDisabled && 'date-disabled'}`}>
            {day}
          </i>
        </span>
      );
    });
  };

  setInitialSelectedDate = () => {
    const newSelectedDate = this?.value
      ? this._convertDateStringToCalendarDateObj()
      : Calendar.getToday();

    this.date = { ...newSelectedDate };

    this.setCalendarDetails();
    this.monthChangedHandler(this.date);
    this.dayChangedHandler(this.date);
  };

  setSelectedToCurrentDate = () => {
    const newSelectedDate = Calendar.getToday();

    this.date = { ...newSelectedDate };

    this.setCalendarDetails();
    this.monthChangedHandler(this.date);
    this.dayChangedHandler(this.date);
  };

  _toggleCalendar = () => {
    this.open = !this.open;
  };

  _getPositionClassName = () => {
    switch (this.position) {
      case 'left':
        return 'left-align-calendar';
      case 'right':
        return 'right-align-calendar';
      case 'center':
        return 'center-align-calendar';

      default:
        return '';
    }
  };

  _convertDateStringToCalendarDateObj = () => {
    return {
      day: new Date(this?.value).getDate(),
      month: new Date(this?.value).getMonth() + 1,
      year: new Date(this?.value).getFullYear(),
    };
  };

  render() {
    const date = this.getValidDate();

    return (
      <div class="calendar-wrapper">
        <span onClick={this._toggleCalendar}>
          <kizuna-icon
            name="calendar"
            classes={{
              root: this.classes?.calenderIcon,
            }}
          />
        </span>

        {this.open && (
          <div
            class={`calendar ${this._getPositionClassName()} ${
              this.darkmode && 'calendar-darkmode'
            }`}
          >
            <header>
              <span onClick={this.switchToPreviousMonth}>
                <kizuna-icon name="left"></kizuna-icon>
              </span>
              <span>
                {this.monthNames[date.month - 1]} {date.year}
              </span>
              <span onClick={this.switchToNextMonth}>
                <kizuna-icon name="right"></kizuna-icon>
              </span>
            </header>

            <div class="day-names">
              {this.dayNames.map(dayName => (
                <span>{dayName}</span>
              ))}
            </div>

            <div class="days-in-month">{this._renderDaysInMonth()}</div>

            <div class="calender-buttons">
              <kizuna-button
                text="Today"
                type="primary"
                onClick={this.setSelectedToCurrentDate}
              ></kizuna-button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
