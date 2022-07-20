
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Pricingpage from "../../Pages/Pricing/Pricingpage";
import Demo from "../../Pages/Demo/Demo";
const MainRoutes = () => {
  return (
    <Routes>
        <Route ></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
       <Route path='/price' element={<Pricingpage/>}/>



      <Route path="/request-a-demo" element={<Demo />}></Route>


    </Routes>
  )
}

export default MainRoutes
