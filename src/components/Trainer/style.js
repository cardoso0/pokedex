import styled from "styled-components";

export const Card = styled.div`
  max-width: 230px;
  margin: 1.2rem auto 2rem;
  cursor: pointer;
  h1 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: calc(200% + ${(props) => props.theme.textSize});
  }
  figure {
    width: 230px;
    text-align: center;
    border: 1px solid #000;
    border-radius: 10px 10px 0 0;
    img {
      margin: 0 auto;
      max-width: 200px;
      height: 350px;
    }
  }
`

export const Info = styled.div`
  margin-top: 0.5rem;
  border: 1px solid #000;
  border-radius: 0 0 10px 10px;
  min-height: 200px;
  width: 230px;

  th {
    background: #FF6464;
    border-right: 1px solid #000;
    border-bottom: 1px solid #000;
    padding: 10px 20px 10px 10px;
    font-size: calc(100% + ${(props) => props.theme.textSize});
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
    font-size: calc(100% + ${(props) => props.theme.textSize});
  }
`