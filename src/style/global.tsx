import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@700&display=swap");
body {
align-items: center;
    background-color: #f6f6f6;
    display: flex;
    font-family: "Noto Sans KR", sans-serif;
    justify-content: center;
    margin: 0;
}

#root {
  background-color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}`;
