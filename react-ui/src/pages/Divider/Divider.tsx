import styles from './Divider.module.css';
import CustomTabs from '../../components/Tabs/Tabs';
import CustomTable from '../../components/CustomTable/CustomTable';

import { KizunaDivider } from 'kizuna-react-kit';

import { useState } from 'react';

const Divider = (props: any) => {
  const [selected, setSelected] = useState('examples');

  const API_DATA = [
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
      name: 'divider',
      description: 'Overrides the styling for the main wrapper of the badge',
    },
  ];
  return (
    <>
      <div className={styles.dividerPage}>
        <h1 className={styles.title}>Divider</h1>
        <CustomTabs value={selected} onClickHandler={setSelected} />
        {selected === 'examples' && (
          <div>
            <div className={styles.dividerExampleContainer}>
              <div className={styles.default}>
                <h3>Default</h3>
                <KizunaDivider />
              </div>

              {/* <div className={styles.darkMode}>
                <h3>Dark Mode</h3>
              </div> */}

              <div className={styles.customStyles}>
                <h3>Custom Styles</h3>
                <KizunaDivider classes={{ divider: styles.customDivider }} />
              </div>
            </div>
            <KizunaDivider classes={{ divider: styles.dividerMargin }} />
            <h1 className={styles.title}>Examples</h1>

            <div className={styles.codeExampleContainer}>
              <small>Default</small>

              <code>{'<KizunaDivider />'}</code>

              <small>Custom Styles</small>
              <code>
                {
                  '<KizunaDivider classes={{ divider: styles.dividerMargin }} />'
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

export default Divider;
