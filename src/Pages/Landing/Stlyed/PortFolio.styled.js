import styled from "styled-components";

export const Box9 = styled.div`
  border: 1px solid transparent;
  width: 90%;
  height: 600px;
  margin: 5% auto;

  @media only screen and (max-width: 768px) {
    height: auto;
    width: 95%;
    margin: 35% auto;
  }
  @media only screen and (max-width: 425px) {
    height: auto;
    width: 95%;
    margin: 80% auto;
  }
`;

export const PortHead = styled.p`
  width: 50%;
  font-size: 2rem;
  border: 1px solid transparent;
  margin-left: 5%;

  @media only screen and (max-width: 768px) {
    width: 95%;
    margin: auto;
    font-size: 700;
  }
`;

export const Box10 = styled.div`
  display: flex;
  border: 2px solid transparent;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImgBox = styled.img`
  height: 450px;
  margin: 2% auto;
  border: 1px solid transparent;
`;

export const Box11 = styled.p`
  width: 100%;
  margin: 5% auto;
  font-size: large;
  display: flex;
  flex-direction: row;
  border: 3px solid transparent;
`;

export const Span = styled.div`
  border: 1px solid transparent;
  width: 100%;
`;

export const Box12 = styled.div`
  display: flex;
  border: 1px solid transparent;
`;

export const CommaImg = styled.img`
  width: 80px;
  border: 1px solid transparent;
`;

export const Box13 = styled.div`
  border: 1px solid transparent;
  width: 70%;
  margin: 1px 0 0 6%;
`;
