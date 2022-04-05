import { useState } from 'react';
import CustomTabs from '../../components/Tabs/Tabs';
import CustomTable from '../../components/CustomTable/CustomTable';
import { KizunaIcon, KizunaDivider } from 'kizuna-react-kit';
import styles from './Icon.module.css';

const Icon = (props: any) => {
  const [selected, setSelected] = useState('examples');
  const iconNames = [
    'addcontact',
    'add',
    'attach',
    'blocked',
    'bold',
    'briefcase',
    'calendar',
    'call',
    'cameraoff',
    'camera',
    'caution',
    'chat',
    'check',
    'circle',
    'close',
    'contacts',
    'copy',
    'create',
    'dottedmenuhorizontal',
    'dottedmenuvertical',
    'down',
    'emoticon',
    'emptynotification',
    'end',
    'file',
    'gif',
    'heart',
    'information',
    'italic',
    'left',
    'leftarrow',
    'link',
    'like',
    'menu',
    'message',
    'mic',
    'micoff',
    'pin',
    'pin2',
    'remove',
    'removecontact',
    'reply',
    'right',
    'rightarrow',
    'search',
    'send',
    'settings',
    'strikethrough',
    'trash',
    'underline',
    'up',
  ];

  const _renderIcons = () => {
    return iconNames.map((icon, index) => {
      return (
        <span key={index} className={styles.iconDisplayContainer}>
          <KizunaIcon name={icon} />
          <span className={styles.iconDisplayNameContainer}>{icon}</span>
        </span>
      );
    });
  };

  const API_DATA = [
    {
      name: 'name',
      type: 'string',
      defaultValue: '',
      description: 'Name of icon you want to use',
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
      name: 'root',
      description: 'Overrides the styling for the main wrapper of the icon',
    },
  ];
  return (
    <>
      <div>
        <h1 className="title">Icons</h1>
        <CustomTabs value={selected} onClickHandler={setSelected} />
        {selected === 'examples' && (
          <div>
            <div className={styles.iconsExamplesContainer}>
              {_renderIcons()}
            </div>
            <h1 className="title">Custom Icons</h1>
            <div className={styles.iconsExamplesContainer}>
              <span className={styles.iconDisplayContainer}>
                <KizunaIcon
                  name="send"
                  classes={{ root: styles.coloredIcon }}
                />
                <span className={styles.iconDisplayNameContainer}>
                  {'send'}
                </span>
              </span>
              <span className={styles.iconDisplayContainer}>
                <KizunaIcon
                  name="contacts"
                  classes={{ root: styles.thickIcon }}
                />
                <span className={styles.iconDisplayNameContainer}>
                  {'contacts'}
                </span>
              </span>

              <span className={styles.iconDisplayContainer}>
                <KizunaIcon
                  name="create"
                  classes={{ root: styles.thickIcon }}
                />
                <span className={styles.iconDisplayNameContainer}>
                  {'create'}
                </span>
              </span>
            </div>
            <KizunaDivider classes={{ divider: styles.dividerMargin }} />
            <h1 className="title">Examples</h1>
            <div className="codeExampleContainer">
              <code>{`<KizunaIcon name="addContact />`}</code>
              <code>{`<KizunaIcon name="call" />`}</code>
              <code>{`                <KizunaIcon
                  name="send"
                  classes={{ root: styles.coloredIcon }}
                />`}</code>
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

            <p>1. To override css properties, follow the format below</p>
            <div className={`codeExampleContainer ${styles.cssWidth}`}>
              <code>
                {`
                  .customIconName svg path {
                    stroke: red;          
                    stroke-width : 2
                    fill: red;
                    // Use any css applicable to svg path here
                  }`}
              </code>
            </div>

            <p>2. Use custom icon classname</p>
            <div className="codeExampleContainer">
              <code>
                {`
                <KizunaIcon
                name="send"
                classes={{ root: styles.coloredIcon }}
              />`}
              </code>
              <code>
                {`
                <KizunaIcon
                name="contacts"
                classes={{ root: styles.thickIcon }}
              />`}
              </code>
              <code>
                {`
                <KizunaIcon
                  name="camera"
                  classes={{
                    root: '${'styles.thickIcon'} ${'styles.coloredIcon'}'
                  }}
                />`}
              </code>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Icon;
