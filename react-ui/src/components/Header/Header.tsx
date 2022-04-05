//@ts-ignore
import kizunaLogo from '../../assets/kizunaLogo.png';
import styles from './Header.module.css';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

const Header = (props: any) => {
  const { handleDrawerToggle } = props;
  return (
    <>
      <header className={styles.kizunaHeader}>
        <Toolbar className={styles.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <img className={styles.kizunaLogo} src={kizunaLogo} alt="Kizuna Logo" />
        <h1>DESIGN SYSTEM</h1>
      </header>
    </>
  );
};

export default Header;
