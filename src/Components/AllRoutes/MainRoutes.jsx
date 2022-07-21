import React from "react";
import { Routes, Route } from "react-router-dom";
import Pricingpage from "../../Pages/Pricing/Pricingpage";
import Demo from "../../Pages/Demo/Demo";
import Tour from "../../Pages/Tour/Tour";
import Landing from '../../Pages/Landing/Landing'
import Customer from '../../Pages/Customer/Customer';
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute";
const MainRoutes = () => {
  return (
    <Routes>
     
        <Route path='/' element={<Landing/>} ></Route>
        <Route path='/customer'   element={<Customer/>}></Route>
        <Route></Route>
       <Route path='/price' element={<Pricingpage/>}/>
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
