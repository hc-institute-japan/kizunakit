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
      name: 'text',
      type: 'string',
      defaultValue: '',
      description: 'The displayed text of the badge.',
    },
    {
      name: 'icon',
      type: 'string',
      defaultValue: '',
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
      description: 'Overides the styling for the main wrapper of the badge',
    },
    { name: 'icon', description: 'Overides the styling for the icon wrapper' },
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
                  placeholder="Enter a message..."
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
            </div>
            <KizunaDivider classes={{ divider: styles.dividerMargin }} />
            <h1 className={styles.title}>Examples</h1>

            <div className={styles.codeExampleContainer}>
              <small>Default</small>

              <code>{'<KizunaBadge icon={"circle"} text="Admin" />'}</code>
              <code>{'<KizunaBadge icon={"circle"} text="Observer" />'}</code>
              <code>{'<KizunaBadge icon={"heart"} text="Assistant" />'}</code>
              <small>Dark Mode</small>
              <code>
                {'<KizunaBadge icon={"circle"} text="Admin" /> darkmode'}
              </code>
              <code>
                {'<KizunaBadge icon={"circle"} text="Observer" darkmode />'}
              </code>
              <code>
                {'<KizunaBadge icon={"heart"} text="Assistant" darkmode />'}
              </code>
              <small>Custom Styles</small>
              <code>
                {
                  '<KizunaBadge icon={"circle"} text="Assistant" classes={{ badgeWrapper: styles.customIconColor }}/>'
                }
              </code>
              <code>
                {
                  '<KizunaBadge text="Success" classes={{ badgeWrapper: styles.customBadge }}/>'
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
                  '<KizunaBadge icon={"circle"} text="Assistant" classes={{ badgeWrapper: styles.customIconColor }}/>'
                }
              </code>
              <code>
                {
                  '<KizunaBadge text="Success" classes={{ badgeWrapper: styles.customBadge }}/>'
                }
              </code>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Textbox;
