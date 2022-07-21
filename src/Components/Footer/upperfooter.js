import React from 'react'
import "./footer.css"
import {
  Box,
  Container,
  Link,
 Stack,
  Text,
  Flex,
useColorModeValue,
Img,
Image
} from '@chakra-ui/react';
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'
import { FaTwitter} from 'react-icons/fa';
// import { AiFillLinkedin } from 'react-icons/ai';
import { FaYoutube } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import {BsLinkedin} from "react-icons/bs"
import { FcGoogle } from 'react-icons/fc';
import img from "./logoevery.jpeg"

const UPPERFooter = () => {
  return (
    <>
   
    <div >
      <div  className='rsContainer' style={{display:"flex"}} >
        <div  className='subdiv' >
          <h2 className='page-title'> Take control of your time with Everhour</h2>
          <div className='page-subtitle'>
            <h3>Beautiful integrations. Intuitive interface. No unexpected fees </h3>
          </div>
          <form className='signup_by_email'>
            <div>
              <input placeholder='Working email....'  className='inp' />
              <button className='actionbtn'>Try free</button>
            </div>

            <span width="10px"><FcGoogle/> </span>
            <a>Or sign up with Google Account</a>
          
          </form>
        </div>

        <div  style={{width:"370px" ,height:"230px" ,lineHeight:3.5}}  >
         
<List spacing={1} className='dotlist'>
  <ListItem>
    <ListIcon fontSize={"13px"} bg={"#57bb71"} borderRadius={"50%"} color='green.500' />
    Track time from the apps you already use
    </ListItem>
    <ListItem>
    <ListIcon   fontSize={"13px"} bg={"#57bb71"} borderRadius={"50%"} color='green.500' />
    Know where your team’s time is going
    </ListItem>
    <ListItem>
    <ListIcon  fontSize={"13px"} bg={" #57bb71"} borderRadius={"50%"} color='green.500' />
    Keep projects on budget
    </ListItem>
    <br/>
   
   
    <ListItem>
    <ListIcon fontSize={"13px"} bg={"#57bb71"} borderRadius={"50%"} color='green.500' />
    Increase transparency
    </ListItem>

    <ListItem>
    <ListIcon fontSize={"13px"}  bg={"#57bb71"} borderRadius={"50%"} color='green.500' />
    Make your workflow more efficient
    </ListItem>
    <ListItem>
    <ListIcon fontSize={"13px"}  bg={"#57bb71"} borderRadius={"50%"} color='green.500' />
    Spot burnout before it happens
    </ListItem>
    
    </List>
        </div>

      </div>
      </div>
      
     


    </>
  )
}

export default UPPERFooter