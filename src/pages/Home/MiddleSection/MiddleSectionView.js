import React from 'react'
import styled from 'styled-components'

import Button from '~/components/Button'
import HeadingText from '~/components/HeadingText'
import Text from '~/components/Text'
import OrangeTreeImage from '~/images/orange_tree.png'
import OrangeFruitImage from '~/images/orange_fruit.svg'
import { breakpoint } from '~/constants/breakpoints'

const MiddleSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 200px auto;
  gap: 146px;
  padding: 62px 40px;

  @media ${breakpoint.laptop} {
    padding: 62px 40px;
    gap: 0;
  }

  @media ${breakpoint.tablet} {
    margin: 100px auto;
    flex-direction: column;
  }

  @media ${breakpoint.mobileL} {
    padding-left: 20px;
    padding-right: 20px;
  }
`
const ContentLeft = styled.div`
  flex: 1;

  @media ${breakpoint.tablet} {
    margin-bottom: 100px;
  }
`
const Round = styled.div`
  position: relative;
  max-height: 494px;
  max-width: 494px;
  min-width: 296px;
  min-height: 296px;
  width: 35vw;
  height: 35vw;
  background: #F8765E;
  border-radius: 100%;
`
const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 100%;
  @media ${breakpoint.tablet} {
    display: none;
  }
`
const ImageMobile = styled.img`
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 30vw;
  @media ${breakpoint.tablet} {
    display: block;
    min-height: 360px;
    min-width: 185px;
  }
`
const ContentRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media ${breakpoint.tablet} {
    align-items: center;
  }
`
const StyledH1 = styled(HeadingText)`
  text-align: right;
  margin-bottom: 16px !important;
  @media ${breakpoint.tablet} {
    text-align: center;    
    font-size: 30px;
    line-height: 40px;
    margin-bottom: 0px !important;
  }
`
const StyledH2 = styled(HeadingText)`
  text-align: right;
  margin-bottom: 40px !important;
  @media ${breakpoint.tablet} {
    text-align: center;
    font-weight: 500;
    font-size: 26px;
    line-height: 45px;
    margin-bottom: 30px !important;
  }
`
const StyledText = styled(Text)`
  text-align: right;
  margin-bottom: 40px !important;
  @media ${breakpoint.tablet} {
    text-align: center;
  }
`

function MiddleSectionView() {
  return(
    <MiddleSection id="pricing">
      <ContentLeft>
        <Round>
          <Image src={OrangeTreeImage} alt="orange tree" />
          <ImageMobile src={OrangeFruitImage} alt="orange fruit" />
        </Round>
      </ContentLeft>
      <ContentRight>
        <StyledH1 type="h1" fontWeight="bold" fontSize={48} lineHeight={60} color="#F8765E">
          It tastes like Premium.
        </StyledH1>
        <StyledH2 type="h2" fontWeight="bold" fontSize={34} lineHeight={45} color="#031D5B">
          Better than an apple.
        </StyledH2>
        <StyledText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
          officia deserunt mollit anim id est laborum.
        </StyledText>
        <Button>Subscribe Now</Button>
      </ContentRight>
    </MiddleSection>
  )
}  

export default MiddleSectionView