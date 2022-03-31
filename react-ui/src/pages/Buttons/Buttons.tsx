import { KizunaButton } from 'kizuna-react-kit';
import { KizunaDivider } from 'kizuna-react-kit';

import styles from './Buttons.module.css';
import CustomTable from '../../components/CustomTable/CustomTable';
import CustomTabs from '../../components/Tabs/Tabs';
import { useState } from 'react';
import { style } from '@mui/system';

const ButtonsPage = () => {
  const [selected, setSelected] = useState('examples');

  const API_DATA = [
    {
      name: 'type',
      type: "'primary' | 'secondary'",
      defaultValue: '',
      description: 'This sets the deafult appearance of the button.',
    },
    {
      name: 'icon',
      type: 'string',
      defaultValue: '',
      description:
        '[OPTIONAL] When provided, an icon will be visible beside the button text.',
    },
    {
      name: 'text',
      type: 'string',
      defaultValue: '',
      description: 'The text of the button.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: 'false',
      description: 'The disabled state of the button.',
    },
    {
      name: 'classes',
      type: 'object',
      defaultValue: '',
      description:
        'An object of custom class names of the component. Please refer to CSS tab for more information.',
    },
    {
      name: 'handleOnClick',
      type: 'function',
      defaultValue: '',
      description: '',
    },
  ];

  const CSS_DATA = [
    {
      name: 'btnWrapper',
      description: 'Overides the styling for the main wrapper of the button',
    },
    { name: 'icon', description: 'Overides the styling for the icon wrapper' },
  ];

  return (
    <div className={styles.buttonsPage}>
      <h1 className={styles.title}>Buttons</h1>{' '}
      <CustomTabs value={selected} onClickHandler={setSelected} />
      {selected === 'examples' && (
        <div className={styles.buttonsExampleContainer}>
          <div className={styles.buttonsContainer}>
            <div className={styles.wrapper}>
              <h3>Default</h3>
              <div className={styles.defaultContainer}>
                <div>
                  <h4 className={styles.componentLabel}>Primary </h4>
                  <KizunaButton type="primary" text="Primary Button" />
                </div>
                <div>
                  <h4 className={styles.componentLabel}>Secondary </h4>
                  <KizunaButton type="secondary" text="Secondary Button" />
                </div>
              </div>

              <h3 className={styles.labelwithIcon}>Button with Icon</h3>
              <div className={styles.defaultContainer}>
                <div>
                  <h4 className={styles.componentLabel}>Primary </h4>
                  <KizunaButton
                    type="primary"
                    text="Primary "
                    icon={'addContact'}
                  />
                </div>
                <div>
                  <h4 className={styles.componentLabel}>Secondary </h4>
                  <KizunaButton
                    type="secondary"
                    text="Secondary "
                    icon={'addContact'}
                  />
                </div>
              </div>
            </div>

            <div className={styles.wrapper}>
              <h3>Disabled</h3>
              <div className={styles.disabledContainer}>
                <div>
                  <h4 className={styles.componentLabel}>Primary </h4>
                  <KizunaButton type="primary" text="Disabled" disabled />
                </div>
                <div>
                  <h4 className={styles.componentLabel}>Secondary </h4>
                  <KizunaButton type="secondary" text="Disabled" disabled />
                </div>
              </div>
              <h3 className={styles.labelwithIcon}>Disabled with Icon</h3>
              <div className={styles.defaultContainer}>
                <div>
                  <h4 className={styles.componentLabel}>Primary </h4>
                  <KizunaButton
                    type="primary"
                    text="Disabled"
                    disabled
                    icon={'addContact'}
                  />
                </div>
                <div>
                  <h4 className={styles.componentLabel}>Secondary </h4>
                  <KizunaButton
                    type="secondary"
                    text="Disabled"
                    disabled
                    icon={'addContact'}
                  />
                </div>
              </div>
            </div>

            <div className={styles.wrapper}>
              <h3>Button with Custom Styles</h3>
              <div className={styles.customStyleContainer}>
                <div>
                  <h4 className={styles.componentLabel}>Custom Style </h4>
                  <KizunaButton
                    type="primary"
                    text="Custom Styles"
                    classes={{
                      btnWrapper: styles.customButton,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <KizunaDivider classes={{ divider: styles.dividerMargin }} />
          <h1 className={styles.title}>EXAMPLE</h1>
          <code>{`<KizunaButton type="primary" text="Primary Button" />`}</code>{' '}
          <br />
          <code>{`<KizunaButton type="secondary" text="Secondary Button" />`}</code>{' '}
          <br />
          <code>{`                  <KizunaButton
                    type="primary"
                    text="Primary "
                    icon={'addContact'}
                  />`}</code>{' '}
          <br />
          <code>{`                  <KizunaButton
                    type="secondary"
                    text="Secondary "
                    icon={'addContact'}
                  />`}</code>{' '}
          <br />
          <code>{`<KizunaButton type="primary" text="Disabled" disabled />`}</code>{' '}
          <br />
          <code>{`<KizunaButton type="secondary" text="Disabled" disabled />`}</code>{' '}
          <br />
          <code>{`                  <KizunaButton
                    type="primary"
                    text="Disabled"
                    disabled
                    icon={'addContact'}
                  />`}</code>{' '}
          <br />
          <code>{`                  <KizunaButton
                    type="secondary"
                    text="Disabled"
                    disabled
                    icon={'addContact'}
                  />`}</code>{' '}
          <br />
          <code>{`                  <KizunaButton
                    type="primary"
                    text="Custom Styles"
                    classes={{
                      btnWrapper: styles.customButton,
                    }}
                  />`}</code>{' '}
          <br />
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
          <h1 className={styles.title}>EXAMPLE</h1>
          <code>{`<KizunaButton
                    type="primary"
                    text="Custom Styles"
                    classes={{
                      btnWrapper: styles.customButton,
                    }}
                  />`}</code>{' '}
          <br />
          <code>{`<KizunaButton
                    type="primary"
                    text="Custom Styles"
                    classes={{
                      icon: styles.customIcon,
                    }}
                  />`}</code>
        </div>
      )}
    </div>
  );
};

export default ButtonsPage;
