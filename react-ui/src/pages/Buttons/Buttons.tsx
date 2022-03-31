import { KizunaButton } from 'kizuna-react-kit';
import styles from './Buttons.module.css';

const ButtonsPage = () => {
  return (
    <div>
      <h1>BUTTONS PAGE </h1>

      <hr />

      <div>
        <h3>Primary button</h3>
        <KizunaButton type="primary" text="Primary Button Sample" />
      </div>

      <div>
        <h3>Secondary button</h3>
        <KizunaButton type="secondary" text="Primary Button Sample" />
      </div>

      <div>
        <h3>Primary button w/ custom styles</h3>
        <KizunaButton
          type="primary"
          text="Primary Button Sample"
          classes={{
            btnWrapper: styles.customButton,
          }}
        />
      </div>
    </div>
  );
};

export default ButtonsPage;
