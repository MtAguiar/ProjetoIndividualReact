import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

 
  body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f9;
    color: #000000;
    line-height: 1.6;
    display: block;
    justify-content: center;
    align-items: center;
  
  }

  .container-central {
    background-color: #fff;
    margin: 8% auto;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 350px;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
  }

  button {
    padding: 10px 20px;
    background-color: #0016df;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: bold;
    transition: background-color 0.3s ease;
    width: 100%;
    margin-top: 10px;
  }

  button:hover {
    background-color: #041f79;
  }

  `;

export default GlobalStyle;
