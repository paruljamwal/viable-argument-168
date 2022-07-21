
import React from 'react'
import TopSection from './Sections/TopSection'
import Carousol from './Sections/Carousol'
import GetMore from './Sections/GetMore'
import MidSection from './Sections/MidSection'
import PortFolio from './Sections/PortFolio'
import Comment from './Sections/Comments'
import { Box } from '@chakra-ui/react'

const Landing = () => {
  return (
    <Box mt={"6rem"}>
      <TopSection/>
      <MidSection/>
      <Carousol/>
      <Comment/>
      <PortFolio/>
      <GetMore/>
    </Box>
  )
}

export default Landing;
