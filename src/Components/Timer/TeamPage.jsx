import React from 'react'
import './TeamPage.css'
const TeamPage = () => {
    let array=[
        {
            id:1,
            title:"Team page",
            text:"See in real time who is currently working and on what tasks, approve timesheets and timecards, track vacations, sick leaves and any other PTO types, invite a new employee or deactivate an existing one.",
            link:"Learn more",
            image:"https://app.everhour.com/assets/img/youtube/youtube-team.png"
        }
    ]
  return (
    <div>
        <div className='all'>
          <div className='section1'>
            <div className='first'>{array[0].title}</div>
            <div>{array[0].text}</div>
            <div><a href="https://support.everhour.com/article/477-about-team-page">{array[0].link}</a></div>
          </div>
          <div><img src={array[0].image} alt="image" />
          
          <button class='button play'>
            
          </button>
          </div>
          
        </div>
    </div>
  )
}

export default TeamPage