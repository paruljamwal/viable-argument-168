import React from 'react'
import {Box15, GetBox, GetGrid,GetHead,Gettext,Gettxt,GridImg } from '../Stlyed/GetMore'

const GetMore = () => {
  return (
    <GetBox>
        <GetHead>
            Get more from Everhour
        </GetHead>
        <Gettxt>Productivity tips and techniques, tutorials, guides, and other time management resources</Gettxt>
         <GetGrid>
            <Box15>
                <GridImg src="https://blog-cdn.everhour.com/assets/images/new-design/illustrations/resources/section-guide-and-templates.jpg" alt="" />
                <p>Resources</p>
                <Gettext>
                    Free guides and templates to help your team work better
                </Gettext>
            </Box15>
            <Box15>
                <GridImg src='https://blog-cdn.everhour.com/assets/images/new-design/illustrations/resources/section-tutorial-videos.jpg'></GridImg>
               <p>Video totorials</p>
               <Gettext>
                Short videos to learn the best way to use Everhour
               </Gettext>
            </Box15>
            <Box15>
            <GridImg  src='https://blog-cdn.everhour.com/assets/images/new-design/illustrations/resources/section-product-updates.jpg'></GridImg>
             <p>Blog</p>
             <Gettext>
                Your first destination for the freshly released Everhour features
             </Gettext>
            </Box15>
            <Box15>
            <GridImg src='https://blog-cdn.everhour.com/assets/images/new-design/illustrations/resources/section-help-docs.jpg' ></GridImg>
             <p>Help Center</p>
             <Gettext>
                FAQ, tutorials, documentation, help, and support
             </Gettext>
            </Box15>
         </GetGrid>
    </GetBox>
  )
}

export default GetMore