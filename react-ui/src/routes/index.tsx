import React from "react";
import { Route, Routes } from "react-router-dom";

import ButtonsPage from "../pages/Buttons/Buttons.tsx";
import HomePage from "../pages/Home.tsx";

const appRoutes = (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/buttons" element={<ButtonsPage />} />
  </Routes>
);

export default appRoutes;
