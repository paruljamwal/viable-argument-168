
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Pricingpage from "../../Pages/Pricing/Pricingpage";
import Demo from "../../Pages/Demo/Demo";
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
      
    </Routes>
  )
}

export default MainRoutes
