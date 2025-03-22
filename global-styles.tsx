"use client"

import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
  }

  header {
    background-color: #4CAF50;
    color: white;
    padding: 1rem;
    text-align: center;
  }

  nav a {
    margin: 0 1rem;
    color: white;
    text-decoration: none;
  }
`

export default GlobalStyles

