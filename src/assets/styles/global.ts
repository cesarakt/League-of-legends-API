import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #0A0A0C;
        --golden: #664B1E;
        --text-content: #C4B998;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background-image: url('/background-img.png');
        background-size: cover;
        background-attachment: fixed;
        -webkit-font-smoothing: antialiased;
        scroll-behavior: smooth;

        &::-webkit-scrollbar {
            width: 0.5rem;
            background: rgba(29,32,50, 0.9);
        }

        &::-webkit-scrollbar-thumb {
            background: #678DE6;
            border-radius: 0.5rem;
        }
    }

    body, textarea, button {
         font-family: 'Open Sans', sans-serif;
         font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay{
        background: rgba(0,0,0,0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .react-modal-content{
        width: 95%;
        max-width: 1300px;
        height: 90%;
        background: var(--background);
        position: relative;
        border-radius: 0.5rem;
    }


`
