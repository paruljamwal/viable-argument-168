import  Reviews  from './Reviews'
import React from 'react'
import './Customer.css'
import People from './People'
import { tourText } from './TourText'
const Customer = () => {
  return (
    <div className='MainBox'>
    <div className='h1parent'>
    <h1 className='h1'>What our l😍vely customers
          are saying</h1>
    </div>
    <People/>
    <Reviews tourText={tourText} />
     
    </div>
  )
}

export default Customer