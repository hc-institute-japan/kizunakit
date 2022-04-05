import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ResponsiveDrawer from '../layout/DrawerAppbar';
import HomePage from '../pages/Home';
import ButtonsPage from '../pages/Buttons/Buttons';
import AvatarPage from '../pages/Avatar/Avatar';
import BadgePage from '../pages/Badge/Badge';
import CalendarPage from '../pages/Calendar/Calendar';
import CheckboxPage from '../pages/Checkbox/Checkbox';
import DividerPage from '../pages/Divider/Divider';
import IconPage from '../pages/Icon/Icon';
import ListItemPage from '../pages/ListItem/ListItem';
import MessageBoxPage from '../pages/MessageBox/MessageBox';
import MessageReactPage from '../pages/MessageReact/MessageReact';
import ModalPage from '../pages/Modal/Modal';
import PopoverPage from '../pages/Popover/Popover';
import TabsPage from '../pages/Tabs/Tabs';
import TextboxPage from '../pages/Textbox/Textbox';
import TextEditorPage from '../pages/TextEditor/TextEditor';
import TogglePage from '../pages/Toggle/Toggle';

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
      path="/avatar"
      element={
        <ResponsiveDrawer>
          <AvatarPage />
        </ResponsiveDrawer>
      }
    />

    <Route
      path="/badge"
      element={
        <ResponsiveDrawer>
          <BadgePage />
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

    <Route
      path="/calendar"
      element={
        <ResponsiveDrawer>
          <CalendarPage />
        </ResponsiveDrawer>
      }
    />

    <Route
      path="/checkbox"
      element={
        <ResponsiveDrawer>
          <CheckboxPage />
        </ResponsiveDrawer>
      }
    />

    <Route
      path="/divider"
      element={
        <ResponsiveDrawer>
          <DividerPage />
        </ResponsiveDrawer>
      }
    />

    <Route
      path="/icon"
      element={
        <ResponsiveDrawer>
          <IconPage />
        </ResponsiveDrawer>
      }
    />

    <Route
      path="/list-item"
      element={
        <ResponsiveDrawer>
          <ListItemPage />
        </ResponsiveDrawer>
      }
    />

    <Route
      path="/message-box"
      element={
        <ResponsiveDrawer>
          <MessageBoxPage />
        </ResponsiveDrawer>
      }
    />

    <Route
      path="/message-react"
      element={
        <ResponsiveDrawer>
          <MessageReactPage />
        </ResponsiveDrawer>
      }
    />

    <Route
      path="/modal"
      element={
        <ResponsiveDrawer>
          <ModalPage />
        </ResponsiveDrawer>
      }
    />

    <Route
      path="/popover"
      element={
        <ResponsiveDrawer>
          <PopoverPage />
        </ResponsiveDrawer>
      }
    />

    <Route
      path="/tabs"
      element={
        <ResponsiveDrawer>
          <TabsPage />
        </ResponsiveDrawer>
      }
    />

    <Route
      path="/text-editor"
      element={
        <ResponsiveDrawer>
          <TextEditorPage />
        </ResponsiveDrawer>
      }
    />

    <Route
      path="/textbox"
      element={
        <ResponsiveDrawer>
          <TextboxPage />
        </ResponsiveDrawer>
      }
    />

    <Route
      path="/toggle"
      element={
        <ResponsiveDrawer>
          <TogglePage />
        </ResponsiveDrawer>
      }
    />
  </Routes>
);

export default appRoutes;
