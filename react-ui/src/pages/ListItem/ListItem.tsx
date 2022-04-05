import { useState } from 'react';
import CustomTabs from '../../components/Tabs/Tabs';
import CustomTable from '../../components/CustomTable/CustomTable';
import {
  KizunaButton,
  KizunaDivider,
  KizunaListItem,
  KizunaPopover,
} from 'kizuna-react-kit';
import styles from './ListItem.module.css';

const ListItem = (props: any) => {
  const [selected, setSelected] = useState('examples');
  const [popover1, setPopover1] = useState(false);

  const API_DATA = [
    {
      name: 'icon',
      type: 'string',
      defaultValue: '',
      description: 'Name of icon you want to use',
    },
    {
      name: 'text',
      type: 'string',
      defaultValue: '',
      description: 'Displayed text for our list item',
    },
    {
      name: 'handleOnClick',
      type: 'Function',
      defaultValue: '',
      description: 'The function that will be called when list item is clicked',
    },
    {
      name: 'divider',
      type: 'boolean',
      defaultValue: 'false',
      description: 'Set to true if display an bottom divider',
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
      name: 'listItemWrapper',
      description:
        'Overrides the styling for the main wrapper of the list item',
    },
    {
      name: 'listItemIcon',
      description:
        'Overrides the styling for the icon wrapper of the list item',
    },
    {
      name: 'divider',
      description: 'Overrides the styling for the divider of the list item',
    },
  ];

  return (
    <>
      <div>
        <h1 className="title">List Item</h1>
        <CustomTabs value={selected} onClickHandler={setSelected} />
        {selected === 'examples' && (
          <div>
            <div className={styles.exampleWrapper}>
              <div className={styles.exampleContainer}>
                <h3 className={styles.exampleTitle}>Default</h3>
                <KizunaListItem icon="settings" text="Settings" />
                <KizunaListItem icon="caution" text="Caution" />
              </div>
              <div className={styles.exampleContainer}>
                <h3 className={styles.exampleTitle}>List Item with Divider</h3>
                <KizunaListItem icon="trash" text="Delete" divider />
                <KizunaListItem icon="send" text="Send" divider />
              </div>

              <div className={styles.exampleContainer}>
                <h3 className={styles.exampleTitle}>List Item in a Popover</h3>{' '}
                <div className={styles.popoverContainer}>
                  <KizunaButton
                    type="secondary"
                    text="View List Items in a Popover"
                    onClick={() => setPopover1(!popover1)}
                  />

                  <KizunaPopover open={popover1}>
                    <KizunaListItem icon="trash" text="Delete" divider />
                    <KizunaListItem icon="send" text="Send" divider />
                    <KizunaListItem icon="copy" text="Copy" divider />
                    <KizunaListItem icon="briefcase" text="Briefcase" divider />
                    <KizunaListItem icon="message" text="Message" />
                  </KizunaPopover>
                </div>
              </div>
            </div>
            <KizunaDivider classes={{ divider: styles.dividerMargin }} />
            <h1 className="title">Examples</h1>

            <div className="codeExampleContainer">
              <code>{`<KizunaListItem icon="settings" text="Settings" />`}</code>
              <code>{`<KizunaListItem icon="send" text="Send" divider />`}</code>
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
              <code>{`<KizunaListItem icon="message" text="Message" 
            classes={{
              listItemWrapper: styles.customListWrapper,
              listItemIcon: styles.customIconStyles,
              divider: styles.customDividerStyles
            }} />`}</code>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ListItem;
