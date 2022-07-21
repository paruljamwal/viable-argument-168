import styled from "styled-components";


export const GetBox=styled.div`
margin:5% auto;
border: 1px solid transparent;
height: auto;
@media only screen and (max-width: 768px) {
   height: auto;
   margin: -170px auto;
}
`;

export const GetHead=styled.p` 
font-size: 2rem;
width: 30%;
border: 1px transparent solid;
margin:2% auto;
@media only screen and (max-width: 768px) {
   width: 85%;
     border: 1px solid transparent;
}
`;

export const GetGrid=styled.div`
display: flex;
border: 1px solid transparent;
width: 93%;
margin:1% auto;
gap: 2%;

@media only screen and (max-width: 768px) {
   flex-direction: column;
   gap: 4%;
}
`;


export const Box15=styled.div`
 border: 1px solid transparent;
 flex: 1;
 height: 400px;
 padding: 10px;
 box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
 &:hover{
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
 }

`;

export const GridImg=styled.img`
 width: 100%;
 height: 250px;
 border: 1px solid transparent;
 cursor: pointer;
`;


export const Gettext=styled.p` 
font-size:large;
width: 100%;
font-weight:600;
border: 1px transparent solid;
margin:5% auto;
cursor: pointer;

&:hover{
    color:rgb(87,187,113);
}

`;


export const Gettxt=styled.p` 
font-size:large;
width: 55%;
border: 1px solid transparent;
margin:0 auto;
color: gray;

@media only screen and (max-width: 768px) {
  width: 95%;
  margin: auto;
  padding: 15px;

}

`;