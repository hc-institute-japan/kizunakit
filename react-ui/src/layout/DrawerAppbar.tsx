import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import { Link } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import styles from './DrawerAppbar.module.css';
import AppbarComponent from '../components/Appbar/Appbar';
import DrawerComponent from '../components/Drawer/Drawer';
import Header from '../components/Header/Header';

const drawerWidth = 240;

const ResponsiveDrawer = (props: any) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box>
      <Header />
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        {/* Appbar */}
        {/* <AppbarComponent
          drawerWidth={drawerWidth}
          handleDrawerToggle={handleDrawerToggle}
        /> */}

        {/* Drawer */}
        <DrawerComponent
          drawerWidth={drawerWidth}
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
        />

        {/* Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          {/* <Toolbar /> */}
          {props?.children}
        </Box>
      </Box>
    </Box>
  );
};

export default ResponsiveDrawer;
