import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
    align-items: center;
    background-color: #f6f6f6;
    display: flex;
    font-family: 'Poor Story', system-ui;
    justify-content: center;
    margin: 0;
}

#root {
  background-color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  min-height: 100vw;
  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: 650px) {
    width: 640px;
  }
  @media (max-width: 650px) {
    width: 90vw;
  }
}`;
