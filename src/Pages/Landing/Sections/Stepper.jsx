import React, { useState } from "react";
import {  ButtonBox, Carousel, Left, Right, Slide } from "../Stlyed/Carousal.styled";
import SlideImages from "./Images";
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
        <img src='https://cdn-icons.flaticon.com/png/128/2989/premium/2989985.png?token=exp=1658381376~hmac=d31939a0287a512d9efe29e5c76eac03' alt="left"></img>
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
        <img src="https://cdn-icons.flaticon.com/png/128/2989/premium/2989988.png?token=exp=1658347686~hmac=3df14b1921c85b7f873058f7ad0a8da2" alt="" />
      </Right>
     </span>

   
  

  
       </ButtonBox>

 
  );
};

export default Stepper;
