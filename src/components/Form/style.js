import styled from "styled-components";

export const Bg = styled.div`
  max-width: 90%;
  margin: 0 auto;
  padding-bottom: 2rem;
  min-height: 100vh;
  
  form {
    display: flex;
    justify-content: center;
    margin-top: 3em;

    input{
      height: 2em;
    }
    button {
      font-weight: bold;
      background-color: white;
      border: 1px solid #918c8c;
    }
  }
`