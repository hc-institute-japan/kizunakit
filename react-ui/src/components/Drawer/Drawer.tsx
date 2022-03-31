import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { Link } from 'react-router-dom';
import styles from './Drawer.module.css';
import Divider from '@mui/material/Divider';

const DrawerComponent = (props: any) => {
  const { drawerWidth, handleDrawerToggle, window, mobileOpen } = props;

  const drawerContent = (
    <div>
      <Divider />

      <div className={styles.drawerListItems}>
        <Link to="/" className={styles.drawerLink}>
          Home
        </Link>

        <Link to="/buttons" className={styles.drawerLink}>
          Buttons
        </Link>
        <Link to="/" className={styles.drawerLink}>
          Home
        </Link>

        <Link to="/buttons" className={styles.drawerLink}>
          Buttons
        </Link>
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          'display': { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            top: 'unset',
          },
        }}
      >
        {drawerContent}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          'display': { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            top: 'unset',
          },
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
};

export default DrawerComponent;
