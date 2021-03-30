import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Button from '~/components/Button'
import HeadingText from '~/components/HeadingText'
import Text from '~/components/Text'
import InputField from '~/components/InputField'
import { breakpoint } from '~/constants/breakpoints'

const BottomSection = styled.section`
  padding: 25px 40px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: auto;
  margin-bottom: 140px;
  @media ${breakpoint.tablet} {
    margin-bottom: 100px;
  }
  @media ${breakpoint.mobileL} {
    padding-left: 20px;
    padding-right: 20px;
  }
`
const StyledH1 = styled(HeadingText)`
  text-align: center;
  margin-bottom: 16px;
  @media ${breakpoint.tablet} {
    font-weight: bold;
    font-size: 30px;
    line-height: 40px;
  }
`
const StyledText = styled(Text)`
  text-align: center;
  margin-bottom: 50px;
  @media ${breakpoint.tablet} {
    font-size: 26px;
    line-height: 45px;
  }
`
const SubscribeBottom = styled.div`
  display: flex;
  gap: 16px;

  @media ${breakpoint.tablet} {
    flex-direction: column;
    align-items: center;
  }
`

function BottomSectionView({
  launchDayRemaining,
}) {
  return(
    <BottomSection>
      <StyledH1 fontSize={48} lineHeight={60} color="#F8765E">
        Subscribe today and get notified first!
      </StyledH1>
      <StyledText fontSize={34} lineHeight={45} color="#CDCDCD">
        {`Product launch in: ${launchDayRemaining} days`}
      </StyledText>
      <SubscribeBottom>
        <InputField placeholder="Your email address" />
        <Button>Subscribe Now</Button>
      </SubscribeBottom>
    </BottomSection>
  )
}

BottomSectionView.propTypes = {
  launchDayRemaining: PropTypes.number.isRequired,
}

export default BottomSectionView