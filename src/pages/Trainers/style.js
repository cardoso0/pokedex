import styled from "styled-components";

export const Bg = styled.div`
  width: 95%;
  margin: 0 auto;
`

export const Trainers = styled.div`
  .slider {
    @media (min-width: 480px) {
      display: flex !important;
      flex-wrap: wrap;
    }
  }

  .viewed-trainer {
    @media (min-width: 1024px) {
      :hover {
        background-color: ${(props) => props.theme.colors.background};
        padding-right: 1px;
        transition: transform .3s; /* Animation */
        transform: scale(1);
        border: 1px solid ${(props) => props.theme.colors.secondary};
        border-radius: 15px;
        figure {
          border: none;
        }
      }
    }
  }
  .selected-trainer {
    background-color: ${(props) => props.theme.colors.background};
    padding-right: 1px;
    transition: transform .3s; /* Animation */
    transform: scale(1);
    border: 1px solid ${(props) => props.theme.colors.secondary};
    border-radius: 15px;
    figure {
      border: none;
    }
  }
`

export const CallToAction = styled.section`
  text-align: center;
  margin-bottom: 2rem;

  h1 {
    margin-bottom: 0.6rem;
    font-size: calc(1.2rem + ${(props) => props.theme.textSize});
    font-weight: 600;
  }

  p {
    font-size: calc(100% + ${(props) => props.theme.textSize});
    margin-bottom: 10px;
  }

  button {
    font-size: calc(100% + ${(props) => props.theme.textSize});
    background-color: #FF6464;
    padding: 0.5rem;
    border: 1px solid #000;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      border: 1px solid #fff;
      color: #fff;
      font-weight: bold;
    }
  }
`