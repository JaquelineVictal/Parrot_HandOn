import styled from 'styled-components'

export const Card = styled.div`
  background-color: white;
  width: 300px;
  height: auto;
  display: flex;
  align-items: center;
  padding: 32px;
  flex-direction: column;

  #logo {
    width: 100px;

    @media only screen and (min-width: 600px) {
      width: 171px;
    }
  }

  @media only screen and (min-width: 600px) {
    width: 450px;
  }
`

