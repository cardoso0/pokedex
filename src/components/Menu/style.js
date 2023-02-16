import styled from "styled-components";

export const Menu = styled.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 15px 0;
  font-size: calc(93% + ${(props) => props.theme.textSize});

  @media (min-width: 768px) {
    margin-right: 1rem;
  }

  @media (min-width: 1024px) {
    margin-right: 7rem;
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: #fff;
    font-weight: bold;
    padding: 0 0.4rem;
    @media (min-width: 768px) {
      padding: 0 1rem;
  }
  }
  a:hover {
    border-bottom: 1px solid #fff;
  }
`