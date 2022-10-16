import styled from "styled-components";

export const Bg = styled.div `
  display: ${props => !props.showMenu ? 'none' : 'block'};
  background-color: #ffffff;
  width: 150px;
  height: 100px;
  position: absolute;
  right: 5px;
  top: 65px;
  border: 1px solid #000;
  border-radius: 10px;
  .close {
    color: #000;
    margin-left: 90%;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    right: 6%;
    top: 108%;
  }
`

export const Theme = styled.div `
  display: flex;
  button {
    margin: 10px auto 15px;
    width: 90%;
    cursor: pointer;
    background-color: #ffffff;
    border-radius: 6px;
  }
`

export const TextSize = styled.div `
  display: flex;
  justify-content: center;
  button {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 1px solid #000;
    background-color: #ffffff;
    margin-right: 10px;
    cursor: pointer;
  }
`
