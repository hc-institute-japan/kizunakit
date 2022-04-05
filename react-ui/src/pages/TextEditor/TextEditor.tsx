import styles from './TextEditor.module.css';
import CustomTabs from '../../components/Tabs/Tabs';
import CustomTable from '../../components/CustomTable/CustomTable';
import { KizunaButton } from 'kizuna-react-kit';
import { KizunaTextEditor } from 'kizuna-react-kit';
import { KizunaDivider } from 'kizuna-react-kit';
import { useState } from 'react';

const TextEditor = (props: any) => {
  const [selected, setSelected] = useState('examples');
  const [popover, setPopover] = useState(false);
  const API_DATA = [
    {
      name: 'text',
      type: 'string',
      defaultValue: '',
      description: 'The displayed text of the badge.',
    },
    {
      name: 'icon',
      type: 'string',
      defaultValue: '',
      description:
        '[OPTIONAL] When provided, an icon will be visible beside the badge text.',
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
      name: 'badgeWrapper',
      description: 'Overides the styling for the main wrapper of the badge',
    },
    { name: 'icon', description: 'Overides the styling for the icon wrapper' },
  ];

  const togglePopover = () => {
    setPopover(!popover);
  };

  return (
    <>
      <div className={styles.textEditorPage}>
        <h1 className={styles.title}>Text Editor</h1>
        <CustomTabs value={selected} onClickHandler={setSelected} />
        {selected === 'examples' && (
          <div>
            <div className={styles.textEditorExamplesContainer}>
              <div className={styles.default}>
                <h3>Default</h3>

                <div className={styles.textEditorContainer}>
                  <KizunaButton
                    type="secondary"
                    text="Text Editor"
                    onClick={togglePopover}
                  />
                  <KizunaTextEditor open={popover} selected="bold" />
                </div>
              </div>
            </div>
            <KizunaDivider classes={{ divider: styles.dividerMargin }} />
            <h1 className={styles.title}>Examples</h1>

            <div className={styles.codeExampleContainer}>
              <code>{'const [popover, setPopover] = useState(false);'}</code>
              <br />
              <code>
                {' const togglePopover = () => { setPopover(!popover);};'}
              </code>
              <br />
              <small>Default</small>

              <code>{'<div className={styles.textEditorContainer}>'}</code>
              <code>
                {
                  '<KizunaButton type="secondary" text="Text Editor" onClick={togglePopover} />'
                }
              </code>
              <code>
                {'<KizunaTextEditor open={popover} selected="bold" />'}
              </code>
              <code>{'/<div>'}</code>
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

export default TextEditor;
