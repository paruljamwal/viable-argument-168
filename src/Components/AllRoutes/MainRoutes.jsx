import React from "react";
import { Routes, Route } from "react-router-dom";

import Demo from "../../Pages/Demo/Demo";
const MainRoutes = () => {
  return (
    <Routes>
      <Route></Route>
      <Route></Route>
      <Route></Route>
      <Route></Route>
      <Route path="/request-a-demo" element={<Demo />}></Route>

    </Routes>
  );
};

export default MainRoutes;
