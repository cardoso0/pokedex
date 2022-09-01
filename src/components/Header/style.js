import styled from "styled-components";

export const Bg = styled.div`
  // background-color: #ff0400;
  background: ${(props) => props.theme.colors.primary};
  border: ${(props) => props.theme.colors.border};
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
    padding-top: 10px;
    width: 40%;
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
      width: 85%;
      padding-top: 0;
      margin: auto 0;
    }
  }

  @media (min-width: 1024px) {
    .logo {
      width: 100%;
    }
  }
`