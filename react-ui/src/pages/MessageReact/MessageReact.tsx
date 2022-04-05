import styles from './MessageReact.module.css';
import CustomTabs from '../../components/Tabs/Tabs';
import CustomTable from '../../components/CustomTable/CustomTable';

import { KizunaMessageReact } from 'kizuna-react-kit';
import { KizunaMessageBox } from 'kizuna-react-kit';
import { KizunaDivider } from 'kizuna-react-kit';
import { useState } from 'react';

const MessageReact = (props: any) => {
  const [selected, setSelected] = useState('examples');

  const API_DATA = [
    {
      name: 'emoji',
      type: 'string',
      defaultValue: '',
      description: 'Name of the emoji you want to use',
    },
    {
      name: 'count',
      type: 'number',
      defaultValue: '',
      description: 'A number of reaction to be displayed',
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
      name: 'messageReactWrapper',
      description:
        'Overrides the styling for the main wrapper of react message',
    },
    {
      name: 'emoji',
      description: 'Overrides the styling for the emoji',
    },
    {
      name: 'count',
      description: 'Overrides the styling for the count',
    },
  ];

  const messageReactItems = [
    {
      icon: 'heart',
    },
    {
      icon: 'like',
      count: 7,
    },
  ];
  return (
    <>
      <div className={styles.messageReactPage}>
        <h1 className={styles.title}>Message React</h1>
        <CustomTabs value={selected} onClickHandler={setSelected} />
        {selected === 'examples' && (
          <div>
            <div className={styles.messageReactExamplesContainer}>
              <div className={styles.default}>
                <div>
                  <h3>Default</h3>
                  <KizunaMessageReact emoji="heart" />
                  <br />
                  <KizunaMessageReact emoji="like" />
                </div>
                <div>
                  <h3>with Count</h3>
                  <KizunaMessageReact emoji="heart" count={2} />
                  <br />
                  <KizunaMessageReact emoji="like" count={10} />
                </div>
              </div>

              <div className={styles.darkMode}>
                <div>
                  <h3>Dark Mode</h3>
                  <KizunaMessageReact emoji="heart" darkmode />
                  <br />
                  <KizunaMessageReact emoji="like" darkmode />
                </div>
                <div>
                  <h3>with Count</h3>
                  <KizunaMessageReact emoji="heart" count={2} darkmode />
                  <br />
                  <KizunaMessageReact emoji="like" count={10} darkmode />
                </div>
              </div>

              <div className={styles.reactMessageExample}>
                <h3>React Message Example</h3>
                <KizunaMessageBox
                  message="Welcome to Kizuna!"
                  time="10:00 AM"
                  sent
                  reactionList={messageReactItems}
                />
              </div>
            </div>
            <KizunaDivider classes={{ divider: styles.dividerMargin }} />
            <h1 className={styles.title}>Examples</h1>

            <div className={styles.codeExampleContainer}>
              <small>Default</small>

              <code>{'<KizunaMessageReact emoji="heart" />'}</code>
              <code>{'<KizunaMessageReact emoji="like" />'}</code>
              <small>with Count</small>
              <code>{'<KizunaMessageReact emoji="heart" count={2} />'}</code>
              <code>{'<KizunaMessageReact emoji="like" count={10} />'}</code>

              <small>Dark Mode</small>
              <code>{'<KizunaMessageReact emoji="heart" darkmode />'}</code>
              <code>{'<KizunaMessageReact emoji="like" darkmode />'}</code>
              <small>with Count</small>
              <code>
                {'<KizunaMessageReact emoji="heart" count={2} darkmode />'}
              </code>
              <code>
                {'<KizunaMessageReact emoji="like" count={10} darkmode />'}
              </code>
              <small>React Message Example</small>
              <code>
                {
                  '<KizunaMessageBox message="Welcome to Kizuna!" time="10:00 AM" sent reactionList={messageReactItems}'
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
                  '<KizunaMessageReact emoji="like" count={10} darkmode  classes={{messageReactWrapper: style.customReactWrapper, emoji: styles.customEmojiIconStyles, count: styles.customCountStyles}}/>'
                }
              </code>
              <code>{'code here'}</code>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MessageReact;
