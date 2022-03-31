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
      name: 'name1',
      type: 'string',
      defaultValue: '',
      description: 'setsetset',
    },
    { name: 'name2', type: 'string', defaultValue: '', description: 'testse' },
    { name: 'name3', type: 'boolean', defaultValue: '', description: '' },
    { name: 'name4', type: 'object', defaultValue: '', description: '' },
  ];

  const CSS_DATA = [
    {
      name: 'name1',
      description: 'setsetset',
    },
    { name: 'name2', description: 'testse' },
    { name: 'name3', type: 'boolean', description: '' },
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

          <h1 className={styles.title}>Example</h1>
        </div>
      )}
    </div>
  );
};

export default ButtonsPage;
