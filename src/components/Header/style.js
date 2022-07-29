import styled from "styled-components";

export const Bg = styled.div`
  background-color: #ff0400;
`

export const Header = styled.header`
  max-width: 90%;
  margin: 0 auto;

  .pokebola {
    display: none;
  }
  .logo {
    display: flex;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .pokebola {
      display: flex;
      width: 90px;
    }
    .logo {
      margin: auto 0;
      height: 70px;
    }
  }
`