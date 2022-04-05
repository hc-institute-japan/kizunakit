import styles from './MessageBox.module.css';
import CustomTabs from '../../components/Tabs/Tabs';
import CustomTable from '../../components/CustomTable/CustomTable';

import { KizunaMessageBox } from 'kizuna-react-kit';
import { KizunaDivider } from 'kizuna-react-kit';
import { useState } from 'react';

const MessageBox = (props: any) => {
  const [selected, setSelected] = useState('examples');

  const API_DATA = [
    {
      name: 'message',
      type: 'string',
      defaultValue: '',
      description: 'The displayed message of the message box.',
    },
    {
      name: 'time',
      type: 'string',
      defaultValue: '',
      description: 'Displayed time of the message box',
    },
    {
      name: 'messageStatus',
      type: "'sent' | 'delivered' | 'seen' ",
      defaultValue: '',
      description: 'Sets the message status of the message',
    },
    {
      name: 'darkmode',
      type: 'boolean',
      defaultValue: '',
      description: '',
    },
    {
      name: 'sent',
      type: 'boolean',
      defaultValue: '',
      description: 'Sets the message box if user or contact',
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
      description: 'Overide styling for main wrapper of component',
    },
    {
      name: 'message',
      description: 'Overide styling for the text of component',
    },
    {
      name: 'metadata',
      description: 'Overide styling for text at the bottom of the component',
    },
    {
      name: 'time',
      description: 'Overide styling for time text of component',
    },
    {
      name: 'messageStatus',
      description: 'Overide styling for Message status of component',
    },
    {
      name: 'messageStatusIcon',
      description: 'Overide styling for messageStatusIcon wrapper of component',
    },
    {
      name: 'reactionsContainer',
      description: 'Overide styling for Reactions container',
    },
    {
      name: 'reactionContainer',
      description: 'Overide styling for Reaction Container',
    },
    {
      name: 'messageReactWrapper',
      description: 'Overide styling for Message Reac tWrapper of component',
    },
    {
      name: 'emoji',
      description: 'Overide styling for memoji',
    },
    {
      name: 'count',
      description: 'Overide styling for count text',
    },
  ];
  return (
    <>
      <div className={styles.messageBoxPage}>
        <h1 className={styles.title}>Message Box</h1>
        <CustomTabs value={selected} onClickHandler={setSelected} />
        {selected === 'examples' && (
          <div>
            <div className={styles.messageBoxExamplesContainer}>
              <div className={styles.default}>
                <div className={styles.userMessageBox}>
                  <h3>User</h3>
                  <div className={styles.default}>
                    <div>
                      <h4>Sent</h4>
                      <KizunaMessageBox
                        message="Welcome to Kizuna!"
                        time="10:00 AM"
                        messageStatus="sent"
                      />
                    </div>

                    <div>
                      <h4>Delivered</h4>
                      <KizunaMessageBox
                        message="Welcome to Kizuna!"
                        time="10:00 AM"
                        messageStatus="delivered"
                      />
                    </div>

                    <div>
                      <h4>Seen</h4>
                      <KizunaMessageBox
                        message="Welcome to Kizuna!"
                        time="10:00 AM"
                        messageStatus="seen"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.contactMessageBox}>
                  <h3>Contact</h3>
                  <div className={styles.contactMessageBoxContainer}>
                    <div>
                      <h4>Sent</h4>
                      <KizunaMessageBox
                        message="Welcome to Kizuna!"
                        time="10:00 AM"
                        sent
                      />
                    </div>
                  </div>
                </div>
              </div>

              <br />

              <div className={styles.darkModeWrapper}>
                <h2>Dark Mode</h2>
                <div className={styles.darkMode}>
                  <div className={styles.userMessageBox}>
                    <h3>User</h3>
                    <div className={styles.default}>
                      <div>
                        <h4>Sent</h4>
                        <KizunaMessageBox
                          message="Welcome to Kizuna!"
                          time="10:00 AM"
                          messageStatus="sent"
                          darkmode
                        />
                      </div>

                      <div>
                        <h4>Delivered</h4>
                        <KizunaMessageBox
                          message="Welcome to Kizuna!"
                          time="10:00 AM"
                          messageStatus="delivered"
                          darkmode
                        />
                      </div>

                      <div>
                        <h4>Seen</h4>
                        <KizunaMessageBox
                          message="Welcome to Kizuna!"
                          time="10:00 AM"
                          messageStatus="seen"
                          darkmode
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.contactMessageBox}>
                    <h3>Contact</h3>
                    <div className={styles.contactMessageBoxContainer}>
                      <div>
                        <h4>Sent</h4>
                        <KizunaMessageBox
                          message="Welcome to Kizuna!"
                          time="10:00 AM"
                          sent
                          darkmode
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <br />
              </div>
            </div>
            <KizunaDivider classes={{ divider: styles.dividerMargin }} />
            <h1 className={styles.title}>Examples</h1>

            <div className={styles.codeExampleContainer}>
              <small>Default</small>

              <code>
                {
                  '<KizunaMessageBox message="Welcome to Kizuna!" time="10:00 AM" messageStatus="sent" />'
                }
              </code>
              <code>
                {
                  '<KizunaMessageBox message="Welcome to Kizuna!" time="10:00 AM" messageStatus="delivered" />'
                }
              </code>
              <code>
                {
                  '<KizunaMessageBox message="Welcome to Kizuna!" time="10:00 AM" messageStatus="seen" />'
                }
              </code>
              <code>
                {
                  '<KizunaMessageBox message="Welcome to Kizuna!" time="10:00 AM" sent />'
                }
              </code>
              <small>Dark Mode</small>
              <code>
                {
                  '<KizunaMessageBox message="Welcome to Kizuna!" time="10:00 AM" messageStatus="sent" darkmode />'
                }
              </code>
              <code>
                {
                  '<KizunaMessageBox message="Welcome to Kizuna!" time="10:00 AM" messageStatus="delivered" darkmode />'
                }
              </code>
              <code>
                {
                  '<KizunaMessageBox message="Welcome to Kizuna!" time="10:00 AM" messageStatus="seen" darkmode />'
                }
              </code>

              <code>
                {
                  '<KizunaMessageBox message="Welcome to Kizuna!" time="10:00 AM" sent darkmode />'
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
                {`<KizunaMessageBox message="Welcome to Kizuna!" time="10:00 AM" messageStatus="sent" 
                    classes={{
                      root: styles.customRoot,
                      message: styles.coloredText,
                      messageStatus: styles.borderedMessageStatus
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

export default MessageBox;
