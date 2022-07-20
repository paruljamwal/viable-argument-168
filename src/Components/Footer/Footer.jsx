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
import { FaTwitter} from 'react-icons/fa';
// import { AiFillLinkedin } from 'react-icons/ai';
import { FaYoutube } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import {BsLinkedin} from "react-icons/bs"
import { FcGoogle } from 'react-icons/fc';
import img from "./logoevery.jpeg"

const Footer = () => {
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
          <ul className='dotlist'>
            <li> <div className='circledic'></div>Track time from the apps you already use</li>
            <li>Know where your team’s time is going</li>
            <li>Keep projects on budget</li>
            <br/>
            <br/>
            <br/>
            <li>Increase transpa</li>
            <li>Make your workflow more efficient</li>
            <li>Spot burnout before it happens</li>

          </ul>

        </div>

      </div>
      </div>
      <Box
        bg={useColorModeValue('black', 'black')}
     
        color={"white"}>
        <Container as={Stack} maxW={'1140px'} py={6} fontFamily="geomanist-regular',sans-serif" pt={"50px"}  >
          <Flex direction="row" justifyContent="space-evenly">
            <Stack>
            <Image src={img} className="picsize"  />
          
            </Stack>
            <Stack align={'flex-start'}  >
              {/* <ListHeader>Product</ListHeader> */}
              <Link href={'#'}>Company</Link>



              <Link href={'#'}>About us</Link>
              <Link href={'#'}>Contact</Link>

            </Stack>
            <Stack align={'flex-start'}>
              {/* <ListHeader>Company</ListHeader> */}
              <Link href={'#'}>Product</Link>
              <Link href={'#'}>Tour</Link>
              <Link href={'#'}>Pricing</Link>
              <Link href={'#'}>Request a demo</Link>

              <Link href={'#'}>Customers</Link>
              <Link href={'#'}>API & docs</Link>
              <Link href={'#'}>Status</Link>

            </Stack>
            <Stack align={'flex-start'}>

              <Link href={'#'}>  Solutions</Link>
              <Link href={'#'}>Time tracking</Link>
              <Link href={'#'}>Project budgeting</Link>
              <Link href={'#'}>Visual planning</Link>
              <Link href={'#'}>
                Reporting</Link>
              <Link href={'#'}>
                Invoicing</Link>
              <Link href={'#'}>Time card calculator</Link>
              <Link href={'#'}>Weekly timesheet template</Link>
              <Link href={'#'}>

                Invoice generator</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <Link href={'#'}> Integrations</Link>
              <Link href={'#'}>Asana</Link>
              <Link href={'#'}>Dribbble</Link>
              <Link href={'#'}>Trello</Link>
              <Link href={'#'}>Jira</Link>
              <Link href={'#'}>Twitter</Link>
              <Link href={'#'}>GitHub</Link>
              <Link href={'#'}>ClickUp</Link>
              <Link href={'#'}>Monday</Link>
              <Link href={'#'}>Notion</Link>
              <Link href={'#'}>
                Todoist</Link>
              <Link href={'#'}>
                GitLab</Link>
              <Link href={'#'}>All</Link>


            </Stack>
            <Stack align={'flex-start'}>
              <Link href={'#'}> Learn</Link>
              <Link href={'#'}>Twitter</Link>
              <Link href={'#'}>Resources</Link>
              <Link href={'#'}>Help center</Link>
              <Link href={'#'}>Blog</Link>
              <Link href={'#'}>Product updates</Link>
              <Link href={'#'}>Timesheet app</Link>
              <Link href={'#'}>Time clock app</Link>
              <Link href={'#'}>Attendance tracker</Link>
              <Link href={'#'}>Work hours tracker</Link>

            </Stack>
            <Stack align={'flex-start'}>
<Link href={'#'}>  Download</Link>
              <Link href={'#'}>Browser extension</Link>
              <Link href={'#'}>Chrome time tracking extension</Link>
              <Link href={'#'}>Time tracking with screenshots</Link>
              <Link href={'#'}>Chrome time tracking extension</Link>
              <Link href={'#'}>iPhone app</Link>

            </Stack>
          </Flex>
          <Box py={10}>

            <Text fontSize={'sm'} textAlign={'left'}>
              © 2022 Everhour Terms  |  Privacy | Cookies |  Sitemap
            </Text>

             <Text className='socialpic'>  
            
              <ul>
                <li> <FaFacebook/> </li>
                 <li><FaYoutube/></li>
                <li><FaTwitter/></li>
                 <li> <BsLinkedin/></li> 
              </ul>
                </Text> 


          </Box>
        </Container>


      </Box>
    </>
  )
}

export default Footer