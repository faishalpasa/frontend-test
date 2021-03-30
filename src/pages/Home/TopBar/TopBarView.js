import React from 'react'
import styled from 'styled-components'

import { breakpoint } from '~/constants/breakpoints'

const TopBar = styled.div`
  padding: 25px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  max-width: 1200px;
  margin: auto;

  @media ${breakpoint.laptop} {
    padding: 25px 40px;
  }

  @media ${breakpoint.tablet} {
    flex-direction: column;
  }
`
const Logo = styled.p`
  font-weight: 900;
  font-size: 26px;
  line-height: 58px;
  margin: 0;
`
const Navigation = styled.nav`
  padding: 0;
  margin: 0;
  display: flex;
  gap: 32px;
`
const NavigationItem = styled.a`
  font-weight: 900;
  font-size: 17px;
  line-height: 32px;
  text-decoration: none;
  color: #ffffff;
  cursor: pointer;
  :visited {
    color: inherit;
  }
  :hover {
    color: inherit;
  }
  :active {
    color: inherit;
  }
`

function TopBarView() {
  return(
    <TopBar>
      <Logo>
        ORANGE
      </Logo>
      <Navigation>
        <NavigationItem href="#benefit">
          Benefit
        </NavigationItem>
        <NavigationItem href="#pricing">
          Pricing
        </NavigationItem>
        <NavigationItem href="#testimonial">
          Testimonial
        </NavigationItem>
      </Navigation>
    </TopBar>
  )
}  

export default TopBarView