import { useState } from 'react';
import { KizunaCalendar, KizunaDivider } from 'kizuna-react-kit';
import styles from './Calendar.module.css';
import CustomTabs from '../../components/Tabs/Tabs';
import CustomTable from '../../components/CustomTable/CustomTable';

const Calendar = (props: any) => {
  const [selected, setSelected] = useState('examples');

  const API_DATA = [
    {
      name: 'dayNames',
      type: 'Array',
      defaultValue: '',
      description: '',
    },
    {
      name: 'monthNames',
      type: 'Array',
      defaultValue: '',
      description:
        '[OPTIONAL] When provided, an icon will be visible beside the badge text.',
    },
    {
      name: 'showFillDays',
      type: 'boolean',
      defaultValue: 'false',
      description: '',
    },
    {
      name: 'darkmode',
      type: 'boolean',
      defaultValue: 'false',
      description: 'Set the dark mode of the component',
    },
    {
      name: 'onChange',
      type: 'Function',
      defaultValue: '',
      description: '',
    },
    {
      name: 'position',
      type: 'string',
      defaultValue: 'left',
      description: '',
    },
    {
      name: 'value',
      type: 'string',
      defaultValue: 'false',
      description: '',
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
      description: 'Overides the styling for the main wrapper of the badge',
    },
    {
      name: 'monthName',
      description: 'Overides the styling for the calendar name',
    },
    {
      name: 'calenderIcon',
      description: 'Overides the styling for the calendar icon wrapper',
    },
    {
      name: 'headerLeftIcon',
      description: 'Overides the styling for the headerLeftIcon wrapper',
    },
    {
      name: 'headerRightIcon',
      description: 'Overides the styling for the headerRightIcon wrapper',
    },
  ];
  return (
    <>
      <div className={styles.badgePage}>
        <h1 className={styles.title}>Calendar</h1>
        <CustomTabs value={selected} onClickHandler={setSelected} />
        {selected === 'examples' && (
          <div>
            <div className={styles.calendarExamplesContainer}>
              <div className={styles.calendarsWrapper}>
                <h2 className={styles.wrapperTitle}>Default</h2>
                <div className={styles.calendars}>
                  <div className={styles.calendarContainer}>
                    <p className={styles.calendarTitle}>Left Align</p>
                    <KizunaCalendar />
                  </div>

                  <div className={styles.calendarContainer}>
                    <p className={styles.calendarTitle}>Center Align</p>
                    <KizunaCalendar position="center" />
                  </div>

                  <div className={styles.calendarContainer}>
                    <p className={styles.calendarTitle}>Right Align</p>
                    <KizunaCalendar position="right" />
                  </div>
                </div>
              </div>

              <div className={styles.calendarsWrapper}>
                <h2 className={styles.wrapperTitle}>Darkmode</h2>
                <div className={styles.calendars}>
                  <div className={styles.calendarContainer}>
                    <p className={styles.calendarTitle}>Left Align</p>
                    <KizunaCalendar darkmode />
                  </div>

                  <div className={styles.calendarContainer}>
                    <p className={styles.calendarTitle}>Center Align</p>
                    <KizunaCalendar darkmode position="center" />
                  </div>

                  <div className={styles.calendarContainer}>
                    <p className={styles.calendarTitle}>Right Align</p>
                    <KizunaCalendar darkmode position="right" />
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
                    />
                  </div>

                  <div className={styles.calendarContainer}>
                    <p className={styles.calendarTitle}>Center Align</p>
                    <KizunaCalendar
                      darkmode
                      classes={{ monthName: styles.customCalendarName }}
                      position="center"
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
                    />
                  </div>
                </div>
              </div>
            </div>
            <KizunaDivider classes={{ divider: styles.dividerMargin }} />
            <h1 className={styles.title}>Examples</h1>

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
            <h1 className={styles.title}>API</h1>
            <p>Use these Props to access features of the component</p>
            <CustomTable type="API" data={API_DATA} />
          </div>
        )}
        {selected === 'css' && (
          <div>
            <h1 className={styles.title}>CSS</h1>
            <p>Use these class names to override styling</p>
            <CustomTable type="CSS" data={CSS_DATA} />
            <KizunaDivider classes={{ divider: styles.dividerMargin }} />
            <h1 className={styles.title}>Example</h1>

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
