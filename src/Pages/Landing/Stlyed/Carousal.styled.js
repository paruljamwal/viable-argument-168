import styled from "styled-components";

export const Box3=styled.div` 
width: 85%;
border: 1px solid transparent;
margin: 10% auto;
@media only screen and(max-width: 800px) {
    width: 90%;
    border: 1px solid transparent;
    margin: 5% auto;
    }

    @media only screen and (max-width: 768px) {
    width: 95%;
    margin:120% auto;
    height:250px ;
}
`;


export const Head2=styled.p `
margin: auto;
font-size: 2rem;
font-weight: 700;
width: 750px;
line-height: normal;
justify-content: center;

@media only screen and(max-width: 800px) {
    width: 90%;
    border: 1px solid transparent;
    margin: 5% auto;
    }

    @media only screen and (max-width: 768px) {
    width: 95%;
    font-size: 1rem;
    justify-content:center ;
    margin:5% auto;
}

`;

export const Box4=styled.div` 
width: 80%;
display: flex;
border: 1px solid transparent;
margin: 4% auto;

@media only screen and (max-width: 768px) {
   width: 100%;
   display: grid;
   grid-template-columns: repeat(2,1fr);
   border: 0px solid transparent;
   box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
}
`;


export const Logo=styled.img` 
width: 30px;
cursor: pointer;

@media only screen and (max-width: 768px) {
    padding: 5px;
    width: 100%;
    margin:5px;
    border: 1px solid transparent;
}
`;

export const Box5=styled.div` 
display: flex;
margin:auto;
font-size: larger;
@media only screen and (max-width: 768px) {
   width: 100px;
    font-size: 1rem;
    font-weight: 600;
    margin: 1px auto;

}
`;


export const Carousel=styled.div` 
border  :1px solid transparent ;
width: 100%;
margin: 10% auto;
box-sizing: border-box;
height: 500px;
align-items: center;
display: flex;
overflow: hidden;

@media only screen and (max-width: 768px) {
    width:100%;
    margin: 0% auto;
    
}
`;


export const Slide=styled.div` 
/* position: relative; */
border: 1px solid transparent;
min-width: 100%;
height: 100%;
transition: 0.5s;
overflow: hidden;
cursor: pointer;

@media only screen and (max-width: 768px) {
  height: auto;
  background-color: antiquewhite;
  margin-top: -150px;
}
`;


export const ButtonBox=styled.div` 
margin:4% auto;
border: 1px solid transparent;
width: 100%;
height: 550px;
display: flex;
gap: 10%;

@media only screen and (max-width: 768px) {
  margin:-50px auto;
  display: columns;
}
`;

export const Left=styled.button` 
width: 60px;
height: 60px;
border-radius: 50px;
background-color:whitesmoke;
box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
/* transform: translateY(-50%); */
outline: none;
cursor: pointer;
margin-top: 300px;


@media only screen and (max-width: 768px) { 
width: 30px;
height: 30px;
border-radius: 20px;
margin: 150px -3px;
/* background-color : rgb(87,187,113); */
}


`;


export const Right=styled.button` 
width: 60px;
margin-top: 300px;
height: 60px;
border-radius: 50px;
background-color:whitesmoke;
box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
 /* transform: translateX(-50%); */
 outline: none;
 cursor: pointer;

 
@media only screen and (max-width: 768px) {
width: 30px;
height: 30px;
border-radius: 20px;
margin: 150px -30px;
}

`;


export const Box6=styled.div` 
 display: flex;
 border: 1px solid transparent;
 width: 90%;
 height: 150px;
 gap: 2%;
 margin: auto;


 @media only screen and (max-width: 768px) {
    flex-direction: column;
    margin-top:-150px;
    gap: 5%;
    width: 90%;
}
`;


export const Drop=styled.div`
flex : 1;

@media only screen and (max-width: 768px) {
    border: 1px solid green;
    border-radius: 10px;
    padding: 5px;
    transition: transform .5s ease;
 &:hover{
    transform: scale(1.5);
 }   
}

`;


export const Topic=styled.p` 
font-size: 2rem;
font-weight:400;

`;


export const Drops=styled.div` 
 background-color: rgb(242,251,249);
 width: 50px;
 height: 50px;
 border-radius: 50px 50px 0px 50px;
 cursor: pointer;

`;

export const Box7=styled.div` 
display: flex;
gap: 2%;
`;

export const Box8=styled.p` 
position: absolute;
margin-left: 1.5%;
font-size: large;
color: rgb(87,187,113);
padding-top:12px;
font-weight: bold;
`;

