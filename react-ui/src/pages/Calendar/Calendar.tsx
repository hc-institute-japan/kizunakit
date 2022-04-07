import { useState } from 'react';
import { KizunaCalendar, KizunaDivider } from 'kizuna-react-kit';
import styles from './Calendar.module.css';
import CustomTabs from '../../components/Tabs/Tabs';
import CustomTable from '../../components/CustomTable/CustomTable';

const Calendar = (props: any) => {
  const [selected, setSelected] = useState('examples');

  const API_DATA = [
    {
      name: 'id',
      type: 'string',
      defaultValue: 'random string value',
      description: 'A unique identifier of component',
    },
    {
      name: 'dayNames',
      type: 'Array',
      defaultValue: '["M", "T", "W", "Th", "F", "Sa","Su"]',
      description: 'Array of day name you want to display on the calendar',
    },
    {
      name: 'monthNames',
      type: 'Array',
      defaultValue:
        '["January","February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]',
      description:
        '[OPTIONAL] When provided, an icon will be visible beside the badge text.',
    },
    {
      name: 'darkmode',
      type: 'boolean',
      defaultValue: 'false',
      description: 'Set the dark mode of the component',
    },
    {
      name: 'onHandleChange',
      type: 'Function',
      defaultValue: '',
      description:
        'The function that will be called when selected value is changed. The function will receive an event data. To get the value, get the value for the "detail" field of the event. [eg. data => console.log(data.detail)]',
    },
    {
      name: 'position',
      type: 'left | center | right',
      defaultValue: 'left',
      description: 'Position alignment of the calendar',
    },
    {
      name: 'value',
      type: 'string',
      defaultValue: 'Current date in a string format',
      description: 'The selected date of the calendar',
    },
    {
      name: 'classes',
      type: 'object',
      defaultValue: '',
      description:
        'An object of custom class names of the component. Please refer to CSS tab for more information.',
    },
  ];

  const CSS_DATA = [
    {
      name: 'root',
      description: 'Overrides the styling for the main wrapper of the badge',
    },
    {
      name: 'monthName',
      description: 'Overrides the styling for the calendar name',
    },
    {
      name: 'calenderIcon',
      description: 'Overrides the styling for the calendar icon wrapper',
    },
    {
      name: 'headerLeftIcon',
      description: 'Overrides the styling for the headerLeftIcon wrapper',
    },
    {
      name: 'headerRightIcon',
      description: 'Overrides the styling for the headerRightIcon wrapper',
    },
  ];
  return (
    <>
      <div className={styles.badgePage}>
        <h1 className="title">Calendar</h1>
        <CustomTabs value={selected} onClickHandler={setSelected} />
        {selected === 'examples' && (
          <div>
            <div className={styles.calendarExamplesContainer}>
              <div className={styles.calendarsWrapper}>
                <h2 className={styles.wrapperTitle}>Default</h2>
                <div className={styles.calendars}>
                  <div className={styles.calendarContainer}>
                    <p className={styles.calendarTitle}>Left Align</p>
                    <KizunaCalendar
                      onHandleChange={(data: any) =>
                        console.log({ selectedDate: data.detail })
                      }
                    />
                  </div>

                  <div className={styles.calendarContainer}>
                    <p className={styles.calendarTitle}>Center Align</p>
                    <KizunaCalendar
                      position="center"
                      onHandleChange={(data: any) =>
                        console.log({ selectedDate: data.detail })
                      }
                    />
                  </div>

                  <div className={styles.calendarContainer}>
                    <p className={styles.calendarTitle}>Right Align</p>
                    <KizunaCalendar
                      position="right"
                      onHandleChange={(data: any) =>
                        console.log({ selectedDate: data.detail })
                      }
                    />
                  </div>
                </div>
              </div>

              <div className={styles.calendarsWrapper}>
                <h2 className={styles.wrapperTitle}>Dark Mode</h2>
                <div className={styles.calendars}>
                  <div className={styles.calendarContainer}>
                    <p className={styles.calendarTitle}>Left Align</p>
                    <KizunaCalendar
                      darkmode
                      onHandleChange={(data: any) =>
                        console.log({ selectedDate: data.detail })
                      }
                    />
                  </div>

                  <div className={styles.calendarContainer}>
                    <p className={styles.calendarTitle}>Center Align</p>
                    <KizunaCalendar
                      darkmode
                      position="center"
                      onHandleChange={(data: any) =>
                        console.log({ selectedDate: data.detail })
                      }
                    />
                  </div>

                  <div className={styles.calendarContainer}>
                    <p className={styles.calendarTitle}>Right Align</p>
                    <KizunaCalendar
                      darkmode
                      position="right"
                      onHandleChange={(data: any) =>
                        console.log({ selectedDate: data.detail })
                      }
                    />
                  </div>
                </div>
              </div>

              <div className={styles.calendarsWrapper}>
                <h2 className={styles.wrapperTitle}>Custom</h2>
                <div className={styles.calendars}>
                  <div className={styles.calendarContainer}>
                    <p className={styles.calendarTitle}>Left Align</p>
                    <KizunaCalendar
                      darkmode
                      classes={{ root: styles.customCalendar }}
                      onHandleChange={(data: any) =>
                        console.log({ selectedDate: data.detail })
                      }
                    />
                  </div>

                  <div className={styles.calendarContainer}>
                    <p className={styles.calendarTitle}>Center Align</p>
                    <KizunaCalendar
                      darkmode
                      classes={{ monthName: styles.customCalendarName }}
                      position="center"
                      onHandleChange={(data: any) =>
                        console.log({ selectedDate: data.detail })
                      }
                    />
                  </div>

                  <div className={styles.calendarContainer}>
                    <p className={styles.calendarTitle}>Right Align</p>
                    <KizunaCalendar
                      darkmode
                      classes={{
                        headerLeftIcon: styles.customIcons,
                        headerRightIcon: styles.customIcons,
                      }}
                      position="right"
                      onHandleChange={(data: any) =>
                        console.log({ selectedDate: data.detail })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <KizunaDivider classes={{ divider: styles.dividerMargin }} />
            <h1 className="title">Examples</h1>

            <div className={styles.codeExampleContainer}>
              <small>Default</small>

              <code>{'<KizunaCalendar />'}</code>
              <code>{'<KizunaCalendar position="center" />'}</code>
              <code>{'<KizunaCalendar position="right" />'}</code>
              <small>Dark Mode</small>
              <code>{'<KizunaCalendar darkmode />'}</code>
              <code>{'<KizunaCalendar  position="center" darkmode/>'}</code>
              <code>{'<KizunaCalendar  position="center" darkmode/>'}</code>
              <small>Custom Styles</small>
              <code>
                {`
                                      <KizunaCalendar
                                      darkmode
                                      classes={{ root: styles.customCalendar }}
                                    />`}
              </code>
              <code>
                {`
                                     <KizunaCalendar
                                     darkmode
                                     classes={{ monthName: styles.customCalendarName }}
                                     position="center"
                                   />`}
              </code>
              <code>
                {`
                                     <KizunaCalendar
                                     darkmode
                                     classes={{
                                       headerLeftIcon: styles.customIcons,
                                       headerRightIcon: styles.customIcons,
                                     }}
                                     position="right"
                                   />`}
              </code>
            </div>
          </div>
        )}
        {selected === 'api' && (
          <div className={styles.apiContainer}>
            <h1 className="title">API</h1>
            <p>Use these Props to access features of the component</p>
            <CustomTable type="API" data={API_DATA} />
          </div>
        )}
        {selected === 'css' && (
          <div>
            <h1 className="title">CSS</h1>
            <p>Use these class names to override styling</p>
            <CustomTable type="CSS" data={CSS_DATA} />
            <KizunaDivider classes={{ divider: styles.dividerMargin }} />
            <h1 className="title">Example</h1>

            <div className={styles.codeExampleContainer}>
              <code>
                {`
                                      <KizunaCalendar
                                      darkmode
                                      classes={{ root: styles.customCalendar }}
                                    />`}
              </code>
              <code>
                {`
                                     <KizunaCalendar
                                     darkmode
                                     classes={{ monthName: styles.customCalendarName }}
                                     position="center"
                                   />`}
              </code>
              <code>
                {`
                                     <KizunaCalendar
                                     darkmode
                                     classes={{
                                       headerLeftIcon: styles.customIcons,
                                       headerRightIcon: styles.customIcons,
                                     }}
                                     position="right"
                                   />`}
              </code>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Calendar;
