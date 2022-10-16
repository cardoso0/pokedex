import styled from "styled-components";

export const Bg = styled.div`
  background: ${(props) => props.theme.colors.primary};
  border: ${(props) => props.theme.colors.border};
  position: relative;
`

export const Header = styled.header`
  max-width: 90%;
  margin: 0 auto;

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

export const Accessibility = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  span {
    display: none;

    @media (min-width: 768px) {
      display: block;
      margin-right: 15px;
      text-transform: uppercase;
      color: #ffffff;
      font-weight: bold;
    }
  }

  .accessibility {
    /* display: none; */
    position: absolute;
    top: 20px;
    right: 15px;
  }

  @media (min-width: 768px) {

    .accessibility {
      display: flex;
      width: 40px;
      position: static;
    }
  }

`