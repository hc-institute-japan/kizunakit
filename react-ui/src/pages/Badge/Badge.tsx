import styles from './Badge.module.css';
import CustomTabs from '../../components/Tabs/Tabs';
import CustomTable from '../../components/CustomTable/CustomTable';

import { KizunaBadge } from 'kizuna-react-kit';
import { KizunaDivider } from 'kizuna-react-kit';
import { useState } from 'react';

const Badge = (props: any) => {
  const [selected, setSelected] = useState('examples');

  const API_DATA = [
    {
      name: 'text',
      type: 'string',
      defaultValue: '',
      description: '',
    },
    {
      name: 'icon',
      type: 'string',
      defaultValue: '',
      description:
        '[OPTIONAL] When provided, an icon will be visible beside the badge text.',
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
      <div className={styles.badgePage}>
        <h1 className={styles.title}>Badge</h1>
        <CustomTabs value={selected} onClickHandler={setSelected} />
        {selected === 'examples' && (
          <div>
            <div className={styles.badgeExamplesContainer}>
              <div className={styles.default}>
                <h3>Default</h3>
                <KizunaBadge icon={'circle'} text="Admin" />
                <br />
                <KizunaBadge icon={'circle'} text="Observer" />
                <br />
                <KizunaBadge icon={'heart'} text="Assistant" />
              </div>

              <div className={styles.customStyles}>
                <h3>Custom Styles</h3>
                <KizunaBadge
                  icon={'circle'}
                  text="Assistant"
                  classes={{ badgeWrapper: styles.customIconColor }}
                />
                <br />
                <KizunaBadge
                  text="Success"
                  classes={{
                    badgeWrapper: styles.customBadge,
                    text: styles.customText,
                  }}
                />
              </div>
            </div>
            <KizunaDivider classes={{ divider: styles.dividerMargin }} />
            <h1 className={styles.title}>Examples</h1>

            <div className={styles.codeExampleContainer}>
              <code>{'<KizunaBadge icon={"circle"} text="Admin" />'}</code>
              <code>{'<KizunaBadge icon={"circle"} text="Observer" />'}</code>
              <code>{'<KizunaBadge icon={"heart"} text="Assistant" />'}</code>
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

export default Badge;
