import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Pretendard';
  }
`;

export const GlobalStyleHeight100 = createGlobalStyle`
  html, body, #__next {
    height: 100%;
  }
`;
