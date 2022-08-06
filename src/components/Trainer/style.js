import styled from "styled-components";

export const Card = styled.div`
  max-width: 230px;
  margin: 0 auto;
  padding: 80px 0 50px 0;
  h1 {
    text-align: center;
  }
  figure {
    text-align: center;
    border: 1px solid black;
    img {
      max-width: 200px;
      height: 350px;
    }
  }
`

export const Info = styled.div`
  border: 1px solid black;

  th[scope="row"] {
    background: #FF6464;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    padding: 10px 35px 10px 10px;
    // text-align: left;
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
    padding: 5px 0 0 10px;
  }
`