import styled from "styled-components";

export const Card = styled.div`
  max-width: 230px;
  margin: 0 auto;
  padding: 20px 0 2rem; 0;
  h1 {
    text-align: center;
    margin-bottom: 1rem;
  }
  figure {
    text-align: center;
    border: 1px solid black;
    border-radius: 10px 10px 0 0;
    cursor: pointer;
    img {
      max-width: 200px;
      height: 350px;
    }
  }
`

export const Info = styled.div`
  margin-top: 0.5rem;
  border: 1px solid black;
  border-radius: 0 0 10px 10px;
  height: 200px;

  th[scope="row"] {
    background: #FF6464;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    padding: 10px 20px 10px 10px;
  }
  td {
    text-align: center;
    width: 100%;
    border-bottom: 1px solid black;
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