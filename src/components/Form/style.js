import styled from "styled-components";
import search from "../../assets/search.png"

export const Bg = styled.div`
  max-width: 90%;
  margin: 0 auto;
  padding-bottom: 2rem;
  
  form {
    display: flex;
    justify-content: center;
    margin: 3em auto 0 auto;

    input {
      width: 70%;
      height: 2em;
      border: 3px solid #add8e6;
      border-radius: 10px;
      background-image: url(${search});
      background-size: 20px;
      background-position: 5px 5px;
      background-repeat: no-repeat;
      padding-left: 40px;
      font-size: calc(90% + ${(props) => props.theme.textSize});

      @media (min-width: 768px) {
        width: 35%;
      }

      @media (min-width: 1024px) {
        width: 25%;
      }
    }
  }
`