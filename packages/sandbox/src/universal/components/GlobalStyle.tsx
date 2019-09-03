import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle({
  button: {
    background: 'transparent',
    border: 'none',
    color: 'inherit',
    font: 'inherit',
    lineHeight: 'normal',
    margin: 0,
    outline: 'none',
    overflow: 'visible',
    padding: 0,
    width: 'auto',
  },
  p: {
    margin: 0,
    padding: 0,
  },
});

export default GlobalStyle;
