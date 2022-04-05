import { useState } from 'react';
import CustomTabs from '../../components/Tabs/Tabs';
import CustomTable from '../../components/CustomTable/CustomTable';
import { KizunaButton, KizunaDivider, KizunaModal } from 'kizuna-react-kit';
import styles from './Modal.module.css';

const Modal = (props: any) => {
  const [selected, setSelected] = useState('examples');
  const [isOpen, setOpen] = useState(false);
  const [isOpenCustom, setOpenCustom] = useState(false);
  const [isOpenTransparent, setOpenTransparent] = useState(false);

  const API_DATA = [
    {
      name: 'open',
      type: 'boolean',
      defaultValue: 'false',
      description: 'Set if the modal is open or not',
    },
    {
      name: 'transparent',
      type: 'boolean',
      defaultValue: 'false',
      description: 'Set if the modal has a background',
    },
    {
      name: 'onClose',
      type: 'function',
      defaultValue: '',
      description: 'Function to trigger when modal is closed',
    },
    {
      name: 'closeIcon',
      type: 'string',
      defaultValue: 'close',
      description: 'Name of the icon at the top right',
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
      name: 'overlayBackground',
      description: 'Overides the styling for background of the modal',
    },
    {
      name: 'modalWrapper',
      description: 'Overides the styling for the main wrapper of the modal',
    },
    {
      name: 'modalContent',
      description: 'Overides the styling for the body of the modal',
    },
    {
      name: 'closeIcon',
      description: 'Overides the styling for the closeIcon wrapper',
    },
  ];

  const _handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div>
        <h1 className="title">Modal</h1>
        <CustomTabs value={selected} onClickHandler={setSelected} />
        {selected === 'examples' && (
          <div>
            <div className={styles.modalButtonsContainer}>
              <KizunaButton
                type="secondary"
                text={'Open Default modal'}
                onClick={() => {
                  setOpen(!isOpen);
                  setOpenTransparent(false);
                  setOpenCustom(false);
                }}
              />
              <KizunaButton
                type="secondary"
                text={'Open Custom modal'}
                onClick={() => {
                  setOpen(false);
                  setOpenTransparent(false);
                  setOpenCustom(!isOpenCustom);
                }}
              />
              <KizunaButton
                type="secondary"
                text={'Transparent background'}
                onClick={() => {
                  setOpen(false);
                  setOpenCustom(false);
                  setOpenTransparent(!isOpenTransparent);
                }}
              />
            </div>

            <KizunaModal open={isOpen} onClose={_handleClose}>
              <h3>Add Modal Content Here</h3>
            </KizunaModal>

            <KizunaModal
              open={isOpenCustom}
              onClose={_handleClose}
              classes={{
                modalWrapper: styles.customModalWrapper,
                modalContent: styles.customModalContent,
                overlayBackground: styles.customOverlayBackground,
              }}
            >
              <h1>CUSTOM MODAL</h1>
              <h3>Add Custom styles here</h3>
            </KizunaModal>

            <KizunaModal
              open={isOpenTransparent}
              onClose={_handleClose}
              transparent
              classes={{
                modalWrapper: styles.customTransparentModalOverlay,
                modalContent: styles.customModalContent,
              }}
            >
              <h3>Transparent Background</h3>
            </KizunaModal>

            <KizunaDivider classes={{ divider: styles.dividerMargin }} />
            <h1 className="title">Examples</h1>

            <div className="codeExampleContainer">
              <code>{`            <KizunaModal open={isOpen} onClose={_handleClose}>
              <h1>Add Modal Content Here</h1>
            </KizunaModal>`}</code>
              <br />
              <code>{`            <KizunaModal
              open={isOpenCustom}
              onClose={_handleClose}
              classes={{
                modalWrapper: styles.customModalWrapper,
                modalContent: styles.customModalContent,
                overlayBackground: styles.customOverlayBackground,
              }}
            >
              <h1>CUSTOM MODAL</h1>
              <h3>Add Custom styles here</h3>
            </KizunaModal>`}</code>
              <br />
              <code>{`            <KizunaModal
              open={isOpenTransparent}
              onClose={_handleClose}
              transparent
              classes={{
                modalWrapper: styles.customTransparentModalOverlay,
                modalContent: styles.customModalContent,
              }}
            >
              <h1>Transparent Background</h1>
            </KizunaModal>`}</code>
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
              <code>{`            <KizunaModal
              open={isOpenCustom}
              onClose={_handleClose}
              classes={{
                modalWrapper: styles.customModalWrapper,
                modalContent: styles.customModalContent,
                overlayBackground: styles.customOverlayBackground,
              }}
            >
              <h1>CUSTOM MODAL</h1>
              <h3>Add Custom styles here</h3>
            </KizunaModal>`}</code>
              <br />
              <code>{`            <KizunaModal
              open={isOpenTransparent}
              onClose={_handleClose}
              transparent
              classes={{
                modalWrapper: styles.customTransparentModalOverlay,
                modalContent: styles.customModalContent,
              }}
            >
              <h1>Transparent Background</h1>
            </KizunaModal>`}</code>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Modal;
