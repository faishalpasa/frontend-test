import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Text from '~/components/Text'

const Footer = styled.footer`
  background: #031D5B;
`
const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: auto;
  padding: 62px 0px;
  max-width: 1200px;
`
const Copyrights = styled.div`
  color: #FFFFFF;
`
const BottomNav = styled.div`
  color: #FFFFFF;
`
const NavItem = styled.a`
  font-size: 17px;
  line-height: 32px;
  color: #FFFFFF;
  text-decoration: none;
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
  :not(:first-child):before {
    padding: 32px;
    color: #FFFFFF;
    content: "/";
  }
`

function FooterView() {  
  return(
    <Footer>
      <FooterContent>
        <Copyrights>
          <Text fontSize={20} fontWeight={25} fontWeight="bold">
            © 2021 Orange All Right Reserved
          </Text>
        </Copyrights>
        <BottomNav>
          <NavItem href="#benefit">Benefit</NavItem>
          <NavItem href="#pricing">Pricing</NavItem>
          <NavItem href="#testimonial">Testimonial</NavItem>
        </BottomNav>
      </FooterContent>
    </Footer>
  )
}

export default FooterView