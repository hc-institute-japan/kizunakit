import { useState } from 'react';
import CustomTabs from '../../components/Tabs/Tabs';
import CustomTable from '../../components/CustomTable/CustomTable';
import {
  KizunaButton,
  KizunaDivider,
  KizunaListItem,
  KizunaPopover,
} from 'kizuna-react-kit';
import styles from './Popover.module.css';

interface popoverState {
  [key: string]: boolean;
}

const defaultPopovers: popoverState = {
  '1': false,
  '2': false,
  '3': false,
  '4': false,
  '5': false,
  '6': false,
};

const Popover = (props: any) => {
  const [selected, setSelected] = useState('examples');
  const [popovers, setPopovers] = useState(defaultPopovers);

  const API_DATA = [
    {
      name: 'darkmode',
      type: 'boolean',
      defaultValue: '',
      description: '',
    },
    {
      name: 'open',
      type: 'boolean',
      defaultValue: 'false',
      description: 'Set if the popover is open or not',
    },
    {
      name: 'position',
      type: 'left | center | right',
      defaultValue: 'left',
      description: 'Position alignment of the popover',
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
      description: 'Overrides the styling for the main wrapper',
    },
    {
      name: 'contentWrapper',
      description: 'Overrides the styling for the content wrapper',
    },
  ];

  const _setFocus = (popoverNumber: number) => {
    const element = document.getElementById(`popover-${popoverNumber}`);
    element?.focus();
  };

  const _togglePopover = (popoverNumber: number) => {
    setPopovers({
      ...defaultPopovers,
      [popoverNumber]: !popovers[popoverNumber],
    });
    _setFocus(popoverNumber);
  };

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
                <div className={styles.flexContainer}>
                  <div className={styles.popoverContainer}>
                    <KizunaButton
                      type="secondary"
                      text="Left Align"
                      onClick={() => _togglePopover(1)}
                    />

                    <KizunaPopover open={popovers[1]} position="left">
                      <KizunaListItem icon="trash" text="Delete" divider />
                      <KizunaListItem icon="send" text="Send" divider />
                      <KizunaListItem icon="copy" text="Copy" divider />
                      <KizunaListItem
                        icon="briefcase"
                        text="Briefcase"
                        divider
                      />
                      <KizunaListItem icon="message" text="Message" />
                    </KizunaPopover>
                  </div>
                  <div className={styles.popoverContainer}>
                    <KizunaButton
                      type="secondary"
                      text="Center Align"
                      onClick={() => _togglePopover(2)}
                    />

                    <KizunaPopover open={popovers[2]} position="center">
                      <p>Add Content here</p>
                    </KizunaPopover>
                  </div>
                  <div className={styles.popoverContainer}>
                    <KizunaButton
                      type="secondary"
                      text="Left Align"
                      onClick={() => _togglePopover(3)}
                    />

                    <KizunaPopover open={popovers[3]} position="right">
                      <p>Content goes here</p>
                    </KizunaPopover>
                  </div>
                </div>
              </div>

              <div className={styles.exampleContainer}>
                <h3 className={styles.exampleTitle}>Dark Mode</h3>
                <div className={styles.flexContainer}>
                  <div className={styles.popoverContainer}>
                    <KizunaButton
                      type="secondary"
                      text="Left Align"
                      onClick={() => _togglePopover(4)}
                    />

                    <KizunaPopover open={popovers[4]} position="left" darkmode>
                      <KizunaListItem icon="trash" text="Delete" divider />
                      <KizunaListItem icon="send" text="Send" divider />
                      <KizunaListItem icon="copy" text="Copy" divider />
                      <KizunaListItem
                        icon="briefcase"
                        text="Briefcase"
                        divider
                      />
                      <KizunaListItem icon="message" text="Message" />
                    </KizunaPopover>
                  </div>
                  <div className={styles.popoverContainer}>
                    <KizunaButton
                      type="secondary"
                      text="Center Align"
                      onClick={() => _togglePopover(5)}
                    />

                    <KizunaPopover
                      open={popovers[5]}
                      position="center"
                      darkmode
                    >
                      <p>Add Content here</p>
                    </KizunaPopover>
                  </div>
                  <div className={styles.popoverContainer}>
                    <KizunaButton
                      type="secondary"
                      text="Left Align"
                      onClick={() => _togglePopover(6)}
                    />

                    <KizunaPopover open={popovers[6]} position="right" darkmode>
                      <p>Content goes here</p>
                    </KizunaPopover>
                  </div>
                </div>
              </div>
            </div>
            <KizunaDivider classes={{ divider: styles.dividerMargin }} />
            <h1 className="title">Usage</h1>
            <p>
              1. Wrap component with a position absolute styling and width set
              to fit-content
            </p>
            <div className="codeExampleContainer">
              <code>{`<div className={styles.popoverContainer}>
                    {...code here}
                  </div>`}</code>
            </div>
            <br />
            <div className="codeExampleContainer">
              <code>{`.popoverContainer {
  position: relative;
  width: fit-content;
}`}</code>
            </div>

            <br />
            <p>2. Add Button to trigger popover</p>
            <div className="codeExampleContainer">
              <code>{`                    <KizunaButton

                      onClick={() => setOpenPopover(true)
                      }
                    />`}</code>
            </div>

            <br />
            <p>3. Use Popover</p>
            <div className="codeExampleContainer">
              <code>{`                    <KizunaPopover open={popovers[2]} position="center">
                      <p>Add Content here</p>
                    </KizunaPopover>`}</code>
            </div>

            <h1 className="title">Examples</h1>
            <div className="codeExampleContainer">
              <code>{`                  <div className={styles.popoverContainer}>
                    <KizunaButton
                      type="secondary"
                      text="Center Align"
                      onClick={() =>
                        setPopovers({ ...defaultPopovers, 2: !popovers[2] })
                      }
                    />
                    <KizunaPopover open={popovers[2]} position="center">
                      <p>Add Content here</p>
                    </KizunaPopover>
                  </div>`}</code>
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
              <code>{`                   <KizunaPopover open={popovers[2]} position="center"
                  classes={{root: styles.customeWrapper, contentWrapper: styles: styles.noMarginContent}}
              >
                      <p>Add Content here</p>
                    </KizunaPopover>`}</code>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Popover;
