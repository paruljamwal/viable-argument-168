import React from 'react'
import { Box6, Box7, Box8, Drop, Drops,Topic } from "../Stlyed/Carousal.styled";
const Comments = () => {
  return (
    <Box6>
    <Drop>
        <Box7>
         <Drops><Box8>1</Box8></Drops>
         <Topic>Quick setup </Topic>
         </Box7>
          <p>Connect EverHour with your tool and start tracking time right away. No manual project setup is required.</p>
    </Drop>
    <Drop>
        <Box7>
         <Drops><Box8>2</Box8></Drops>
         <Topic>Native Integration</Topic>
         </Box7>
          <p>Time tracker controles nativaly appears your project management tool make it easy to track time.</p>
    </Drop>
    <Drop>
        <Box7>
        <Drops><Box8>3</Box8></Drops>
         <Topic>Automatic update</Topic>
         </Box7>
          <p>Everhour syncs changes automatically. That means your reports will always show the fresest data.</p>
    </Drop>
 </Box6> 
  )
}

export default Comments