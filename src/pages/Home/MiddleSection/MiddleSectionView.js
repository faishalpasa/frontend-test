import React from 'react'
import styled from 'styled-components'
import OrangeTreeImage from '~/images/orange_tree.png'

const MiddleSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 200px auto;
  gap: 146px;
  padding: 62px 0px;
`
const ContentLeft = styled.div`
  flex: 1;
`
const Round = styled.div`
  position: relative;
  width: 494px;
  height: 494px;
  background: #F8765E;
  border-radius: 100%;
`
const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`
const ContentRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
const Title = styled.h1`
  font-weight: bold;
  font-size: 48px;
  line-height: 60px;
  text-align: right;
  color: #F8765E;
  margin-top: 0px;
  margin-bottom: 16px;
`
const Description = styled.p`
  font-weight: bold;
  font-size: 34px;
  line-height: 45px;
  text-align: right;
  color: #031D5B;
  margin-top: 0px;
  margin-bottom: 40px;
`
const LongDescription = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 32px;
  text-align: right;
  color: #5B6C94;
  margin-top: 0px;
  margin-bottom: 40px;
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
  cursor: pointer;
`

function MiddleSectionView() {
  return(
    <MiddleSection id="pricing">
      <ContentLeft>
        <Round>
          <Image src={OrangeTreeImage} alt="orange tree" />
        </Round>
      </ContentLeft>
      <ContentRight>
        <Title>
          It tastes like Premium.
        </Title>
        <Description>
          Better than an apple.
        </Description>
        <LongDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
          officia deserunt mollit anim id est laborum.
        </LongDescription>
        <SubscribeButton>
          Subscribe Now
        </SubscribeButton>
      </ContentRight>
    </MiddleSection>
  );
}  

export default MiddleSectionView