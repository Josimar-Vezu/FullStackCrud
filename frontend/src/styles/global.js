import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

    * {
    margin: 0;
    padding: 0;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }

    body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: firebrick;
    } 
`;

export default Global;