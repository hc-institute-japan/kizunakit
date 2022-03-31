import { KizunaButton } from 'kizuna-react-kit';
import styles from './Buttons.module.css';
import CustomTable from '../../components/CustomTable/CustomTable';

const ButtonsPage = () => {
  const API_DATA = [
    {
      name: 'name1',
      type: 'string',
      defaultValue: '',
      description: 'setsetset',
    },
    { name: 'name2', type: 'string', defaultValue: '', description: 'testse' },
    { name: 'name3', type: 'boolean', defaultValue: '', description: '' },
    { name: 'name4', type: 'object', defaultValue: '', description: '' },
  ];

  const CSS_DATA = [
    {
      name: 'name1',
      description: 'setsetset',
    },
    { name: 'name2', description: 'testse' },
    { name: 'name3', type: 'boolean', description: '' },
  ];

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

      <hr />
      <h1>API</h1>
      <p>Use these Props to access features of the component</p>
      <CustomTable type="API" data={API_DATA} />
      <hr />

      <h1>CSS</h1>
      <p>Use these class names to override styling</p>
      <CustomTable type="CSS" data={CSS_DATA} />

      <h1>EXAMPLE</h1>
    </div>
  );
};

export default ButtonsPage;
