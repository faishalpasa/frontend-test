import React, { useEffect } from 'react';
import styled from 'styled-components'

import TopBar from './components/TopBar'
import TopContent from './components/TopContent'
import './App.css';

const Main = styled.main`
  background-color: #FFFFFF;
`
const Header = styled.header`
  background: #031D5B;
`

function App() {
  useEffect(() => {
    fetch('https://329650a9-72c1-438e-96dd-00c1bb810a1f.mock.pstmn.io/takehometest/frontend/web/orange')
    .then(res => res.json())
    .then((response) => {
      console.log(response)
    })
    console.log('test')
  }, [])
  
  return(
    <Main>
      <Header>
        <TopBar />
        <TopContent />
      </Header>
    </Main>
  );
}  

export default App