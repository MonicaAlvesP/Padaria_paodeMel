import React from 'react'
import Header from '../src/componentes/Header/Header.jsx'
import Main from '../src/componentes/Main/Main.jsx'
import { createGlobalStyle } from 'styled-components'
import { Footer } from './componentes/Footer/Footer.jsx'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`


function App() {

  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
