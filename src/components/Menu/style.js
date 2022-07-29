import styled from "styled-components";

export const Menu = styled.nav`
  display: flex;  
  align-items: center;
  margin-right: 7rem;

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: white;
    font-weight: bold;
    padding: 0 1rem;
  }
  a:hover {
    border-bottom: 1px solid white;
  }
`