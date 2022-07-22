import React, { useState } from "react";
import {  ButtonBox, Carousel, Left, Right, Slide } from "../Stlyed/Carousal.styled";
import SlideImages from "./Images";
import {ChevronLeftIcon,ChevronRightIcon} from '@chakra-ui/icons'

const Stepper = () => {
  let SliderArray = [
    <SlideImages
      src={
        "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/asana-primary.webp"
      }
    />,
    <SlideImages
      src={
        "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/trello-primary.webp"
      }
    />,
    <SlideImages
      src={
        "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/basecamp-primary.png"
      }
    />,
    <SlideImages
      src={
        "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/jira-primary.png"
      }
    />,
    <SlideImages
      src={
        "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/github-primary.webp"
      }
    />,
    <SlideImages
      src={
        "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/clickup-primary.png"
      }
    />,
  ];
  const [x, setX] = useState(0);
  const Goleft = () => {
    // console.log(x);
    x === 0 ? setX(-100 * (SliderArray.length - 1)) : setX(x + 100);
  };

  const GoRight = () => {
    // console.log(x);
    //   SliderArray.length was used so the input can be dynamic
    x === -100 * (SliderArray.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    
     <ButtonBox >
      
   
     <span>
      <Left onClick={Goleft}>
       <ChevronLeftIcon w={6} h={6}/>
      </Left>

     </span>
   
   <span>
    <Carousel>
      {SliderArray.map((e, i) => (
        <Slide key={i} style={{ transform: `translate(${x}%)` }}>
        {e}
        </Slide>
        ))}
        
      </Carousel>

      </span>
     <span>

      <Right onClick={GoRight}>
       <ChevronRightIcon w={6} h={6}/>
      </Right>
     </span>

   
  

  
       </ButtonBox>

 
  );
};

export default Stepper;
