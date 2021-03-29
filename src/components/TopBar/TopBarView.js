import React from 'react'
import styled from 'styled-components'

const TopBar = styled.div`
  padding: 25px 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
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
  gap: 16px;
`
const NavigationItem = styled.a`
  font-weight: 900;
  font-size: 17px;
  line-height: 32px;
`

function TopBarView() {
  return(
    <TopBar>
      <Logo>
        ORANGE
      </Logo>
      <Navigation>
        <NavigationItem>
          Benefit
        </NavigationItem>
        <NavigationItem>
          Pricing
        </NavigationItem>
        <NavigationItem>
          Testimonial
        </NavigationItem>
      </Navigation>
    </TopBar>
  );
}  

export default TopBarView