import React from 'react'
import TopSection from './Sections/TopSection'
import Carousol from './Sections/Carousol'
import GetMore from './Sections/GetMore'
import MidSection from './Sections/MidSection'
import PortFolio from './Sections/PortFolio'
import Comment from './Sections/Comments'
const Landing = () => {
  return (
    <div>
      <TopSection/>
      <MidSection/>
      <Carousol/>
      <Comment/>
      <PortFolio/>
      <GetMore/>
    </div>
  )
}

export default Landing