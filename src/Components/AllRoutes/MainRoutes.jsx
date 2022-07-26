import React from "react";
import { Routes, Route } from "react-router-dom";
import Pricingpage from "../../Pages/Pricing/Pricingpage";
import Demo from "../../Pages/Demo/Demo";
import Tour from "../../Pages/Tour/Tour";
import Landing from "../../Pages/Landing/Landing";
import Customer from "../../Pages/Customer/Customer";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Projects from "../../Pages/usetimer/Projects";
import TableData from "../../Pages/usetimer/table";
import DetailForm from "../../Home/DetailForm";
import Clients from "../../Pages/usetimer/Clients";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />}></Route>
      <Route path="/tour" element={<Tour />}></Route>
      <Route path="/customer" element={<Customer />}></Route>
      <Route path="/price" element={<Pricingpage />} />
      <Route path="/request-a-demo" element={<Demo />}></Route>
      <Route path="/signup" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/project/:id" element={<Projects />} />
      <Route path="/home" element={<DetailForm />} />
      <Route path="/table" element={<TableData />}></Route>
      <Route path="/clients" element={<Clients />}></Route>
    </Routes>
  );
};

export default MainRoutes;