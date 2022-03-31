import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ResponsiveDrawer from '../layout/DrawerAppbar';

import ButtonsPage from '../pages/Buttons/Buttons';
import HomePage from '../pages/Home';

const appRoutes = (
  <Routes>
    <Route
      path="/"
      element={
        <ResponsiveDrawer>
          <HomePage />
        </ResponsiveDrawer>
      }
    />
    <Route
      path="/buttons"
      element={
        <ResponsiveDrawer>
          <ButtonsPage />
        </ResponsiveDrawer>
      }
    />
  </Routes>
);

export default appRoutes;
