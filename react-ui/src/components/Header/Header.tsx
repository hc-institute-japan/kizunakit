//@ts-ignore
import kizunaLogo from '../../assets/kizuna-logo.svg';
import styles from './Header.module.css';

const Header = (props: any) => {
  return (
    <>
      <header className={styles.kizunaHeader}>
        <img src={kizunaLogo} alt="Kizuna Logo" />
        <h1>DESIGN SYSTEM</h1>
      </header>
    </>
  );
};

export default Header;
