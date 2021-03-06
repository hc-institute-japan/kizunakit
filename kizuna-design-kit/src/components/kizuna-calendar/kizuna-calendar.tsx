import {
  Component,
  Prop,
  h,
  Watch,
  EventEmitter,
  State,
  Event,
  Element,
} from '@stencil/core';
import { CalendarEntry } from '../../util/calendar-entry';
import { Calendar } from '../../util/calendar';
import { v4 as uuidv4 } from 'uuid';

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
  @Prop() id: string = uuidv4();
  @Prop() darkmode: boolean = false;
  @Prop() position: string;
  @Prop() value: string;
  @Prop() classes: { [key: string]: any };

  @State() date = Calendar.getToday();
  @State() daysInMonth: number[];
  @State() selectedDate: CalendarEntry;
  @State() open: boolean = false;
  @Element() el: HTMLElement;

  componentWillLoad() {
    this._initCalendar();

    // window.addEventListener(
    //   'click',
    //   (e: Event) => {
    //     const target = e.target as HTMLElement;
    //     if (!this.el.contains(target)) {
    //       this.open = false;
    //     }
    //   },
    //   false,
    // );
  }

  @Event() handleChange: EventEmitter<CalendarEntry>;

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

  _setCalendarFocus = () => {
    const element = document.getElementById(`calendar-${this.id}`);
    element?.focus();
  };

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
    this.handleChange.emit(calendarEntry);
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
    this.dayChangedHandler(this.date);
  };

  setSelectedToCurrentDate = () => {
    const newSelectedDate = Calendar.getToday();

    this.date = { ...newSelectedDate };

    this.setCalendarDetails();
    this.dayChangedHandler(this.date);
    this.open = true;
    this._setCalendarFocus();
  };

  _toggleCalendar = () => {
    this.open = !this.open;
    this._setCalendarFocus();
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
      <div class={`calendar-wrapper `}>
        <span
          onClick={this.open ? e => e.preventDefault() : this._toggleCalendar}
          class={`${this.open && 'disabled-click-event'}`}
        >
          <kizuna-icon
            name="calendar"
            classes={{
              root: this.classes?.calenderIcon,
            }}
          />
        </span>
        <div
          id={`calendar-${this.id}`}
          tabIndex={0}
          onBlur={() => (this.open = false)}
        >
          {this.open && (
            <div
              class={`calendar ${
                this.classes?.root
              } ${this._getPositionClassName()} ${
                this.darkmode && 'calendar-darkmode'
              }`}
            >
              <header>
                <span onClick={this.switchToPreviousMonth}>
                  <kizuna-icon
                    name="left"
                    classes={{
                      root: this.classes?.headerLeftIcon,
                    }}
                  ></kizuna-icon>
                </span>
                <span class={`${this.classes?.monthName}`}>
                  {this.monthNames[date.month - 1]} {date.year}
                </span>
                <span onClick={this.switchToNextMonth}>
                  <kizuna-icon
                    name="right"
                    classes={{
                      root: this.classes?.headerRightIcon,
                    }}
                  ></kizuna-icon>
                </span>
              </header>

              <div class="day-names">
                {this.dayNames.map(dayName => (
                  <span>{dayName}</span>
                ))}
              </div>

              <div class="days-in-month">{this._renderDaysInMonth()}</div>

              <div class="calender-buttons">
                <span
                  class="todayButton"
                  onClick={this.setSelectedToCurrentDate}
                >
                  Today
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
