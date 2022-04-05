import styles from './Checkbox.module.css';
import CustomTabs from '../../components/Tabs/Tabs';
import CustomTable from '../../components/CustomTable/CustomTable';

import { KizunaCheckbox } from 'kizuna-react-kit';
import { KizunaDivider } from 'kizuna-react-kit';
import { useState } from 'react';

const Checkbox = (props: any) => {
  const [selected, setSelected] = useState('examples');

  const API_DATA = [
    {
      name: 'name',
      type: 'string',
      defaultValue: '',
      description: 'The displayed name of the checkbox.',
    },
    {
      name: 'value',
      type: 'string',
      defaultValue: '',
      description: 'Value of the checkbox input',
    },
    {
      name: 'checked',
      type: 'boolean',
      defaultValue: 'false',
      description: '',
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: '',
      description: '',
    },
    {
      name: 'rounded',
      type: 'boolean',
      defaultValue: '',
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
      name: 'checkboxWrapper',
      description: 'Overides the styling for the main wrapper of the checkbox',
    },
    { name: 'input', description: 'Overides the styling for the input' },
    {
      name: 'checkmark',
      description: 'Overides the styling for the checkmark',
    },
  ];
  return (
    <>
      <div className={styles.checkboxPage}>
        <h1 className={styles.title}>Checkbox</h1>
        <CustomTabs value={selected} onClickHandler={setSelected} />
        {selected === 'examples' && (
          <div>
            <div className={styles.checkboxExamplesContainer}>
              <div className={styles.default}>
                <h3>Default</h3>
                <KizunaCheckbox
                  name="Charlie Charlie"
                  value="Charlie Charlie"
                  checked
                />
                <KizunaCheckbox name="Ella Gopez" value="Ella Gopez" checked />
                <KizunaCheckbox name="Alice Alice" value="Alice Alice" />
              </div>

              <div className={styles.rounded}>
                <h3>Rounded</h3>
                <KizunaCheckbox
                  name="Charlie Charlie"
                  value="Charlie Charlie"
                  checked
                  rounded
                />
                <KizunaCheckbox
                  name="Ella Gopez"
                  value="Ella Gopez"
                  checked
                  rounded
                />
                <KizunaCheckbox
                  name="Alice Alice"
                  value="Alice Alice"
                  rounded
                />
              </div>

              <div className={styles.customStyles}>
                <h3>Custom Styles</h3>
                <KizunaCheckbox
                  name="Ella Gopez"
                  value="Ella Gopez "
                  checked
                  classes={{
                    checkmark: styles.customCheckmark,
                    checkboxWrapper: styles.customCheckbox,
                    input: styles.customInput,
                  }}
                />
                <KizunaCheckbox
                  name="Charlie Charlie"
                  value="Charlie Charlie"
                  classes={{
                    checkmark: styles.customCheckmark,
                    checkboxWrapper: styles.customCheckbox,
                    input: styles.customInput,
                  }}
                />
              </div>
            </div>
            <KizunaDivider classes={{ divider: styles.dividerMargin }} />
            <h1 className={styles.title}>Examples</h1>

            <div className={styles.codeExampleContainer}>
              <small>Default</small>

              <code>
                {
                  '<KizunaCheckbox name="Ella Gopez" value="Ella Gopez" checked />'
                }
              </code>
              <code>
                {
                  '<KizunaCheckbox name="Charlie Charlie" value="Charlie Charlie" checked />'
                }
              </code>
              <code>
                {'<KizunaCheckbox name="Alice Alice" value="Alice Alice"  />'}
              </code>
              <small>Rounded</small>
              <code>
                {
                  '<KizunaCheckbox name="Ella Gopez" value="Ella Gopez" checked rounded />'
                }
              </code>
              <code>
                {
                  '<KizunaCheckbox name="Charlie Charlie" value="Ella Gopez" checked rounded />'
                }
              </code>
              <code>
                {
                  '<KizunaCheckbox name="Alice Alice" value="Alice Alice" rounded  />'
                }
              </code>
              <small>Custom Styles</small>
              <code>
                {
                  '<KizunaCheckbox name="Ella Gopez" value="Ella Gopez" checked classes={{ checkmark: styles.customCheckmark, checkboxWrapper: styles.customCheckbox, input: styles.customInput, }}/>'
                }
              </code>
              <code>
                {
                  '<KizunaCheckbox name="Charlie Charlie" value="Charlie Charlie" classes={{ checkmark: styles.customCheckmark, checkboxWrapper: styles.customCheckbox, input: styles.customInput, }}/>'
                }
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
                {
                  '<KizunaCheckbox name="Ella Gopez" value="Ella Gopez" checked classes={{ checkmark: styles.customCheckmark, checkboxWrapper: styles.customCheckbox, input: styles.customInput, }}/>'
                }
              </code>
              <code>
                {
                  '<KizunaCheckbox name="Charlie Charlie" value="Charlie Charlie" classes={{ checkmark: styles.customCheckmark, checkboxWrapper: styles.customCheckbox, input: styles.customInput, }}/>'
                }
              </code>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Checkbox;
