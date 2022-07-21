import React from 'react'
import { Box9,CommaImg, PortHead,Box10,Box13, ImgBox,Box11,Span,Box12 } from '../Stlyed/PortFolio.styled'
import { Link } from 'react-router-dom'
const PortFolio = () => {
  return (
    <Box9>
        <Box10>
        <PortHead>
            Everhour has helped 166,000+ people complete over 118 million tasks in 3 million projects
        <Box11>
            {/* <Box12> */}
         <Span>
            <CommaImg src="https://cdn-user-icons.flaticon.com/72181/72181678/1658320143074.svg?token=exp=1658321044~hmac=07a7a6339684643c0d79b1af98f69433" alt="" />
          
         Everhour helps us track our engineering hours which is a requirement for several Government grants we have received.
            
            <span style={{backgroundColor:'rgb(252,250,176)'  }
          } >
          Without Everhour, we would be unable to accurately track the hours associated with each individual project we are working on as a company. 
          </span>
          
          The reports are easily customizable which allows me to extract the data I need. Everhour is a great tool for our time tracking needs!
          {/* </Box12> */}
          </Span> 
        </Box11>
        </PortHead>
        <ImgBox src='https://blog-cdn.everhour.com/assets/images/new-design/illustrations/customers/customer-kelly@mobile.webp'/>
      </Box10>
      <Box13>
     <p style={{color:'black', fontWeight:"bold"}} >Kelly Bonneau, CPA</p>
      <p>Accounting Manager at  <span  style={{color:'black', fontWeight:"bold"}}>7shifts</span></p>
      <Link to='*' style={{color:"blue",textDecoration:"underline"}} >Read more reviews</Link>
      </Box13>
    </Box9>
  )
}

export default PortFolio