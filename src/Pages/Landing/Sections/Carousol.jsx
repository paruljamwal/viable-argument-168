import React from 'react'
import { Box3, Head2 ,Box4, Logo,Box5} from '../Stlyed/Carousal.styled'
import Stepper from './Stepper'


const Carousol = () => {
  return (
    <Box3>
        <Head2>
            Estimate tasks, set budgets, build reports & track time. All inside your project management tool.
        </Head2>

         <Box4>
            <Box5>
                <div>
                    <Logo src='https://cdn-icons.flaticon.com/png/128/2982/premium/2982182.png?token=exp=1658304776~hmac=ba79304e887f58bd633322b8285870c9' />
                </div>
                <div>Asana</div>
            </Box5>
            <Box5>
                <div>
                <Logo src='https://cdn-icons-png.flaticon.com/128/6124/6124991.png' />
                </div>
                <div>Trello</div>
            </Box5>
            <Box5>
                <div>
                <Logo src='https://cdn-icons-png.flaticon.com/128/732/732184.png' />
                </div>
                <div>BaseCamp</div>
            </Box5>
            <Box5>
                <div>
                <Logo src='https://cdn-icons-png.flaticon.com/128/5968/5968842.png' />
                </div>
                <div>Jira</div>
            </Box5>
            <Box5>
                <div>
                <Logo src='https://cdn-icons-png.flaticon.com/128/2111/2111425.png' />
                </div>
                <div>GitHub</div>
            </Box5>
            <Box5>
                <div>
                <Logo src='https://cdn-icons-png.flaticon.com/128/1612/1612855.png' />
                </div>
                <div>ClickUp</div>
            </Box5>
         </Box4>

           <Stepper/>

    </Box3>
  )
}

export default Carousol