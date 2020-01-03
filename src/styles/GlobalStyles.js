import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Nunito&display=swap');

    html {
        box-sizing: border-box;
        font-family: 'Nunito', 'Helvetica Neue', sans-serif;
    }

    body {
        background: #fefefe;
        height: 100vh;
        max-width: 1024px;
        overscroll-behavior: none;
        width: 100%;
        margin: 0 auto;
    }

    h1,h2,h3 {
        color: #181b32;
    }

    *, *::before, *::after {
        box-sizing: inherit;
    }
    
    ul, li, h1, h2, h3, p, button {
        margin: 0;
    }

    ul {
            list-style: none;
    }

    button {
        background: transparent;
        border: 0;
        outline: 0;
    }

    #app {
            overflow-x: hidden;
            min-height: 100vh;
            padding-bottom: 10px;
    }
`;
