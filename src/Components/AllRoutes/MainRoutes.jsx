import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Landing from '../../Pages/Landing/Landing'
const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Landing/>} ></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
    </Routes>
  )
}

export default MainRoutes