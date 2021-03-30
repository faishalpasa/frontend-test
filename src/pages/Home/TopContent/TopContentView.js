import React from 'react'
import styled from 'styled-components'

import Button from '~/components/Button'
import HeadingText from '~/components/HeadingText'
import Text from '~/components/Text'
import InputField from '~/components/InputField'
import MobileImageSVG from '~/images/mobile_img.svg'
import { breakpoint } from '~/constants/breakpoints'

const TopContent = styled.div`
  padding: 25px 40px;
  padding-bottom: 270px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: auto;

  @media ${breakpoint.laptop} {
    padding: 25px 40px;
    padding-bottom: 270px;
  }

  @media ${breakpoint.tablet} {
    flex-direction: column-reverse;
    padding-bottom: 130px;
  }

  @media ${breakpoint.mobileL} {
    padding-left: 20px;
    padding-right: 20px;
  }
`
const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  color: #ffffff;
  max-width: 560px;
  flex: 1;
`
const StyledHeadingText = styled(HeadingText)`
  margin-bottom: 25px;
  @media ${breakpoint.tablet} {
    text-align: center;
    font-size: 30px;
    line-height: 40px;
  }
`
const StyledText = styled(Text)`
  margin-bottom: 42px;
  @media ${breakpoint.tablet} {
    text-align: center;
  }
`
const SubscribeNow = styled.div`
  display: flex;
  gap: 16px;
  @media ${breakpoint.tablet} {
    flex-direction: column;
    align-items: center;
  }
`
const ContentRight = styled.div`
  padding-left: 70px;
  flex: 1;
  @media ${breakpoint.tablet} {
    padding: 40px 0;
  }
`
const MobileImage = styled.img`
  width: 100%;
`


function TopContentView() {
  return(
    <TopContent>
      <ContentLeft>
        <StyledHeadingText fontSize={48} lineHeight={60}>
          Subscribe today and get 
          notified first when we 
          launch Orange app!
        </StyledHeadingText>
        <StyledText fontSize={16} lineHeight={32}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi.
        </StyledText>
        <SubscribeNow>
          <InputField placeholder="Your email address" />
          <Button>Subscribe Now</Button>
        </SubscribeNow>
      </ContentLeft>
      <ContentRight>
        <MobileImage src={MobileImageSVG} />
      </ContentRight>
    </TopContent>
  )
}  

export default TopContentView