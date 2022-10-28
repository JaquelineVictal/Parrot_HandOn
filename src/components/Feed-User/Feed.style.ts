import styled from "styled-components";


export const FeedUserBox = styled.section`
max-width: 700px;
height: 183px;
left: 385px;
top: 83px;
display: flex;

.div-input {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 20px;
}

.input{
  box-sizing: border-box;

  width: 230px;
  height: 70px;
  left: 509px;
  top: 126px;

  border: 1px solid #8BC34A;
  border-radius: 10px;

  @media only screen and (min-width: 600px) {
   width: 95%;
  }
}

border-width: 0px 1px 1px 1px;
border-style: solid;
border-color: #C5C5C5;
`

export const FeedBox = styled.section`
box-sizing: border-box;
max-width: 700px;
height: 100vh;
left: 385px;
top: 266px;

background: #FFFFFF;
border: 1px solid #C5C5C5;

.Publi{
  border-width: 0px 0px 1px 0px;
  border-style: solid;
  border-color: #C5C5C5;
  padding-bottom: 38px;
}
`