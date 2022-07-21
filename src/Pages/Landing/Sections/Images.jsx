import React from 'react'

const SlideImages = ({src}) => {
   let imgStyles={
 width:100+"%",
 height:"auto"

   }


  return < img src={src}  style={imgStyles} />
}

export default SlideImages