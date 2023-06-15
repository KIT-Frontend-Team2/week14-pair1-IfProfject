import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  button {
    border: none;
  }
  ul > li {
    list-style: none;
  }
`

export default GlobalStyles
