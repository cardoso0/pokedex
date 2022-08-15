import styled from "styled-components";

export const Bg = styled.footer`
  // background-color: #ff0400;
  background: ${(props) => props.theme.colors.primary};
  text-align: center;
  padding: 1em;
  border: ${(props) => props.theme.colors.border};
`