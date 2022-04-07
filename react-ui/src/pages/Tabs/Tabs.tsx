import { useState } from 'react';
import CustomTabs from '../../components/Tabs/Tabs';
import CustomTable from '../../components/CustomTable/CustomTable';
import {
  KizunaButton,
  KizunaDivider,
  KizunaListItem,
  KizunaPopover,
  KizunaTabs,
} from 'kizuna-react-kit';
import styles from './Tabs.module.css';

const Tabs = (props: any) => {
  const [selected, setSelected] = useState('examples');

  const API_DATA = [
    {
      name: 'value',
      type: 'string',
      defaultValue: '',
      description: 'The active tab',
    },
    {
      name: 'darkmode',
      type: 'boolean',
      defaultValue: 'false',
      description: '',
    },
    {
      name: 'menus',
      type: 'Array <{ name: Tab1, value: tab1 }>',
      defaultValue: 'left',
      description: 'Menu tabs that will be rendered',
    },
    {
      name: 'onClick',
      type: 'Function',
      defaultValue: '',
      description: 'function that will be triggered when clicked',
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
      name: 'tabWrapper',
      description: 'Overrides the styling for the main wrapper',
    },
    {
      name: 'tabMenu',
      description: 'Overrides the styling for the Tab menu wrapper',
    },
  ];

  const tabMenusLight = [
    { name: 'Tab1', value: 'tab1' },
    { name: 'Tab2', value: 'tab2' },
    { name: 'Tab3', value: 'tab3' },
  ];

  const tabMenusDark = [
    { name: 'Tab1', value: 'tab1' },
    { name: 'Tab2', value: 'tab2' },
    { name: 'Tab3', value: 'tab3' },
  ];

  return (
    <>
      <div>
        <h1 className="title">Popover</h1>
        <CustomTabs value={selected} onClickHandler={setSelected} />
        {selected === 'examples' && (
          <div>
            <div className={styles.exampleWrapper}>
              <div className={styles.exampleContainer}>
                <h3 className={styles.exampleTitle}>Default</h3>
                <KizunaTabs
                  menus={tabMenusLight}
                  onClick={(data: any) => console.log(data)}
                />
              </div>

              <div className={styles.exampleContainer}>
                <h3 className={styles.exampleTitle}>Dark Mode</h3>
                <KizunaTabs menus={tabMenusDark} darkmode />
              </div>
            </div>
            <KizunaDivider classes={{ divider: styles.dividerMargin }} />

            <h1 className="title">Examples</h1>
            <div className="codeExampleContainer">
              <code>{`<KizunaTabs menus={tabMenusLight} />`}</code>
              <code>{`<KizunaTabs menus={tabMenusDark} darkmode />`}</code>
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

            <div className="codeExampleContainer">
              <code>{`<KizunaTabs menus={tabMenusLight} classes={{tabWrapper: styles.customTabWrapper, tabMenu: styles.customTabMenu}}/>`}</code>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Tabs;
