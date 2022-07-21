import styled from "styled-components";

export const Box=styled.div` 
margin: auto;
width:60%;
text-align: center;

@media only screen and(max-width: 800px) {
   background-color: blueviolet;
    }

    @media only screen and (max-width: 768px) {
    width: 100%;
}


`;


export const Head = styled.p`
font-size: 3rem;
font-weight: 450;
color:rgb(51,51,51);
line-height: normal;

@media only screen and (max-width: 768px) {
   font-size: 2rem;
   font-weight:500;
}

`;


export const Content=styled.p` 
  color: gray;
  font-size: 20px;
  margin-top: 3%;

  
  @media only screen and (max-width: 768px) {
    width: 90%;
    text-align: center;
    font-weight: 150;
    padding-left: 1px;
    margin:4% auto;
}
`;

export const Blue=styled.p`
color: rgb(74,144,226);
cursor: pointer;
font-weight:500;
padding-left: 5px;

&:hover{
    text-decoration: underline;
}





`;

export const Div=styled.div` 
display: flex;
width: 90%;
margin: auto;
/* border: 1px solid red; */

@media screen and (min-width: 320px) and (max-width: 480px) {
   /* height: 500px; */
   /* display:flex; */
   /* background-color: yellow; */
    }


`;


export const P = styled.p`
  width: 70%;
  align-items: center;
  margin: auto;
  display:flex;
  @media screen and (max-width: 480px) {
   display:none;
    }
    @media screen and (min-width: 481px) and (max-width: 1275px) {
   display:none
    }
`;


export const Button1=styled.button` 
  width: 152px;
  height: 48px;
   background-color:#57bb71 ;
   margin-right: 3%;
   color: whitesmoke;
    border-radius:5px ;
    @media screen and (min-width: 481px) and (max-width: 1275px) {
        width: 90px;
    }
 `;


export const Button2=styled.button` 

width: 152px;
  height: 48px;
  color: #57bb71  ;
  border: 1px solid #57bb71 ;
  border-radius: 5px;


  @media screen and (min-width: 481px) and (max-width: 1275px) {
    width: 90px;

    }
`;


export const Box1=styled.div` 
 margin: 5% auto;


`;


export const Video=styled.div` 
 width: 82%;
 margin:5% auto;


 
@media only screen and (max-width: 768px)  {
   width: 100%;
   margin-top: 9%;
}
`;


export const Image=styled.img` 
 width: 100%;

 `;

// export const Load=styled.div` 
//   position: absolute;
//   top: 600px;
  
// `;


export const UseCase=styled.div` 
  display: flex;
  gap :4% ;
  /* height: 813px; */
 
 
  
  @media only screen and (max-width: 768px)  {
   width: 100%;
   /* height: 500px; */
   flex-direction: column;
   gap: 1%;
   
}

`;

export const Head1=styled.p` 
     margin:0% 0% 1% 3%;
     font-size: 3rem;
   
     @media only screen and (max-width: 768px)  {
      margin-left:5%;
         
}


`;

export const Lists=styled.div` 

border: 0px solid gray;
width: 35%;
height: 613px;
margin-left: 3%;
@media only screen and (max-width: 768px)  {
   width: 90%;
   margin:5% auto;
   height: 70px;
   font-size: small;
   
}
`;


export const ChangingPic=styled.div`

border: 1px solid transparent;
width: 60%;
height: auto;
@media only screen and (max-width: 768px)  {
   /* width: 90%;
   margin:0% auto;
   height: 330px;
   border-radius: 4px; */
   display: none;
}

`;

export const Pro=styled.div` 
  margin: 9% auto;
  width: 39%;


  @media only screen and (max-width: 768px)  {
   width: 60%;
   margin:5% 0 2% 30%;
   
}

`;


export const LoadingImg=styled.img` 
position: relative;
width :100px ;
top: -800;
left: 45%;

`;