import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.homePage}>
      <h1>Introduction</h1>
      <p>Learn how to include Kizuna Kit in your project</p>

      <h2>Installation</h2>
      <p>
        To consume Kizuna design kit, use the npm package which you can install
        with npm (or yarn if you prefer).
      </p>

      <div className={styles.codeWrapper}>
        <code>{'npm install kizuna-react-kit'}</code>
      </div>

      <h2>Importing Components</h2>
      <div className={styles.codeWrapper}>
        <code>{"import { KizunaButton } from 'kizuna-react-kit' "}</code>
      </div>

      <h2>Browser Global Styles</h2>
      <p>
        To use the colors of the package, add theses on your global css file.
      </p>
      <div className={styles.codeWrapper}>
        <p>{':root {'}</p>
        <p>{'   --primary: #e48221;'}</p>
        <p>{'   --primary-10: #e5c8ab;'}</p>
        <p>
          {
            '--primary-gradient: linear-gradient(180deg, #e47221 0%, #f5c31a 100%);'
          }
        </p>
        <br />
        <p>{'/* Light Mode */'}</p>
        <p>{'--primary-text: #404040;'}</p>
        <p>{'--secondary-text: #838383;'}</p>
        <br />
        <p>{'/* Dark Mode */'}</p>
        <p>{'-dark-primary-text: #cfcfcf;'}</p>-
        <p>{'--dark-secondary-text: #979797;'}</p>
        <p>{'--dark-primary-bg: #23252e;'}</p>
        <p>{'--dark-secondary-bg: #292b33;'}</p>
        <br />
        <p>{'/* Colors */'}</p>
        <p>{'-white: #ffff;'}</p>
        <p>{'--black: #0000;'}</p>
        <p>{'--red: #f10404;'}</p>
        <p>{'--green: #11d30d;'}</p>
        <p>{'--gray: #f3f3f3;'}</p>
        <p>{'}'}</p>
      </div>
    </div>
  );
};

export default Home;
