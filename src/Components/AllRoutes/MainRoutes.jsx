import React from "react";
import { Routes, Route } from "react-router-dom";
import Pricingpage from "../../Pages/Pricing/Pricingpage";
import Demo from "../../Pages/Demo/Demo";
import Tour from "../../Pages/Tour/Tour";
import Landing from '../../Pages/Landing/Landing'
import Customer from '../../Pages/Customer/Customer';
const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Landing/>} ></Route>
        <Route path='/customer'   element={<Customer/>}></Route>
        <Route></Route>
       <Route path='/price' element={<Pricingpage/>}/>
       <Route path="/request-a-demo" element={<Demo />}></Route>
       <Route path="/tour" element={<Tour />}></Route>
     </Routes>
  );
};

export default MainRoutes;
