import styled from "styled-components";

export const Inputstyle = styled.input`
  box-sizing: border-box;

  width: 205px;
  height: 39px;
  left: 553px;
  top: 380px;
  margin-bottom: 30px;

  background: #FFFFFF;
  border: 1px solid #919191;
  border-radius: 10px;

  &::placeholder {
    font-family: 'Questrial';
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    }

  @media only screen and (min-width:600px) {
    width: 335px;
    height: 32px;
  }
`;