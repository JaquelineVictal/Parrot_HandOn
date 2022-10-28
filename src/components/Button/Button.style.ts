import styled from "styled-components";

export const ButtonStyled = styled.button `
  font-family: 'Questrial';
  background-color: #76bb4c;
  border-color: #76bb4c;
  border-radius: 5px;
  width: 205px;
  height: 38px;
  font-weight: 400;
  font-size: 24px;
  cursor: pointer;

  :hover{ 
  background-color: black;
  color: #76bb4c;
  transition: 1.5s;
  transform: matrix3d(1, 1, 1, 50deg);
  }

  @media only screen and (min-width: 600px) {
    width: 335px;
  }
`

export const ButtonPubli = styled.button`
width: 164px;
height: 28px;
left: 887px;
top: 210px;

background: #6033AA;
border-radius: 30px;
`