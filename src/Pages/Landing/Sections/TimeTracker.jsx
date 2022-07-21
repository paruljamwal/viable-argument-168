import React from 'react'
import { Box14, Box15, TimeHead } from '../Stlyed/TimeTracker'

const TimeTracker = () => {
    const data={
        img:"",
        img:"",
        img:"",
        img:"",
        img:"",
        img:"",
        img:"",
        img:"",
        img:"",
        img:"",
    }
  return (
    <Box14>
        <TimeHead>
            A time tracker you can trust for life
        </TimeHead>
            <Box15>
            {
            data.map((e)=>(
                <img src='' />
            ))
            }
            </Box15>
    </Box14>
  )
}

export default TimeTracker