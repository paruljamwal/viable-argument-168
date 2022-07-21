import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import {Pro,Button2, UseCase, Head1, Lists, ChangingPic} from "../Stlyed/Topsection.styled";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
   
  } from '@chakra-ui/react';
  import '../Stlyed/Midsection.css'
import { Clock, ClockBox } from '../Stlyed/Midsection.styled';
const MidSection = () => {
const navigate=useNavigate()
// const [count,setCount]=useState(1)
  // const ImgData=[
  //   {i:1,img:"https://blog-cdn.everhour.com/assets/images/new-design/screens/team-timesheet-v2.png"},
  //   {i:2,img:"https://blog-cdn.everhour.com/assets/images/new-design/screens/projects-dashboard-v2.png"},
  //   {i:3,img:"https://blog-cdn.everhour.com/assets/images/new-design/screens/resource-planning-members-new-v2.png"},
  //   {i:4,img:"https://blog-cdn.everhour.com/assets/images/new-design/screens/expenses.png"},
  //   {i:5,img:"https://blog-cdn.everhour.com/assets/images/new-design/screens/invoices-preview-v2.png"},
  //   {i:6,img:"https://blog-cdn.everhour.com/assets/images/new-design/screens/projects-board-view-v2.png"},
  // ]
 
  


  const handleTour=()=>{
     navigate('/tour')
  }
  return (
    <div>
       <Head1>UseCases</Head1>
       <UseCase>
          <Lists>
          <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        
        <ClockBox flex='1' textAlign='left' className='Use Space1'>
        <div><Clock src='https://cdn-icons-gif.flaticon.com/6450/6450929.gif'/></div><div> Time tracking</div>
        </ClockBox>
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} className='useCase Space'>
  
      Easy-touse time tracker. Know the time spent on tasks, hours of work, and breaks for each employee
    
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <ClockBox flex='1' textAlign='left' className='Use  Space1'>
        <div><Clock src='https://cdn-icons-gif.flaticon.com/7994/7994351.gif' alt='icon' /></div>
     <div>

          Billing and budgeting
     </div>
        </ClockBox>
   
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}  className='useCase Space'>

      Simple and flexible projects billing. Set budgets to track progress in real time. Receive timely notifications
    </AccordionPanel>
  </AccordionItem>



  <AccordionItem>
    <h2>
      <AccordionButton>
        <ClockBox flex='1' textAlign='left' className='Use  Space1'>
        <div><Clock src='https://cdn-icons-png.flaticon.com/128/609/609063.png' /></div>
     <div>

          Task management
     </div>
        </ClockBox>
  
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}  className='useCase Space'>
      Create tasks, organize them in sections, add time estimates to keep everyone in the loop and on track
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <ClockBox flex='1' textAlign='left' className='Use Space1'>
        <div><Clock src='https://cdn-icons.flaticon.com/png/128/3201/premium/3201656.png?token=exp=1658302610~hmac=0f67a9434ec95b92fb3441ab14742bec' /></div>
     <div>

          Visual planning
     </div>
        </ClockBox>
   
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}  className='useCase Space'>
      View your teram's schedule, know how busy or available some is, compare plan to the actual time spent
    </AccordionPanel>
  </AccordionItem>


  <AccordionItem>
    <h2>
      <AccordionButton>
        <ClockBox flex='1' textAlign='left' className='Use  Space1'>
        <div><Clock src='https://cdn-icons.flaticon.com/png/128/4255/premium/4255284.png?token=exp=1658302722~hmac=f42ceb7ca9b6e54bd2f37001d2671fca' /></div>
     <div>

          Expenses
     </div>
        </ClockBox>
    
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}  className='useCase Space'>
        Track work-related expenses with ease. Reimburse employees, use costs in projects budgets, add to client invoices
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <ClockBox flex='1' textAlign='left' className='Use  Space1'>
        
        <div><Clock src='https://cdn-icons-png.flaticon.com/128/4306/4306907.png' /></div>
     <div>

       Invoicing
     </div>
        </ClockBox>
     
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}  className='useCase Space'>
    Easily create an invoice based on tracked time and expenses. Connect with QuickBooks, Xero or FreshBooks
    </AccordionPanel>
  </AccordionItem>
</Accordion>
       <Pro>
         <Button2 onClick={()=>handleTour()} >Product tour</Button2>
        </Pro> 
          </Lists>
          <ChangingPic>
            <img src="https://blog-cdn.everhour.com/assets/images/new-design/screens/expenses.png" alt="" />
           
            </ChangingPic> 
       </UseCase>


    </div>
  )
}

export default MidSection