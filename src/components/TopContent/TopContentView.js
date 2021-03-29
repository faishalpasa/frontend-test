import React from 'react'
import styled from 'styled-components'
import MobileImageSVG from '../../../public/images/mobile_img.svg'

const TopContent = styled.div`
  padding: 25px 0px;
  padding-bottom: 270px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  max-width: 1200px;
  margin: auto;
`
const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 560px;
`
const Title = styled.h1`
  font-weight: bold;
  font-size: 48px;
  line-height: 60px;
  margin-bottom: 25px;
`
const Intro = styled.p`
  font-weight: bold;
  font-size: 16px;
  line-height: 32px;
  margin-bottom: 42px;
`
const SubscribeNow = styled.div`
  display: flex;
  gap: 16px;
`
const EmailField = styled.input`
  background: #FFFFFF;
  box-shadow: inset 0px 1px 5px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  padding: 16px 24px;
  border: unset;
  ::placeholder {
    color: #CDCDCD;
  }
`
const SubscribeButton = styled.button`
  background: #9BDBE7;
  border-radius: 20px;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  padding: 16px;
  color: #FFFFFF;
  border: unset;
`
const ContentRight = styled.div`
  margin-right: -100px;
`
const MobileImage = styled.img`
  width: 100%;
`


function TopContentView() {
  return(
    <TopContent>
      <ContentLeft>
        <Title>
          Subscribe today and get 
          notified first when we 
          launch Orange app!
        </Title>
        <Intro>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi.
        </Intro>
        <SubscribeNow>
          <EmailField placeholder="Your email address" />
          <SubscribeButton>Subscribe Now</SubscribeButton>
        </SubscribeNow>
      </ContentLeft>
      <ContentRight>
        <MobileImage src={MobileImageSVG} />
      </ContentRight>
    </TopContent>
  );
}  

export default TopContentView