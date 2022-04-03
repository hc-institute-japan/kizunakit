import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { NavLink } from 'react-router-dom';
import styles from './Drawer.module.css';
import Divider from '@mui/material/Divider';

const DrawerComponent = (props: any) => {
  const { drawerWidth, handleDrawerToggle, window, mobileOpen } = props;

  const drawerContent = (
    <div>
      <Divider />

      <div className={styles.drawerListItems}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${styles.drawerLink} ${isActive && styles.selected}`
          }
        >
          Home
        </NavLink>

        <p className={styles.componentText}>COMPONENTS</p>
        <NavLink
          to="/avatar"
          className={({ isActive }) =>
            `${styles.drawerLink} ${isActive && styles.selected}`
          }
        >
          Avatar
        </NavLink>

        <NavLink
          to="/badge"
          className={({ isActive }) =>
            `${styles.drawerLink} ${isActive && styles.selected}`
          }
        >
          Badge
        </NavLink>

        <NavLink
          to="/buttons"
          className={({ isActive }) =>
            `${styles.drawerLink} ${isActive && styles.selected}`
          }
        >
          Buttons
        </NavLink>

        <NavLink
          to="/calendar"
          className={({ isActive }) =>
            `${styles.drawerLink} ${isActive && styles.selected}`
          }
        >
          Calendar
        </NavLink>

        <NavLink
          to="/checkbox"
          className={({ isActive }) =>
            `${styles.drawerLink} ${isActive && styles.selected}`
          }
        >
          Checkbox
        </NavLink>

        <NavLink
          to="/divider"
          className={({ isActive }) =>
            `${styles.drawerLink} ${isActive && styles.selected}`
          }
        >
          Divider
        </NavLink>

        <NavLink
          to="/icon"
          className={({ isActive }) =>
            `${styles.drawerLink} ${isActive && styles.selected}`
          }
        >
          Icon
        </NavLink>

        <NavLink
          to="/list-item"
          className={({ isActive }) =>
            `${styles.drawerLink} ${isActive && styles.selected}`
          }
        >
          List Item
        </NavLink>

        <NavLink
          to="/message-box"
          className={({ isActive }) =>
            `${styles.drawerLink} ${isActive && styles.selected}`
          }
        >
          Message Box
        </NavLink>

        <NavLink
          to="/message-react"
          className={({ isActive }) =>
            `${styles.drawerLink} ${isActive && styles.selected}`
          }
        >
          Message React
        </NavLink>

        <NavLink
          to="/modal"
          className={({ isActive }) =>
            `${styles.drawerLink} ${isActive && styles.selected}`
          }
        >
          Modal
        </NavLink>

        <NavLink
          to="/popover"
          className={({ isActive }) =>
            `${styles.drawerLink} ${isActive && styles.selected}`
          }
        >
          Popover
        </NavLink>

        <NavLink
          to="/tabs"
          className={({ isActive }) =>
            `${styles.drawerLink} ${isActive && styles.selected}`
          }
        >
          Tabs
        </NavLink>

        <NavLink
          to="/text-editor"
          className={({ isActive }) =>
            `${styles.drawerLink} ${isActive && styles.selected}`
          }
        >
          Text Editor
        </NavLink>

        <NavLink
          to="/textbox"
          className={({ isActive }) =>
            `${styles.drawerLink} ${isActive && styles.selected}`
          }
        >
          Textbox
        </NavLink>

        <NavLink
          to="/toggle"
          className={({ isActive }) =>
            `${styles.drawerLink} ${isActive && styles.selected}`
          }
        >
          Toggle
        </NavLink>
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
            maxHeight: '90vh',
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
