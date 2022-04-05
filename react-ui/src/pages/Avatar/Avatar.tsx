import styles from './Avatar.module.css';
import CustomTabs from '../../components/Tabs/Tabs';
import CustomTable from '../../components/CustomTable/CustomTable';

import { KizunaAvatar, KizunaCheckbox } from 'kizuna-react-kit';
import { KizunaDivider } from 'kizuna-react-kit';
import { useState } from 'react';

const Avatar = (props: any) => {
  const [selected, setSelected] = useState('examples');

  const API_DATA = [
    {
      name: 'size',
      type: 'xs | sm | md | lg | xl',
      defaultValue: '',
      description: 'The size of the avatar.',
    },
    {
      name: 'image',
      type: 'string',
      defaultValue: '',
      description: 'Image link of the avatar',
    },
    {
      name: 'name',
      type: 'string',
      defaultValue: '',
      description:
        'If image is not available, initials of the name will be displayed',
    },
    {
      name: 'status',
      type: 'away | offline | online',
      defaultValue: '',
      description: 'The status of the user',
    },
    {
      name: 'indicator',
      type: 'boolean',
      defaultValue: 'false',
      description: 'To display the status of the user',
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
      name: 'avatarWrapper',
      description: 'Overrides the styling for the main wrapper of the Avatar',
    },
    {
      name: 'imageWrapper',
      description: 'Overrides the styling for the image wrapper of the Avatar',
    },
    {
      name: 'indicator',
      description: 'Overrides the styling for the indicator',
    },
    {
      name: 'checkmark',
      description: 'Overrides the styling for the checkmark',
    },
  ];
  return (
    <>
      <div className={styles.checkboxPage}>
        <h1 className="title">Avatar</h1>
        <CustomTabs value={selected} onClickHandler={setSelected} />
        {selected === 'examples' && (
          <div>
            <div className={styles.avatarsExamplesContainer}>
              <div className={styles.exampleContainer}>
                <h3 className="title">With Image</h3>
                <div className={styles.avatarsContainer}>
                  <KizunaAvatar
                    size="xs"
                    image="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  />
                  <KizunaAvatar
                    size="sm"
                    image="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  />
                  <KizunaAvatar
                    size="md"
                    image="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  />
                  <KizunaAvatar
                    size="lg"
                    image="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  />
                  <KizunaAvatar
                    size="xl"
                    image="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  />
                </div>
                <h3 className="title">Without Image</h3>
                <div className={styles.avatarsContainer}>
                  <KizunaAvatar size="md" name="Ella Gopez" />
                  <KizunaAvatar size="lg" name="Ella Gopez" />
                  <KizunaAvatar size="xl" name="Ella Gopez" />
                </div>
              </div>

              <div className={styles.exampleContainer}>
                <h3 className="title">With Status</h3>
                <div className={styles.avatarsContainer}>
                  <KizunaAvatar
                    size="lg"
                    image="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    indicator={true}
                    status="away"
                  />
                  <KizunaAvatar
                    size="lg"
                    image="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    indicator={true}
                    status="offline"
                  />
                  <KizunaAvatar
                    size="lg"
                    image="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    indicator={true}
                    status="online"
                  />
                </div>
                <h3 className="title">Custom Styles</h3>
                <div className={styles.avatarsContainer}>
                  <KizunaAvatar
                    size="lg"
                    image="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    classes={{ imageWrapper: styles.customImageWrapper }}
                  />
                  <KizunaAvatar
                    size="lg"
                    name="Ella Gopez"
                    classes={{ imageWrapper: styles.customColor }}
                  />
                </div>
              </div>
            </div>
            <KizunaDivider classes={{ divider: styles.dividerMargin }} />
            <h1 className="title">Examples</h1>

            <div className={styles.codeExampleContainer}>
              <small>With Image</small>

              <code>
                {`                  <KizunaAvatar
                  size="md"
                  image="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />`}
              </code>
              <code>
                {`                  <KizunaAvatar
                  size="lg"
                  image="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />`}
              </code>
              <small>Without Image</small>
              <code>{`<KizunaAvatar size="lg" name="Ella Gopez" />`}</code>
              <code>{`<KizunaAvatar size="xl" name="Ella Gopez" />`}</code>

              <small>With Status</small>
              <code>
                {`                  <KizunaAvatar
                  size="lg"
                  image="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  indicator={true}
                  status="online"
                />`}
              </code>
              <code>
                {`                  <KizunaAvatar
                  size="lg"
                  image="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  indicator={true}
                  status="away"
                />`}
              </code>
              <small>Custom Styles</small>
              <code>
                {`                  <KizunaAvatar
                  size="lg"
                  image="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  classes={{ imageWrapper: styles.customImageWrapper }}
                />`}
              </code>
              <code>
                {`                  <KizunaAvatar
                 size="lg"
                 name="Ella Gopez"
                 classes={{ imageWrapper: styles.customColor }}
               />`}
              </code>
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

            <div className={styles.codeExampleContainer}>
              <code>
                {`                  <KizunaAvatar
                  size="lg"
                  image="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  classes={{ imageWrapper: styles.customImageWrapper }}
                />`}
              </code>
              <code>
                {`                  <KizunaAvatar
                 size="lg"
                 name="Ella Gopez"
                 classes={{ imageWrapper: styles.customColor }}
               />`}
              </code>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Avatar;
