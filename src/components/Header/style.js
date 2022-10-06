import styled from "styled-components";

export const Bg = styled.div`
  background: ${(props) => props.theme.colors.primary};
  border: ${(props) => props.theme.colors.border};
  position: relative;
`

export const Header = styled.header`
  max-width: 90%;
  margin: 0 auto;

  .accessibility {
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

    .accessibility {
      display: flex;
      width: 50px;
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