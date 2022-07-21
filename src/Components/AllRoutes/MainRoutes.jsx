import React from "react";
import { Routes, Route } from "react-router-dom";
import Demo from "../../Pages/Demo/Demo";
import Tour from "../../Pages/Tour/Tour";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute";
const MainRoutes = () => {
  return (
    <Routes>
      <Route></Route>
      <Route></Route>
      <Route path="/signup" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route
        path="/tour"
        element={
          <PrivateRoute>
            <Tour />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="/request-a-demo"
        element={
          <PrivateRoute>
            <Demo />
          </PrivateRoute>
        }
      ></Route>
    </Routes>
  );
};

export default MainRoutes;
