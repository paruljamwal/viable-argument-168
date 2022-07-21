import React from 'react'
import './Customer.css'
const People = () => {
  let array=[
    {
      id:1,
      h1:"Computer Software",
      h2:"Accurate time tracking for grant reporting",
      h3:"Everhour helps us track our engineering hours which is a requirement for several Government grants we have received. Without Everhour, we would be unable to accurately track the hours associated with each individual project we are working on as a company. The reports are easily customizable which allows me to extract the data I need. Everhour is a great tool for our time tracking needs!",
      h4:"Kelly Bonneau",
      image:"https://blog-cdn.everhour.com/assets/images/new-design/illustrations/customers/customer-kelly.webp",
      h5:"Accounting Manager at 7shifts"
    },
    {
      id:2,
      h1:"Internet",
      h2:"A great solution for time tracking, especially if you are integrating with Basecamp.",
      h3:"We use Everhour across our organization for time tracking. Not only do we use it for tracking client billable work, but we also use it for our internal projects and almost everything we do, so we can analyze how we spend our time and find ways to make everything more efficient. The integration with Basecamp is the most important feature for us.",
      h4:"Tim Hebel",
      h5:"Owner at Beanstalk Web Solutions",
      image:"https://blog-cdn.everhour.com/assets/images/new-design/illustrations/customers/customer-tim.webp"
    }
    ,
    {
      id:3,
      h1:"Marketing Agency",
      h2:"Tried 'em all. Everhour + Asana wins the prize.",
      h3:" am the owner of the company, and I use Everhour to track time for myself and my subcontractors. All team members use the system — from web developers to tech support, project management, and design. After trying nearly every system on the market, Everhour addressed the following key issues for my business: bi-directional sync with QuickBooks, customization of line items in invoices, integration with Asana, great UI & UX, setting budgets for clients & projects.",
      h4:"Jennifer Hess",
      h5:"Designer, Developer & CEO at Sofo Studios",
      image:"https://blog-cdn.everhour.com/assets/images/new-design/illustrations/customers/customer-jennifer.webp"
    }
    ,
    {
      id:4,
      h1:"Internet",
      h2:"Easy hour registration with budgeting + invoicing.",
      h3:"Everhour has a really nifty integration with ClickUp and provides you with the information in a single click. The interface is very intuitive and helps us reduce the time needed to report hours of different project tasks. On top of the nice integration, it goes even further and provides a way to get more grip on a project by defining a budget. And when all hours are written, you can customize your reports or use the API to run queries/exports of the data.",
      h4:"Paul Groeneweg",
      h5:"Owner at Beanstalk Web Solutions",
      image:"https://blog-cdn.everhour.com/assets/images/new-design/illustrations/customers/customer-paul.webp"
    }
    ,
    {
      id:5,
      h1:"Marketing & Advertising",
      h2:"The perfect solution for UpBuild.",
      h3:"I like that Everhour is straightforward and functional and other things. I already had a tool for those things; what I needed was an easy and enjoyable to use time tracking solution that I knew would work. Everhour has consistently impressed me with how well their product works and how fast they innovate and improve.",
      h4:"Mike Arnesen",
      h5:"Founder & CEO at UpBuild",
      image:"https://blog-cdn.everhour.com/assets/images/new-design/illustrations/customers/customer-mike.webp"
    }
  ]
  return (
    <>
    {
      array.map((array)=>(
        <div className='total'>
        <div>
           <div className='section1'>
           <div>
            <p>{array.h1}</p>
            </div>
            <div>
                <h1>{array.h2}</h1>
            </div>
           </div>
           <div className='below'>
             <div className='section2'>
              <div className='khali'></div>
                <div className='q'>
              <img className='image2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRekdAj46-NMNiF-bwfnqn-zHC8562973U8tNDhwG6TqGO7_5kW7pVyFjUKyhkQ0qwt4A&usqp=CAU" alt="" />
                </div>
                <div className='text'><p>{array.h3}</p>
                <div className='text1'>
                <a href="" className='ancor'>{array.h4}
                 </a>
                 <p>{array.h5}</p>
                </div>
                
            </div>
            
           </div>
           
           <div>
            <img src={array.image} alt="image"  className='image'/>
           </div>
           </div>
        </div>
        <div className='fali'></div>
    </div>
      ))
    }
    <p className='p'>A time tracker you can trust for life</p>
    <div className='all'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQagPOS-UCBF3qRiMuB1Aer778LJqqfV64-1D_izwu7FBlvd-ao" alt="" />
      
      <img src="https://nextcloud.com/wp-content/uploads/2022/03/Gartner-1536x460.png" alt="" />   
       
      <img src="https://www.signable.co.uk/wp-content/uploads/awards-banner.webp" alt="" />
      
   </div>
    </>
  )
}

export default People