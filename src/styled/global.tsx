import { createGlobalStyle } from 'styled-components';
import { ThemeProps, breakpoints } from './themes';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html{
    transition: background-color 0.3s linear;
    @media (max-width: ${breakpoints.md}px){
      font-size: 14px;
    }
  }

  body {
    line-height: ${(props: ThemeProps) => props.theme.lineHeights.body};;
    color: ${(props: ThemeProps) => props.theme.colors.gray400};
    margin: 0;
    padding: 0;
  }
  div {
    transition: background-color 0.3s linear;
  }

  input,
  button,
  textarea,
  select {

    &:focus {
      outline: 0;
    }
  }
  p {
    margin: 0;
    transition: color 0.3s linear;
  }
  span {
  }
  h1,h2,h3,h4,h5{
    margin: 0;
  }


  a {
    text-decoration: none;

    &:hover {
      color: #000;
    }

    &.active {
      color: ${(props: ThemeProps) => props.theme.colors.blue100};
    }
  }


`;

export default GlobalStyle;
