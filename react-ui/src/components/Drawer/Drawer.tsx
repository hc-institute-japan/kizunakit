import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { Link } from 'react-router-dom';
import styles from './Drawer.module.css';
import Divider from '@mui/material/Divider';

const DrawerComponent = (props: any) => {
  const { drawerWidth, handleDrawerToggle, window, mobileOpen } = props;
  const [selectedTab, setSelectedTab] = useState('home');

  const drawerContent = (
    <div>
      <Divider />

      <div className={styles.drawerListItems}>
        <Link
          to="/"
          className={`${styles.drawerLink} ${
            selectedTab === 'home' && styles.selected
          }`}
          onClick={() => setSelectedTab('home')}
        >
          Home
        </Link>

        <p className={styles.componentText}>COMPONENTS</p>
        <Link
          to="/avatar"
          className={`${styles.drawerLink} ${
            selectedTab === 'avatar' && styles.selected
          }`}
          onClick={() => setSelectedTab('avatar')}
        >
          Avatar
        </Link>

        <Link
          to="/badge"
          className={`${styles.drawerLink} ${
            selectedTab === 'badge' && styles.selected
          }`}
          onClick={() => setSelectedTab('badge')}
        >
          Badge
        </Link>

        <Link
          to="/buttons"
          className={`${styles.drawerLink} ${
            selectedTab === 'buttons' && styles.selected
          }`}
          onClick={() => setSelectedTab('buttons')}
        >
          Buttons
        </Link>

        <Link
          to="/calendar"
          className={`${styles.drawerLink} ${
            selectedTab === 'calendar' && styles.selected
          }`}
          onClick={() => setSelectedTab('calendar')}
        >
          Calendar
        </Link>

        <Link
          to="/checkbox"
          className={`${styles.drawerLink} ${
            selectedTab === 'checkbox' && styles.selected
          }`}
          onClick={() => setSelectedTab('checkbox')}
        >
          Checkbox
        </Link>

        <Link
          to="/divider"
          className={`${styles.drawerLink} ${
            selectedTab === 'divider' && styles.selected
          }`}
          onClick={() => setSelectedTab('divider')}
        >
          Divider
        </Link>

        <Link
          to="/icon"
          className={`${styles.drawerLink} ${
            selectedTab === 'icon' && styles.selected
          }`}
          onClick={() => setSelectedTab('icon')}
        >
          Icon
        </Link>

        <Link
          to="/list-item"
          className={`${styles.drawerLink} ${
            selectedTab === 'list-item' && styles.selected
          }`}
          onClick={() => setSelectedTab('list-item')}
        >
          List Item
        </Link>

        <Link
          to="/message-box"
          className={`${styles.drawerLink} ${
            selectedTab === 'message-box' && styles.selected
          }`}
          onClick={() => setSelectedTab('message-box')}
        >
          Message Box
        </Link>

        <Link
          to="/message-react"
          className={`${styles.drawerLink} ${
            selectedTab === 'message-react' && styles.selected
          }`}
          onClick={() => setSelectedTab('message-react')}
        >
          Message React
        </Link>

        <Link
          to="/modal"
          className={`${styles.drawerLink} ${
            selectedTab === 'modal' && styles.selected
          }`}
          onClick={() => setSelectedTab('modal')}
        >
          Modal
        </Link>

        <Link
          to="/popover"
          className={`${styles.drawerLink} ${
            selectedTab === 'popover' && styles.selected
          }`}
          onClick={() => setSelectedTab('popover')}
        >
          Popover
        </Link>

        <Link
          to="/tabs"
          className={`${styles.drawerLink} ${
            selectedTab === 'tabs' && styles.selected
          }`}
          onClick={() => setSelectedTab('tabs')}
        >
          Tabs
        </Link>

        <Link
          to="/text-editor"
          className={`${styles.drawerLink} ${
            selectedTab === 'text-editor' && styles.selected
          }`}
          onClick={() => setSelectedTab('text-editor')}
        >
          Text Editor
        </Link>

        <Link
          to="/textbox"
          className={`${styles.drawerLink} ${
            selectedTab === 'textbox' && styles.selected
          }`}
          onClick={() => setSelectedTab('textbox')}
        >
          Textbox
        </Link>

        <Link
          to="/toggle"
          className={`${styles.drawerLink} ${
            selectedTab === 'toggle' && styles.selected
          }`}
          onClick={() => setSelectedTab('toggle')}
        >
          Toggle
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
