import styles from './Textbox.module.css';
import CustomTabs from '../../components/Tabs/Tabs';
import CustomTable from '../../components/CustomTable/CustomTable';

import { KizunaTextbox } from 'kizuna-react-kit';
import { KizunaDivider } from 'kizuna-react-kit';
import { useState } from 'react';

const Textbox = (props: any) => {
  const [selected, setSelected] = useState('examples');

  const API_DATA = [
    {
      name: 'name',
      type: 'string',
      defaultValue: '',
      description: 'Name of Textbox',
    },
    {
      name: 'id',
      type: 'string',
      defaultValue: 'random string value',
      description: 'Unique identifier of the component',
    },
    {
      name: 'value',
      type: 'string',
      defaultValue: '',
      description: 'Text value of the input component',
    },
    {
      name: 'placeholder',
      type: 'string',
      defaultValue: '',
      description: 'Placeholder text',
    },
    {
      name: 'label',
      type: 'string',
      defaultValue: '',
      description: 'Label of the input',
    },
    {
      name: 'variant',
      type: 'standard | outlined',
      defaultValue: '',
      description: 'Variant type of the component',
    },
    {
      name: 'align',
      type: 'left | center | right',
      defaultValue: 'left',
      description: 'Text alignment of component',
    },
    {
      name: 'startIconName',
      type: 'string',
      defaultValue: '',
      description: 'Icon name of the icon you want to be the start icon',
    },
    {
      name: 'emoticon',
      type: 'string',
      defaultValue: '',
      description: 'Placeholder to display a emoticon icon for the component',
    },
    {
      name: 'onChange',
      type: 'function',
      defaultValue: '',
      description: 'Function to be triggered when component value changed',
    },
    {
      name: 'onEmoticonClick',
      type: 'function',
      defaultValue: '',
      description: 'Function to be triggered when emoticon icon is clicked',
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
      name: 'input',
      description: 'Overides the styling for the input wrapper of the badge',
    },
    {
      name: 'emoticonIcon',
      description: 'Overides the styling for the Emoticon Icon wrapper',
    },
    {
      name: 'labelWrapper',
      description: 'Overides the styling for the Label Wrapper wrapper',
    },
  ];
  return (
    <>
      <div className={styles.textboxPage}>
        <h1 className={styles.title}>Textbox</h1>
        <CustomTabs value={selected} onClickHandler={setSelected} />
        {selected === 'examples' && (
          <div>
            <div className={styles.textboxExamplesContainer}>
              <div className={styles.default}>
                <h3>Standard</h3>
                <KizunaTextbox
                  name="name"
                  placeholder="Enter your name"
                  variant="standard"
                />
                <h3>Outlined</h3>
                <KizunaTextbox
                  name="name"
                  placeholder="Enter your name"
                  variant="outlined"
                />
                <div className={styles.position}>
                  <h3>Position</h3>
                  <KizunaTextbox
                    name="left"
                    placeholder="Align Left"
                    variant="outlined"
                    align="left"
                  />
                  <br />
                  <KizunaTextbox
                    name="center"
                    placeholder="Align Center"
                    variant="outlined"
                    align="center"
                  />
                  <br />
                  <KizunaTextbox
                    name="right"
                    placeholder="Align Right"
                    variant="outlined"
                    align="right"
                  />
                </div>
              </div>

              <div className={styles.withLabel}>
                <h3>Label</h3>
                <KizunaTextbox
                  label="Name"
                  name="name"
                  placeholder="Enter your name"
                  variant="standard"
                />
                <br />
                <KizunaTextbox
                  label="Name"
                  name="name"
                  placeholder="Enter your name"
                  variant="outlined"
                />
              </div>

              <div className={styles.withIcon}>
                <h3>Start Icon</h3>
                <KizunaTextbox
                  name="name"
                  placeholder="Enter your name"
                  startIconName="search"
                  variant="standard"
                />
                <br />
                <KizunaTextbox
                  name="name"
                  placeholder="Enter your name"
                  startIconName="search"
                  variant="outlined"
                />
              </div>

              <div className={styles.withIcon}>
                <h3>Emoticon</h3>
                <KizunaTextbox
                  name="name"
                  placeholder=" Enter a message..."
                  emoticon
                  variant="standard"
                />
                <br />
                <KizunaTextbox
                  name="name"
                  placeholder="Enter a message..."
                  emoticon
                  variant="outlined"
                />
              </div>

              <div className={styles.withIcon}>
                <h3>Search with Icon Placeholder</h3>
                <KizunaTextbox
                  name="name"
                  placeholder="&#xF002; Search"
                  variant="standard"
                  classes={{ input: styles.customInputWithFontAwesome }}
                />{' '}
                <KizunaTextbox
                  name="name"
                  placeholder="&#xF002; Search"
                  variant="standard"
                  classes={{ input: styles.customInputWithFontAwesome }}
                  align="center"
                />
                <KizunaTextbox
                  name="name"
                  placeholder="&#xF002; Search"
                  variant="outlined"
                  classes={{ input: styles.customInputWithFontAwesome }}
                  align="right"
                />
              </div>
            </div>

            <KizunaDivider classes={{ divider: styles.dividerMargin }} />
            <h1 className={styles.title}>Examples</h1>

            <div className={styles.codeExampleContainer}>
              <code>
                {`                <KizunaTextbox
                  name="name"
                  placeholder="Enter your name"
                  variant="standard"
                />`}
              </code>
              <code>
                {`                <KizunaTextbox
                  name="name"
                  placeholder=" Enter a message..."
                  emoticon
                  variant="standard"
                />`}
              </code>
              <code>
                {`                <KizunaTextbox
                  label="Name"
                  name="name"
                  placeholder="Enter your name"
                  variant="outlined"
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
                {` <KizunaTextbox
                  name="name"
                  placeholder=" Enter a message..."
                  emoticon
                  variant="standard" classes={{ input: styles.customInput }}/>`}
              </code>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Textbox;
