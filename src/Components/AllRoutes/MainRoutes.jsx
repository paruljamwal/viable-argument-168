import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Pricingpage from "../../Pages/Pricing/Pricingpage"
const MainRoutes = () => {
  return (
    <Routes>
        <Route ></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
       <Route path='/price' element={<Pricingpage/>}/>
    </Routes>
  )
}

export default MainRoutes
