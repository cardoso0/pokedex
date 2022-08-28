import styled from "styled-components";

export const Card = styled.div`
  max-width: 230px;
  margin: 1.2rem auto 2rem;
  cursor: pointer;
  h1 {
    text-align: center;
    margin-bottom: 1rem;
  }
  figure {
    width: 230px;
    text-align: center;
    border: 1px solid #000;
    border-radius: 10px 10px 0 0;
    img {
      max-width: 200px;
      height: 350px;
    }
  }

  @media (min-width: 1024px) {
    :hover {
      background-color: ${(props) => props.theme.colors.background};
      padding: 0 25px 10px 25px;
      transition: transform .3s; /* Animation */
      transform: scale(1);
      border: 1px solid ${(props) => props.theme.colors.secondary};
      border-radius: 15px;
      figure {
        border: none;
      }
    }
  }
`

export const Info = styled.div`
  margin-top: 0.5rem;
  border: 1px solid #000;
  border-radius: 0 0 10px 10px;
  height: 200px;

  th {
    background: #FF6464;
    border-right: 1px solid #000;
    border-bottom: 1px solid #000;
    padding: 10px 20px 10px 10px;
  }
  td {
    text-align: center;
    width: 100%;
    border-bottom: 1px solid #000;
  }

  table + p {
    padding-top: 10px
  }
  p + p {
    padding-bottom: 10px;
  }
  p {
    padding: 5px 5px 0 5px;
  }
`