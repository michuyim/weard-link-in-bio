import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
    background-color: #1C1C1C; /* Assuming you want the same dark background globally */
    color: #FFFFFF; /* And light text */
    font-family: "Rubik", sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
  }
`
