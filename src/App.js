import React from 'react'
import styled from 'styled-components'

import TopBar from './components/TopBar'
import TopContent from './components/TopContent'
import USP from './components/USP'
import './App.css';

const Main = styled.main`
  background-color: #FFFFFF;
`
const Header = styled.header`
  background: #031D5B;
`

function App() {  
  return(
    <Main>
      <Header>
        <TopBar />
        <TopContent />
      </Header>
      <USP />
    </Main>
  )
}  

export default App