import styles from './Toggle.module.css';
import CustomTabs from '../../components/Tabs/Tabs';
import CustomTable from '../../components/CustomTable/CustomTable';

import { KizunaToggleButton } from 'kizuna-react-kit';
import { KizunaDivider } from 'kizuna-react-kit';
import { useState } from 'react';

const Toggle = (props: any) => {
  const [selected, setSelected] = useState('examples');

  const API_DATA = [
    {
      name: 'checked',
      type: 'boolean',
      defaultValue: '',
      description: 'Value if button is active or not',
    },
    {
      name: 'disabled',
      type: 'booblean',
      defaultValue: 'false',
      description: 'disables the component',
    },
    {
      name: 'handleClick',
      type: 'function',
      defaultValue: '',
      description: 'Function that will be triggered when component is clicked',
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
      name: 'badgeWrapper',
      description: 'Overrides the styling for the main wrapper of the badge',
    },
    { name: 'icon', description: 'Overrides the styling for the icon wrapper' },
  ];
  return (
    <>
      <div className={styles.badgePage}>
        <h1 className={styles.title}>Toggle</h1>
        <CustomTabs value={selected} onClickHandler={setSelected} />
        {selected === 'examples' && (
          <div>
            <div className={styles.badgeExamplesContainer}>
              <div className={styles.default}>
                <h3>Default</h3>
                <KizunaToggleButton
                  handleClick={() => console.log('toggled')}
                />
              </div>

              <div className={styles.default}>
                <h3>Disabled</h3>
                <KizunaToggleButton
                  disabled
                  handleClick={() => console.log('toggled')}
                />
              </div>

              <div className={styles.customStyles}>
                <h3>Custom </h3>
                <KizunaToggleButton
                  handleClick={() => console.log('toggled')}
                  classes={{
                    slider: styles.customSlider,
                    input: styles.customInput,
                  }}
                />
              </div>
            </div>
            <KizunaDivider classes={{ divider: styles.dividerMargin }} />
            <h1 className={styles.title}>Examples</h1>

            <div className={styles.codeExampleContainer}>
              <small>Default</small>

              <code>{'<KizunaToggleButton />'}</code>
              <small>Disabled</small>
              <code>{' <KizunaToggleButton disabled />'}</code>
              <small>Custom Styles</small>
              <code>
                {`                <KizunaToggleButton
                  classes={{
                    slider: styles.customSlider,
                    input: styles.customInput,
                  }}
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
                {`                <KizunaToggleButton
                  classes={{
                    slider: styles.customSlider,
                    input: styles.customInput,
                  }}
                />`}
              </code>
            </div>

            <h4>Styles</h4>
            <div className={styles.codeExampleContainer}>
              <code>
                {`.customSlider {
  background-color: #dde8c5;
}`}
              </code>
              <code>
                {`.customInput:checked + .customSlider {
  background: #b2ff12;
}`}
              </code>
              <code>
                {`.customInput:checked + .customSlider:before {
  background: #16ad00;
}`}
              </code>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Toggle;
