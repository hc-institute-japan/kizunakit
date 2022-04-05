import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.homePage}>
      <h1>Introduction</h1>
      <p>Learn how to include Kizuna Kit in your project</p>

      <h2>Installation</h2>

      <div className={styles.codeWrapper}>
        <code>{'npm install kizuna-react-kit'}</code>
      </div>

      <h2>Importing Components</h2>
      <div className={styles.codeWrapper}>
        <code>{"import { KizunaButton } from 'kizuna-react-kit' "}</code>
      </div>

      <h2>Browser Global</h2>
      <div className={styles.codeWrapper}></div>
    </div>
  );
};

export default Home;
