import React from 'react'
import styled from 'styled-components'

import TopBar from './TopBar'
import TopContent from './TopContent'
import USP from './USP'
import MiddleSection from './MiddleSection'

const Main = styled.main`
  background-color: #FFFFFF;
`
const Header = styled.header`
  background: #031D5B;
`

function HomeView() {  
  return(
    <Main>
      <Header>
        <TopBar />
        <TopContent />
      </Header>
      <USP />
      <MiddleSection />
    </Main>
  )
}  

export default HomeView